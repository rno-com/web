import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Cart() {
    const { cart, removeFromCart, updateQuantity, total, itemCount } = useCart();

    if (itemCount === 0) {
        return (
            <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-64 pb-32 text-center">
                <h1 className="text-5xl font-serif text-on-surface mb-8">Your Shopping Bag</h1>
                <p className="text-xl text-secondary mb-12">Your bag is currently empty.</p>
                <Link to="/collections" className="bg-primary text-on-primary px-12 py-5 text-[13px] font-bold uppercase tracking-widest hover:bg-on-primary-container transition-all inline-block">
                    Explore Collections
                </Link>
            </main>
        );
    }

    return (
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-40 pb-32">
            <h1 className="text-5xl md:text-6xl font-serif text-on-surface mb-16">Shopping Bag ({itemCount})</h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
                {/* Cart Items */}
                <div className="lg:col-span-8 flex flex-col gap-12">
                    <AnimatePresence>
                        {cart.map((item) => (
                            <motion.div 
                                key={`${item.id}-${item.selectedSize}-${item.selectedColor}`}
                                layout
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                className="flex flex-col md:flex-row gap-8 pb-12 border-b border-outline/10 last:border-0"
                            >
                                <Link to={`/products/${item.id}`} className="w-full md:w-48 aspect-[3/4] bg-surface-container overflow-hidden group">
                                    <img 
                                        src={item.image} 
                                        alt={item.name} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </Link>
                                <div className="flex-1 flex flex-col justify-between py-2">
                                    <div>
                                        <div className="flex justify-between items-start mb-4">
                                            <Link to={`/products/${item.id}`}>
                                                <h3 className="text-2xl font-serif text-on-surface hover:text-primary transition-colors">{item.name}</h3>
                                            </Link>
                                            <p className="text-xl font-serif text-primary">${(item.price * item.quantity).toFixed(2)}</p>
                                        </div>
                                        <div className="flex flex-col gap-2 mb-8">
                                            <p className="text-[12px] font-bold text-secondary uppercase tracking-widest">
                                                Size: <span className="text-on-surface">{item.selectedSize}</span>
                                            </p>
                                            <div className="flex items-center gap-3">
                                                <p className="text-[12px] font-bold text-secondary uppercase tracking-widest">Color:</p>
                                                <div className="w-4 h-4 rounded-full border border-outline/10 shadow-sm" style={{ backgroundColor: item.selectedColor }}></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center border border-outline/20">
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity - 1)}
                                                className="w-12 h-12 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                                            >
                                                <Minus size={16} />
                                            </button>
                                            <span className="w-12 text-center text-sm font-bold">{item.quantity}</span>
                                            <button 
                                                onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, item.quantity + 1)}
                                                className="w-12 h-12 flex items-center justify-center text-secondary hover:text-primary transition-colors"
                                            >
                                                <Plus size={16} />
                                            </button>
                                        </div>
                                        <button 
                                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                                            className="inline-flex items-center gap-2 text-[11px] font-bold text-secondary hover:text-error uppercase tracking-widest transition-colors"
                                        >
                                            <Trash2 size={16} />
                                            Remove
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Summary */}
                <div className="lg:col-span-4">
                    <div className="sticky top-40 bg-surface-container-low p-8 md:p-12 editorial-shadow">
                        <h2 className="text-2xl font-serif text-on-surface mb-8 border-b border-outline/10 pb-6 uppercase tracking-widest text-[14px]">Order Summary</h2>
                        
                        <div className="space-y-6 mb-10">
                            <div className="flex justify-between items-center text-on-surface-variant">
                                <span className="text-[14px]">Subtotal</span>
                                <span className="font-serif text-lg">${total.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-on-surface-variant">
                                <span className="text-[14px]">Estimated Shipping</span>
                                <span className="text-[12px] font-bold uppercase tracking-widest text-primary">Complimentary</span>
                            </div>
                            <div className="flex justify-between items-center text-on-surface-variant">
                                <span className="text-[14px]">Tax</span>
                                <span className="text-[14px] italic">Calculated at checkout</span>
                            </div>
                        </div>

                        <div className="border-t border-outline/10 pt-8 mb-12">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-primary">Total</span>
                                <span className="text-4xl font-serif text-primary">${total.toFixed(2)}</span>
                            </div>
                            <p className="text-[11px] text-secondary italic">Excl. applicable taxes</p>
                        </div>

                        <Link to="/checkout" className="w-full bg-primary text-on-primary py-6 text-[13px] font-bold uppercase tracking-[0.2em] mb-6 hover:bg-on-primary-container transition-all flex items-center justify-center gap-4 group">
                            Checkout 
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                        
                        <div className="flex flex-col gap-4 text-center">
                            <p className="text-[12px] text-secondary">Accepted payments</p>
                            <div className="flex justify-center gap-4 opacity-40 grayscale h-6">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-full" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-full" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
