import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';

export default function Home() {
    const newArrivals = PRODUCTS.filter(p => p.isNew).slice(0, 4);

    return (
        <main className="overflow-x-hidden">
            {/* Hero Section */}
            <section className="relative h-[90vh] md:h-[921px] w-full overflow-hidden bg-surface-container">
                <div className="absolute inset-0">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHRzSUxZGq7c62PzKZQXUkk5Afd-6fxdXsK1MRfNW90lg_4KQq6FXr6dX8POSAu0nrbHfynJYhWjjYY6Y4yTHVU_DGIjOIDMngm98c5s9am1GRO8U4KdXsTrHhW6lF9Dlt00CVu0gYpoG74E4Ll9DBIZu2SVNrkyUhXXmFiH5tAAra2aITSWyDCaS9zXSmQxCCQWVx9l3rC2HHL5DUyLMKDe4IgxKJtR_-CsIwT5buF-aY6jjci1rxibUlY1td9ilgRR5169df9PTr" 
                        alt="Summer Collection 2024"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent"></div>
                </div>
                <div className="relative z-10 h-full flex flex-col justify-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-[13px] font-bold text-secondary uppercase tracking-[0.2em] mb-4"
                    >
                        Summer Collection 2024
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-[100px] font-serif text-on-background mb-10 max-w-3xl leading-[1.05]"
                    >
                        The Art of <br/><span className="italic font-normal">Modest Elegance</span>
                    </motion.h1>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Link to="/collections" className="bg-primary text-on-primary px-10 py-5 text-[13px] font-bold uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all">
                            Shop The Edit
                        </Link>
                        <Link to="/lookbook" className="border border-secondary text-secondary px-10 py-5 text-[13px] font-bold uppercase tracking-widest hover:bg-secondary hover:text-on-secondary transition-all">
                            Lookbook
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Featured Collections */}
            <section className="py-spacing-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="flex justify-between items-end mb-16 px-2 md:px-0">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-serif text-on-background mb-4">Featured Collections</h2>
                        <p className="text-secondary text-lg">Curated essentials for the modern modest wardrobe.</p>
                    </div>
                    <Link to="/collections" className="hidden md:block text-[14px] font-medium text-primary border-b border-primary/20 pb-1 hover:border-primary transition-all">
                        View All Collections
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter min-h-[700px]">
                    <div className="md:col-span-7 relative group overflow-hidden cursor-pointer">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWw1pZy7Kc0VrRD8QNR8EfwGqBJ52imAoaZaMCW3snPWOVuFkdV5XIAQVKIiIJ2mFCkZMONh1SYg8JKwPCL7hJ77eidplwxCFkId5_Iy8GV8l58owZ-tpx2iK3VRjO7L5sTjz6y1OiUsnU-vnRIl6ST6T03puVkCFVUszdU-u0H0l_rZ9CKJZShxLJcRpBQVmJHVLEKTAgaWeWgfSe4V-0LAoTBVn_unpGkvQhGYrHH45xwRg8hcFJysdP8Xz02m3avULZSFmqtLb5" 
                            alt="Signature Abayas"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/10 transition-opacity group-hover:bg-black/20"></div>
                        <div className="absolute bottom-12 left-12 text-white">
                            <h3 className="text-3xl font-serif mb-3">Signature Abayas</h3>
                            <p className="text-[12px] font-bold uppercase tracking-[0.2em] opacity-90">Explore Silhouettes</p>
                        </div>
                    </div>
                    <div className="md:col-span-5 grid grid-rows-2 gap-gutter">
                        <div className="relative group overflow-hidden cursor-pointer">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDUZk68AemwM23qYj3Iwc4e0_UlJ3rPXK4MB1TEj6VZYj3Bu-i_jNyYGEFYjhoIoEFqWAvbWk8zZhTElo2Nj3SK4dcYerOYixvZtoVS-gnb-CJVX1f_Ukge5cw2197Rfr_2SRrvkhGboPlpbDEzYU5itLgH-prZQAwbnXR_-mvY6Uw_kkgqTc5ONR-1VYnNbWiCbxx-y4oZcMMHzdolhvB7XFgsBHtxW2HEtjlPLtPxyDlyL9EiSALuApFJrSHxQjCet9vDltQ8VsY" 
                                alt="Essential Hijabs"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/5"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <h3 className="text-2xl font-serif mb-2">Essential Hijabs</h3>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Shop Tones</span>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden cursor-pointer">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-jcBypWO4GnAEheRAHdPNzBBJY6qbB9SOoZcdViIx0x-nhm4fze2FSFRxk_N22GZg1LEfCv3laPZ2A5bzcfhMWSiVXC47ZjyStLfv4bf0QR4urmicGstCySwwjo-jXg_pa7meqLw1r7vAETZh6TNF4cbloGRXpmL4FjvJxNZmf5oC112m6iHdT-6Qb6MI6ZYglJDCJKXmC9gDFpx0QceV4ORt30CtsLl9EAmGfMTCdLpP4nuPkvEra4-M65ztzCwKbXEhzDxkkpSn" 
                                alt="Prayer Sets"
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/10"></div>
                            <div className="absolute bottom-10 left-10 text-white">
                                <h3 className="text-2xl font-serif mb-2">Prayer Sets</h3>
                                <span className="text-[11px] font-bold uppercase tracking-[0.2em]">Pure Serenity</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Brand Story Section */}
            <section className="bg-surface-container-low py-spacing-section-gap">
                <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col md:flex-row items-center gap-16 md:gap-24">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkZDgiasA2YZLwqu5YqZWDLAfOqdSruEJGNrRHw4vNDx9T0Qn5r-f9mm8dv4SBYGcOvrcSEmWZxebdLWjyKywWlV9qC5uaPwoKJ-8oIHGea-hNaaIF1rqOlAEDXXG0MU3S7Iff55yrckQ_Vqr8VIYdn8gSVNuhR2pAq0FISHaE4xBObFti3dwHrGYzY52xvC5N4qYijlBAlgoJsb6WS8no0h1Wy6ZsjLZy722oxhG_DgtLkDV6tgmFLlvv2muL0stbO8cDd9WPEjle" 
                                alt="Craftsmanship"
                                className="w-full aspect-[4/5] object-cover editorial-shadow"
                            />
                            <div className="absolute -bottom-10 -right-10 hidden lg:flex bg-tertiary-fixed p-12 w-72 h-72 flex-col justify-center">
                                <p className="text-2xl font-serif text-primary italic leading-tight">Quality in <br/>every thread.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-start gap-8">
                        <span className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em]">Our Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-on-background leading-tight">Crafting Grace Through Simplicity</h2>
                        <p className="text-on-surface-variant text-lg leading-relaxed">
                            Serene Grace was born from a desire to redefine modest fashion. We believe that true luxury isn't found in excess, but in the perfect balance of silhouette, fabric, and intention.
                        </p>
                        <p className="text-on-surface-variant leading-relaxed">
                            Each piece in our collection is thoughtfully designed to honor tradition while embracing the minimalism of contemporary aesthetics. We source only the finest natural fabrics to ensure that grace is not just seen, but felt.
                        </p>
                        <Link to="/story" className="inline-flex items-center gap-4 text-primary font-bold text-[13px] uppercase tracking-widest group pt-4">
                            Our Story 
                            <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* New Arrivals Grid */}
            <section className="py-spacing-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
                <div className="text-center mb-20 px-2">
                    <h2 className="text-4xl md:text-6xl font-serif text-on-background mb-6">New Arrivals</h2>
                    <div className="w-20 h-[1px] bg-primary mx-auto"></div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-gutter gap-y-16">
                    {newArrivals.map(product => (
                        <Link key={product.id} to={`/products/${product.id}`} className="group">
                            <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-surface-container">
                                <img 
                                    src={product.image} 
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {product.isNew && (
                                    <div className="absolute top-4 left-4 bg-background px-3 py-1 text-[11px] font-bold text-secondary uppercase tracking-wider">
                                        New In
                                    </div>
                                )}
                                {product.isLimited && (
                                    <div className="absolute top-4 left-4 bg-primary text-on-primary px-3 py-1 text-[11px] font-bold uppercase tracking-wider">
                                        Limited
                                    </div>
                                )}
                                <div className="absolute bottom-0 left-0 right-0 bg-white/90 py-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 text-center font-bold text-[12px] uppercase tracking-widest text-primary">
                                    Quick Buy
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-body-md text-on-background mb-1 group-hover:text-primary transition-colors">{product.name}</h3>
                                <p className="text-secondary tracking-wide">${product.price.toFixed(2)}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="border-t border-outline/10 py-32 bg-surface-container/30">
                <div className="max-w-2xl mx-auto px-margin-mobile text-center">
                    <h2 className="text-4xl md:text-5xl font-serif text-on-background mb-6">Join the Serene Society</h2>
                    <p className="text-secondary text-lg mb-12">Subscribe to receive early access to new collections and exclusive editorial content.</p>
                    <form className="flex flex-col md:flex-row gap-4" onSubmit={e => e.preventDefault()}>
                        <input 
                            type="email" 
                            placeholder="Email Address" 
                            className="flex-grow bg-transparent border-0 border-b border-outline focus:ring-0 focus:border-primary px-0 py-4 font-sans text-lg placeholder-secondary/50"
                        />
                        <button className="bg-primary text-on-primary px-12 py-4 text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </main>
    );
}
