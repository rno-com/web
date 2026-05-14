import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Lookbook() {
    const images = [
        {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHRzSUxZGq7c62PzKZQXUkk5Afd-6fxdXsK1MRfNW90lg_4KQq6FXr6dX8POSAu0nrbHfynJYhWjjYY6Y4yTHVU_DGIjOIDMngm98c5s9am1GRO8U4KdXsTrHhW6lF9Dlt00CVu0gYpoG74E4Ll9DBIZu2SVNrkyUhXXmFiH5tAAra2aITSWyDCaS9zXSmQxCCQWVx9l3rC2HHL5DUyLMKDe4IgxKJtR_-CsIwT5buF-aY6jjci1rxibUlY1td9ilgRR5169df9PTr',
            caption: 'Ethereal Mornings',
            subtitle: 'The Summer Linen Series'
        },
        {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWw1pZy7Kc0VrRD8QNR8EfwGqBJ52imAoaZaMCW3snPWOVuFkdV5XIAQVKIiIJ2mFCkZMONh1SYg8JKwPCL7hJ77eidplwxCFkId5_Iy8GV8l58owZ-tpx2iK3VRjO7L5sTjz6y1OiUsnU-vnRIl6ST6T03puVkCFVUszdU-u0H0l_rZ9CKJZShxLJcRpBQVmJHVLEKTAgaWeWgfSe4V-0LAoTBVn_unpGkvQhGYrHH45xwRg8hcFJysdP8Xz02m3avULZSFmqtLb5',
            caption: 'Architectural Grace',
            subtitle: 'Structured Crepe Abayas'
        },
        {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDDUZk68AemwM23qYj3Iwc4e0_UlJ3rPXK4MB1TEj6VZYj3Bu-i_jNyYGEFYjhoIoEFqWAvbWk8zZhTElo2Nj3SK4dcYerOYixvZtoVS-gnb-CJVX1f_Ukge5cw2197Rfr_2SRrvkhGboPlpbDEzYU5itLgH-prZQAwbnXR_-mvY6Uw_kkgqTc5ONR-1VYnNbWiCbxx-y4oZcMMHzdolhvB7XFgsBHtxW2HEtjlPLtPxyDlyL9EiSALuApFJrSHxQjCet9vDltQ8VsY',
            caption: 'Tonal Harmony',
            subtitle: 'Luxury Silk Hijabs'
        },
        {
            url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-jcBypWO4GnAEheRAHdPNzBBJY6qbB9SOoZcdViIx0x-nhm4fze2FSFRxk_N22GZg1LEfCv3laPZ2A5bzcfhMWSiVXC47ZjyStLfv4bf0QR4urmicGstCySwwjo-jXg_pa7meqLw1r7vAETZh6TNF4cbloGRXpmL4FjvJxNZmf5oC112m6iHdT-6Qb6MI6ZYglJDCJKXmC9gDFpx0QceV4ORt30CtsLl9EAmGfMTCdLpP4nuPkvEra4-M65ztzCwKbXEhzDxkkpSn',
            caption: 'Quiet Evenings',
            subtitle: 'The Evening Collection'
        }
    ];

    return (
        <main className="pt-40 pb-32">
            <header className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-20 text-center">
                <span className="text-[12px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 block">Visual Stories</span>
                <h1 className="text-5xl md:text-7xl font-serif text-on-background">Lookbook</h1>
            </header>

            <div className="space-y-40">
                {images.map((item, index) => (
                    <section key={index} className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
                        <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16 md:gap-32`}>
                            <motion.div 
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="w-full md:w-3/5"
                            >
                                <div className="aspect-[4/5] overflow-hidden bg-surface-container shadow-sm">
                                    <img src={item.url} alt={item.caption} className="w-full h-full object-cover" />
                                </div>
                            </motion.div>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="w-full md:w-2/5 flex flex-col gap-6"
                            >
                                <span className="text-primary italic font-serif text-xl">{item.subtitle}</span>
                                <h2 className="text-4xl font-serif text-on-background">{item.caption}</h2>
                                <p className="text-on-surface-variant leading-relaxed text-lg">
                                    A celebration of texture and tone. This series explores the interplay between natural light and architectural draping, capturing the essence of effortless modesty.
                                </p>
                                <Link to="/collections" className="text-primary font-bold text-[13px] uppercase tracking-widest border-b border-primary/20 pb-1 mt-4 hover:border-primary transition-all self-start">
                                    Shop the Look
                                </Link>
                            </motion.div>
                        </div>
                    </section>
                ))}
            </div>

            <section className="mt-40 border-t border-outline/10 pt-20 px-margin-mobile text-center">
                <Link to="/collections" className="bg-primary text-on-primary px-16 py-6 text-[13px] font-bold uppercase tracking-widest hover:opacity-90 transition-opacity inline-block">
                    Explore Full Collection
                </Link>
            </section>
        </main>
    );
}
