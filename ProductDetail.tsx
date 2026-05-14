import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

export default function ProductDetail() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = PRODUCTS.find(p => p.id === id);

    const [selectedSize, setSelectedSize] = useState('');
    const [selectedColor, setSelectedColor] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {
        if (product) {
            setSelectedSize(product.sizes[0]);
            setSelectedColor(product.colors[0]);
        }
    }, [product]);

    if (!product) return <div className="pt-40 text-center">Product not found</div>;

    const handleAddToCart = () => {
        addToCart(product, selectedSize, selectedColor);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    const recommendations = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

    return (
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-40 pb-32">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-3 mb-16 text-[10px] font-bold uppercase tracking-[0.2em] text-on-surface-variant">
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
                <span className="opacity-20">/</span>
                <Link to="/collections" className="hover:text-primary transition-colors">{product.category}</Link>
                <span className="opacity-20">/</span>
                <span className="text-primary">{product.name}</span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-gutter">
                {/* Left: Product Images */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2 aspect-[3/4] bg-surface-container-low overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-[3/4] bg-surface-container-low overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover filter brightness-95 transition-all hover:brightness-100" />
                        </div>
                        <div className="aspect-[3/4] bg-surface-container-low overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover filter contrast-105 transition-all hover:contrast-100" />
                        </div>
                    </div>
                </div>

                {/* Right: Product Info */}
                <div className="lg:col-span-4">
                    <div className="sticky top-40 h-fit flex flex-col gap-8">
                        <div>
                            {product.isLimited && <span className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Limited Edition</span>}
                            <h1 className="text-4xl md:text-5xl font-serif text-on-surface mb-4 leading-tight">{product.name}</h1>
                            <p className="text-3xl font-serif text-primary">${product.price.toFixed(2)}</p>
                        </div>

                        <div className="border-t border-outline/10 pt-8">
                            <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                                {product.description}
                            </p>
                            <ul className="flex flex-col gap-4 text-secondary text-[15px]">
                                {product.details.map((detail, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <Check size={18} className="text-primary flex-shrink-0 mt-1" />
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Color Selector */}
                        <div>
                            <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest block mb-5">Select Color</span>
                            <div className="flex gap-4">
                                {product.colors.map(color => (
                                    <button 
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-10 h-10 rounded-full border border-outline/10 p-1 flex items-center justify-center transition-all ${selectedColor === color ? 'ring-2 ring-primary ring-offset-4' : 'hover:scale-110'}`}
                                    >
                                        <div className="w-full h-full rounded-full shadow-inner" style={{ backgroundColor: color }}></div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Size Selector */}
                        <div>
                            <div className="flex justify-between items-center mb-5">
                                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Select Size</span>
                                <button className="text-[11px] font-bold text-primary underline uppercase tracking-wider">Size Guide</button>
                            </div>
                            <div className="grid grid-cols-3 gap-3">
                                {product.sizes.map(size => (
                                    <button 
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`py-4 border text-[13px] font-bold transition-all ${selectedSize === size ? 'border-primary bg-surface-container-low text-primary' : 'border-outline/20 hover:border-primary'}`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4 pt-6">
                            <button 
                                onClick={handleAddToCart}
                                disabled={!selectedSize || !selectedColor}
                                className={`w-full py-6 text-[13px] font-bold uppercase tracking-[0.2em] transition-all duration-500 relative overflow-hidden group ${isAdded ? 'bg-secondary text-white' : 'bg-primary text-on-primary hover:bg-on-primary-container'}`}
                            >
                                <motion.span 
                                    animate={isAdded ? { y: -50, opacity: 0 } : { y: 0, opacity: 1 }}
                                    className="block"
                                >
                                    Add to Bag
                                </motion.span>
                                <motion.span 
                                    initial={{ y: 50, opacity: 0 }}
                                    animate={isAdded ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
                                    className="absolute inset-0 flex items-center justify-center"
                                >
                                    Added to Bag
                                </motion.span>
                            </button>
                            <button className="w-full py-6 border border-secondary text-secondary text-[13px] font-bold uppercase tracking-[0.2em] hover:bg-surface-container-low transition-all">
                                Wishlist
                            </button>
                        </div>

                        {/* Accordion mockup */}
                        <div className="border-t border-outline/10 pt-6">
                            <details className="group border-b border-outline/10">
                                <summary className="flex justify-between items-center py-4 cursor-pointer list-none group-hover:text-primary transition-colors">
                                    <span className="text-[12px] font-bold uppercase tracking-[0.2em]">Shipping & Returns</span>
                                    <span className="transition-transform group-open:rotate-180">↓</span>
                                </summary>
                                <div className="py-4 text-on-surface-variant text-[14px] leading-relaxed">
                                    Complimentary worldwide shipping on all orders over $300. Returns accepted within 14 days of delivery.
                                </div>
                            </details>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recommendations */}
            <section className="mt-spacing-section-gap">
                <div className="flex justify-between items-end mb-16 px-2 lg:px-0">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-on-surface mb-4">You May Also Like</h2>
                        <p className="text-secondary text-lg">Curated pieces to complete your wardrobe.</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-gutter">
                    {recommendations.map(p => (
                        <Link key={p.id} to={`/products/${p.id}`} className="group">
                            <div className="aspect-[3/4] bg-surface-container-low mb-8 overflow-hidden group-hover:editorial-shadow transition-all duration-700">
                                <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                            <div className="text-center">
                                <h3 className="text-body-md text-on-surface mb-2 font-medium group-hover:text-primary transition-colors">{p.name}</h3>
                                <p className="text-secondary tracking-widest text-[14px]">${p.price.toFixed(2)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </main>
    );
}
