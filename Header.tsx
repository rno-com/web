import { Link, useLocation } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

export default function Header() {
    const { itemCount } = useCart();
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = [
        { name: 'New Arrivals', path: '/collections?filter=new' },
        { name: 'Collections', path: '/collections' },
        { name: 'Abayas', path: '/collections?category=Abayas' },
        { name: 'Hijabs', path: '/collections?category=Hijabs' },
        { name: 'Sale', path: '/collections?filter=sale' },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline/5 transition-all duration-300">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4 md:py-6 flex items-center justify-between">
                
                {/* Left: Desktop Nav */}
                <nav className="hidden md:flex flex-1 items-center gap-8">
                    {navLinks.map(link => {
                        const isActive = location.pathname === link.path || (link.path.includes('?') && location.search.includes(link.path.split('?')[1]));
                        return (
                            <Link 
                                key={link.name} 
                                to={link.path}
                                className={`text-[13px] font-medium tracking-widest uppercase transition-all duration-300 hover:text-primary ${isActive ? 'text-primary border-b border-primary/30 pb-0.5' : 'text-secondary'}`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile: Hamburger */}
                <button className="md:hidden p-2 text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <Menu size={24} />
                </button>

                {/* Center: Logo */}
                <Link to="/" className="flex-none text-center">
                    <h1 className="text-3xl md:text-5xl font-serif text-primary tracking-tighter leading-none">Serene Grace</h1>
                </Link>

                {/* Right: Actions */}
                <div className="flex-1 flex justify-end items-center gap-4 md:gap-6">
                    <div className="hidden lg:flex items-center border-b border-outline/20 pb-1 mr-2 group focus-within:border-primary transition-colors">
                        <Search size={18} className="text-secondary group-focus-within:text-primary transition-colors" />
                        <input 
                            type="text" 
                            placeholder="Search" 
                            className="bg-transparent border-none focus:ring-0 text-sm placeholder-secondary/50 w-24 xl:w-32 py-0 px-2"
                        />
                    </div>
                    <button className="text-primary hover:opacity-70 transition-opacity">
                        <User size={22} strokeWidth={1.5} />
                    </button>
                    <Link to="/cart" className="text-primary hover:opacity-70 transition-opacity relative">
                        <ShoppingBag size={22} strokeWidth={1.5} />
                        {itemCount > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-on-primary text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">
                                {itemCount}
                            </span>
                        )}
                    </Link>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="fixed inset-0 top-[64px] bg-surface z-40 p-margin-mobile flex flex-col gap-6 md:hidden"
                    >
                        {navLinks.map(link => (
                            <Link 
                                key={link.name} 
                                to={link.path} 
                                onClick={() => setIsMenuOpen(false)}
                                className="text-2xl font-serif text-primary border-b border-outline/10 pb-4"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
