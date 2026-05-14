import { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../constants';

export default function Collections() {
    const [searchParams] = useSearchParams();
    const categoryFilter = searchParams.get('category');
    const typeFilter = searchParams.get('filter');

    const [selectedCategories, setSelectedCategories] = useState<string[]>(categoryFilter ? [categoryFilter] : []);
    const [sortBy, setSortBy] = useState('Newest First');
    const [priceRange, setPriceRange] = useState(1000);

    const categories = ['Abayas', 'Hijabs', 'Kaftans', 'Modest Sets'];
    const colors = [
        { name: 'Beige', hash: '#F5F5DC' },
        { name: 'Onyx', hash: '#1B1C19' },
        { name: 'Sage', hash: '#536346' },
        { name: 'Taupe', hash: '#675D50' },
        { name: 'Sand', hash: '#D2B48C' }
    ];

    const filteredProducts = useMemo(() => {
        let items = PRODUCTS;
        
        if (selectedCategories.length > 0) {
            items = items.filter(p => selectedCategories.includes(p.category));
        }

        if (typeFilter === 'new') {
            items = items.filter(p => p.isNew);
        }

        items = items.filter(p => p.price <= priceRange);

        if (sortBy === 'Price: Low to High') {
            items = [...items].sort((a, b) => a.price - b.price);
        } else if (sortBy === 'Price: High to Low') {
            items = [...items].sort((a, b) => b.price - a.price);
        }

        return items;
    }, [selectedCategories, typeFilter, priceRange, sortBy]);

    const toggleCategory = (cat: string) => {
        setSelectedCategories(prev => 
            prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
        );
    };

    return (
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-40 pb-32">
            {/* Header */}
            <div className="py-16 border-b border-outline/10 mb-16">
                <h1 className="text-5xl md:text-6xl font-serif text-on-surface mb-6">Summer Collections</h1>
                <p className="text-xl text-on-surface-variant max-w-3xl leading-relaxed">
                    Refined silhouettes and breathable fabrics designed for the modern woman who values both elegance and modesty. Discover our latest range of Abayas, Kaftans, and Hijabs.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-gutter">
                {/* Sidebar Filters */}
                <aside className="w-full lg:w-72 flex-shrink-0 space-y-12">
                    {/* Sort */}
                    <div>
                        <h3 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Sort By</h3>
                        <select 
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="w-full bg-transparent border-0 border-b border-outline/20 focus:ring-0 focus:border-primary px-0 py-3 text-[14px] font-medium text-on-surface cursor-pointer"
                        >
                            <option>Newest First</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Most Popular</option>
                        </select>
                    </div>

                    {/* Category */}
                    <div>
                        <h3 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Category</h3>
                        <div className="space-y-4">
                            <label className="flex items-center group cursor-pointer">
                                <input 
                                    type="checkbox" 
                                    checked={selectedCategories.length === 0}
                                    onChange={() => setSelectedCategories([])}
                                    className="w-4 h-4 border-outline text-primary focus:ring-primary rounded-sm transition-all"
                                />
                                <span className="ml-4 text-body-md text-on-surface group-hover:text-primary transition-colors">All Pieces</span>
                            </label>
                            {categories.map(cat => (
                                <label key={cat} className="flex items-center group cursor-pointer">
                                    <input 
                                        type="checkbox" 
                                        checked={selectedCategories.includes(cat)}
                                        onChange={() => toggleCategory(cat)}
                                        className="w-4 h-4 border-outline text-primary focus:ring-primary rounded-sm transition-all"
                                    />
                                    <span className="ml-4 text-body-md text-on-surface group-hover:text-primary transition-colors">{cat}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Color Palette */}
                    <div>
                        <h3 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Color Palette</h3>
                        <div className="grid grid-cols-5 gap-4">
                            {colors.map(color => (
                                <button 
                                    key={color.name}
                                    className="w-9 h-9 rounded-full border border-outline/10 hover:scale-110 transition-transform" 
                                    style={{ backgroundColor: color.hash }}
                                    title={color.name}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Size */}
                    <div>
                        <h3 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Size</h3>
                        <div className="flex flex-wrap gap-2">
                            {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                                <button 
                                    key={size}
                                    className="px-5 py-3 border border-outline/20 text-[13px] font-medium hover:border-primary hover:text-primary transition-all min-w-[50px]"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Price Range */}
                    <div>
                        <h3 className="text-[11px] font-bold text-secondary uppercase tracking-[0.2em] mb-6">Price Range</h3>
                        <input 
                            type="range" 
                            min="0" 
                            max="1000" 
                            step="50"
                            value={priceRange}
                            onChange={(e) => setPriceRange(Number(e.target.value))}
                            className="w-full h-1 bg-surface-container-high rounded-full appearance-none cursor-pointer accent-primary" 
                        />
                        <div className="flex justify-between mt-4 text-[12px] font-medium text-secondary">
                            <span>$0</span>
                            <span>${priceRange.toLocaleString()}+</span>
                        </div>
                    </div>
                </aside>

                {/* Main Content: Product Grid */}
                <div className="flex-1">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-gutter gap-y-20">
                            {filteredProducts.map(product => (
                                <Link key={product.id} to={`/products/${product.id}`} className="group">
                                    <div className="relative aspect-[3/4] mb-8 overflow-hidden bg-surface-container">
                                        <img 
                                            src={product.image} 
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute bottom-0 left-0 right-0 p-5 bg-white/90 backdrop-blur-sm translate-y-full group-hover:translate-y-0 transition-all duration-500 text-center">
                                            <span className="text-[12px] font-bold text-primary uppercase tracking-widest">Quick View</span>
                                        </div>
                                        {product.isNew && (
                                            <div className="absolute top-5 left-5 bg-primary text-on-primary px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest shadow-lg">
                                                New In
                                            </div>
                                        )}
                                        {product.isLimited && (
                                            <div className="absolute top-5 left-5 bg-secondary text-white px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest">
                                                Limited Edition
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center">
                                        <h3 className="text-body-md text-on-surface mb-2 font-medium group-hover:text-primary transition-colors">{product.name}</h3>
                                        <p className="text-secondary tracking-widest text-[14px]">${product.price.toFixed(2)}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-32">
                            <p className="text-xl text-secondary">No products found matching your criteria.</p>
                            <button 
                                onClick={() => { setSelectedCategories([]); setPriceRange(1000); }}
                                className="mt-6 text-primary border-b border-primary/30 pb-0.5 hover:border-primary transition-all"
                            >
                                Clear all filters
                            </button>
                        </div>
                    )}

                    {/* Pagination */}
                    {filteredProducts.length > 0 && (
                        <div className="mt-32 flex justify-center items-center gap-6">
                            <button className="w-12 h-12 flex items-center justify-center border border-outline/10 hover:border-primary transition-all">
                                <ChevronLeft size={20} className="text-secondary hover:text-primary" />
                            </button>
                            <div className="flex items-center gap-2">
                                <span className="w-10 h-10 flex items-center justify-center border-b-2 border-primary text-[14px] font-bold text-primary">1</span>
                                <button className="w-10 h-10 flex items-center justify-center text-[14px] font-medium text-secondary hover:text-primary transition-colors">2</button>
                                <button className="w-10 h-10 flex items-center justify-center text-[14px] font-medium text-secondary hover:text-primary transition-colors">3</button>
                            </div>
                            <button className="w-12 h-12 flex items-center justify-center border border-outline/10 hover:border-primary transition-all">
                                <ChevronRight size={20} className="text-secondary hover:text-primary" />
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
