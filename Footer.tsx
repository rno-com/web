import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-surface-container-low border-t border-outline/5 pt-spacing-section-gap pb-12">
            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-gutter">
                
                {/* Brand Column */}
                <div className="md:col-span-1">
                    <Link to="/" className="inline-block mb-6">
                        <h2 className="text-4xl font-serif text-primary tracking-tighter">Serene Grace</h2>
                    </Link>
                    <p className="text-on-surface-variant text-body-md mb-8 max-w-xs">
                        Elevated modest fashion for the modern woman who values grace, quality, and contemporary minimalism.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-secondary hover:text-primary transition-colors"><Twitter size={20} /></a>
                        <a href="#" className="text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
                    </div>
                </div>

                {/* Shop Column */}
                <div className="flex flex-col gap-4">
                    <span className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Shop</span>
                    <Link to="/collections?filter=new" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">New Arrivals</Link>
                    <Link to="/collections" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Best Sellers</Link>
                    <Link to="/collections" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Collections</Link>
                    <Link to="/collections?filter=sale" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Sale</Link>
                </div>

                {/* Company Column */}
                <div className="flex flex-col gap-4">
                    <span className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Company</span>
                    <Link to="/story" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">About Us</Link>
                    <Link to="/sustainability" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Sustainability</Link>
                    <Link to="#" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Store Locator</Link>
                    <Link to="#" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Newsletter</Link>
                </div>

                {/* Support Column */}
                <div className="flex flex-col gap-4">
                    <span className="font-sans text-[12px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Support</span>
                    <Link to="#" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Customer Service</Link>
                    <Link to="#" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Shipping Info</Link>
                    <Link to="#" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Returns & Exchanges</Link>
                    <Link to="#" className="text-on-surface-variant hover:text-primary text-[14px] transition-colors">Size Guide</Link>
                </div>
            </div>

            <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-spacing-section-gap pt-8 border-t border-outline/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <span className="text-[12px] text-secondary tracking-wide">© 2024 Serene Grace. All rights reserved.</span>
                <div className="flex gap-8">
                    <Link to="#" className="text-[12px] text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link to="#" className="text-[12px] text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
