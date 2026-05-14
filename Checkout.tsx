import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';

export default function Checkout() {
    const { total, itemCount, cart } = useCart();
    const [isSuccess, setIsSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSuccess(true);
    };

    if (isSuccess) {
        return (
            <main className="min-h-screen flex items-center justify-center pt-24 pb-32 px-margin-mobile">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="max-w-xl w-full text-center p-16 bg-surface-container-low editorial-shadow"
                >
                    <CheckCircle size={80} className="text-primary mx-auto mb-8" strokeWidth={1} />
                    <h1 className="text-5xl font-serif text-on-background mb-4">Graceful Choice</h1>
                    <p className="text-secondary text-lg mb-12">Your order has been received and is being prepared with care. A confirmation email will be sent shortly.</p>
                    <Link to="/collections" className="bg-primary text-on-primary px-12 py-5 text-[13px] font-bold uppercase tracking-widest hover:bg-on-primary-container transition-all inline-block">
                        Continue Shopping
                    </Link>
                </motion.div>
            </main>
        );
    }

    if (itemCount === 0) {
        return (
            <div className="pt-40 text-center">
                <p className="text-xl text-secondary mb-8">Your bag is empty. Please add items before checking out.</p>
                <Link to="/collections" className="text-primary font-bold underline">Go to Collections</Link>
            </div>
        );
    }

    return (
        <main className="max-w-6xl mx-auto px-margin-mobile md:px-margin-desktop pt-40 pb-32">
            <h1 className="text-5xl font-serif text-on-surface mb-16">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                    <section>
                        <h2 className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em] mb-8">Shipping Information</h2>
                        <div className="grid grid-cols-2 gap-6">
                            <InputField label="First Name" placeholder="Jane" required />
                            <InputField label="Last Name" placeholder="Doe" required />
                            <div className="col-span-2">
                                <InputField label="Email Address" type="email" placeholder="jane@example.com" required />
                            </div>
                            <div className="col-span-2">
                                <InputField label="Street Address" placeholder="123 Serene Ave" required />
                            </div>
                            <InputField label="City" placeholder="Dubai" required />
                            <InputField label="Country" placeholder="UAE" required />
                        </div>
                    </section>

                    <section>
                        <h2 className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em] mb-8">Payment</h2>
                        <div className="p-8 border border-outline/20 bg-surface-container-low mb-6">
                            <p className="text-sm text-secondary mb-6">All transactions are secure and encrypted.</p>
                            <div className="space-y-6">
                                <InputField label="Card Number" placeholder="0000 0000 0000 0000" required />
                                <div className="grid grid-cols-2 gap-6">
                                    <InputField label="Expiry" placeholder="MM/YY" required />
                                    <InputField label="CVC" placeholder="000" required />
                                </div>
                            </div>
                        </div>
                    </section>

                    <button type="submit" className="bg-primary text-on-primary py-6 text-[13px] font-bold uppercase tracking-[0.2em] hover:opacity-90 transition-opacity">
                        Complete Order • ${total.toFixed(2)}
                    </button>
                    
                    <Link to="/cart" className="flex items-center justify-center gap-2 text-secondary text-[11px] font-bold uppercase tracking-widest hover:text-primary transition-colors">
                        <ArrowLeft size={16} /> Return to Bag
                    </Link>
                </form>

                {/* Summary */}
                <aside className="hidden lg:block">
                    <div className="sticky top-40 bg-surface-container p-12">
                        <h2 className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em] mb-8 pb-4 border-b border-outline/10">Basket Summary</h2>
                        <div className="flex flex-col gap-6 mb-10 overflow-y-auto max-h-[400px]">
                            {cart.map(item => (
                                <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4">
                                    <div className="w-20 aspect-[3/4] bg-surface-container-low overflow-hidden">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-[14px] font-serif text-on-surface">{item.name}</h4>
                                        <p className="text-[11px] text-secondary">Qty: {item.quantity} • Size: {item.selectedSize}</p>
                                        <p className="text-[13px] font-bold text-primary mt-1">${(item.price * item.quantity).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-4 border-t border-outline/10 pt-8">
                            <div className="flex justify-between text-sm">
                                <span className="text-secondary">Subtotal</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-secondary">Shipping</span>
                                <span className="text-primary font-bold uppercase text-[10px]">Free</span>
                            </div>
                            <div className="flex justify-between text-2xl font-serif text-primary pt-4 border-t border-outline/5">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </main>
    );
}

function InputField({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-secondary ml-1">{label}</label>
            <input 
                {...props}
                className="bg-transparent border-0 border-b border-outline/30 focus:ring-0 focus:border-primary px-0 py-3 text-[15px] placeholder-secondary/30 transition-colors"
            />
        </div>
    );
}
