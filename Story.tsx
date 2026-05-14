import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Story() {
    return (
        <main className="pt-40">
            {/* Hero Section */}
            <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-32">
                <div className="relative h-[60vh] md:h-[700px] overflow-hidden mb-16">
                    <img 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCY2zK-0_Y7s4F8u1R3Z6_64z_6-2_Z-6_9-2_Z-6_9-2_Z-6_9-2_Z-6_9" 
                        alt="The Serene Grace Ethos"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                        <h1 className="text-white text-6xl md:text-8xl font-serif text-center">Our Story</h1>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto text-center">
                    <span className="text-[12px] font-bold text-primary uppercase tracking-[0.2em] mb-6 block">Est. 2024</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-on-background mb-8 leading-tight">Elevating Modesty with Intentional Design</h2>
                    <p className="text-on-surface-variant text-xl leading-relaxed">
                        Serene Grace was founded on a simple yet profound belief: that modesty and modern luxury are not mutually exclusive. Our journey began with a vision to create a sanctuary of style for the woman who seeks grace in every detail.
                    </p>
                </div>
            </section>

            {/* Philosophy Grid */}
            <section className="bg-surface-container-low py-32 px-margin-mobile md:px-margin-desktop overflow-hidden">
                <div className="max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
                    <div>
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <img 
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqAKx27vjpu7EMr9ObTnRc8oWjDu6HRbbaY2PJcdDm2WErXq11yVx34mzV7exdnSnOOKELSAkN9lDD-n8jr5vVUlsfiyjUGejG3VUU6IBFqWLW5r4_mRqTjdWrGFuoFDDMZvi5NedzuJzi6UVK0xaQ40kCcIIGo7WozuE4odAOpcmSeLzPfcDVeCCHdlTA2rFG6krc2EIWZ3CvFIjwlrHikp167rgC2oxto8LRrOPDx97UH3MD1aeTS2jizYINUsWm4EXRahXiO2KY" 
                                alt="Craftsmanship"
                                className="w-full aspect-[4/5] object-cover editorial-shadow"
                            />
                        </motion.div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <h3 className="text-3xl md:text-4xl font-serif text-on-background">Crafting with Conscience</h3>
                        <p className="text-on-surface-variant text-lg">
                            We select our fabrics with the utmost care, prioritizing natural fibers like European linen, mulberry silk, and premium Egyptian cotton. These materials don't just drape beautifully; they breathe with you, ensuring comfort is never sacrificed for silhouette.
                        </p>
                        <p className="text-on-surface-variant text-lg">
                            Our production process is slow and deliberate. We partner with ethical ateliers who share our commitment to artisans' rights and sustainable practices. Each Serene Grace piece is built to last, transcending seasons and trends.
                        </p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-32 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    <div className="text-center">
                        <h4 className="text-xl font-serif text-primary mb-4 italic">Timelessness</h4>
                        <p className="text-secondary">We design pieces that remain relevant years from now, focusing on clean lines and architectural silhouettes.</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-xl font-serif text-primary mb-4 italic">Integrity</h4>
                        <p className="text-secondary">Transparency in our sourcing and fairness in our partnerships are the foundation of our brand.</p>
                    </div>
                    <div className="text-center">
                        <h4 className="text-xl font-serif text-primary mb-4 italic">Grace</h4>
                        <p className="text-secondary">Everything we do is infused with a sense of calm and respect for the tradition of modesty.</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center bg-primary text-on-primary">
                <h2 className="text-4xl md:text-5xl font-serif mb-12">Experience the Serene Way</h2>
                <Link to="/collections" className="inline-flex items-center gap-4 bg-white text-primary px-12 py-5 text-[13px] font-bold uppercase tracking-widest hover:bg-surface-container-low transition-all">
                    Shop The Collection <ArrowRight size={20} />
                </Link>
            </section>
        </main>
    );
}
