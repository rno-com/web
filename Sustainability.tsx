import { motion } from 'motion/react';
import { Leaf, Droplets, Wind, ShieldCheck } from 'lucide-react';

export default function Sustainability() {
    return (
        <main className="pt-40 pb-32">
            <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32 text-center">
                <span className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Our Commitment</span>
                <h1 className="text-5xl md:text-[80px] font-serif text-on-background leading-none">Sustainability <br/> & Ethics</h1>
            </header>

            {/* Core Pillars */}
            <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-40">
                <div className="p-12 bg-surface-container-low flex flex-col items-center text-center gap-6">
                    <Leaf size={48} className="text-primary opacity-60" strokeWidth={1} />
                    <h3 className="text-xl font-serif text-on-background">Pure Materials</h3>
                    <p className="text-secondary text-sm">We use 100% organic linen and mulberry silk, reducing our chemical footprint significantly.</p>
                </div>
                <div className="p-12 bg-surface-container-low flex flex-col items-center text-center gap-6">
                    <Droplets size={48} className="text-primary opacity-60" strokeWidth={1} />
                    <h3 className="text-xl font-serif text-on-background">Water Conservation</h3>
                    <p className="text-secondary text-sm">Our dyeing processes use closed-loop systems that recycle up to 95% of water consumed.</p>
                </div>
                <div className="p-12 bg-surface-container-low flex flex-col items-center text-center gap-6">
                    <Wind size={48} className="text-primary opacity-60" strokeWidth={1} />
                    <h3 className="text-xl font-serif text-on-background">Low Impact</h3>
                    <p className="text-secondary text-sm">We prioritize local production to minimize carbon emissions from international shipping.</p>
                </div>
                <div className="p-12 bg-surface-container-low flex flex-col items-center text-center gap-6">
                    <ShieldCheck size={48} className="text-primary opacity-60" strokeWidth={1} />
                    <h3 className="text-xl font-serif text-on-background">Ethical Labor</h3>
                    <p className="text-secondary text-sm">Every artisan receives a living wage and works in a safe, respectful environment.</p>
                </div>
            </section>

            <section className="bg-surface-container py-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
                <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center gap-24">
                    <div className="w-full md:w-1/2">
                        <img 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUe4Ojjze6Rp6r-LGMcBGj28gUKTfXDaLBdMSSmVcIXMFBRu7hnQ8EdXz4tR8wVZHqX9nbYM0hk_LmYKAaCks7yQjDn7-tCr5G3jxf8mq4GNLIFDjiaLK3b5KxuO-wUvpGoGXFVGlx78771ioC1M8D_2onhEw9TUIDJ42o11ltr1EEOkniX6VKorsn3S5B3kc1_B76vQgKX8yI4aHZUqnp3f3ASd4Q3M9i89v7NK6aT7zDKROHO_114rK8zHRLmD0TWAIjdF4cYTV-" 
                            alt="Sustainable Fabrics"
                            className="w-full aspect-video object-cover shadow-2xl"
                        />
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col gap-8">
                        <h2 className="text-4xl font-serif text-on-background">The Future is Circular</h2>
                        <p className="text-secondary text-lg leading-relaxed">
                            Sustainability isn't a destination for us; it's a constant practice of refinement. We are currently working toward a 100% circular model, where every Serene Grace garment can be repaired, resold, or recycled at the end of its life.
                        </p>
                        <p className="text-secondary text-lg leading-relaxed">
                            By choosing quality over quantity, you are participating in a movement toward a more mindful and respectful fashion industry.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
