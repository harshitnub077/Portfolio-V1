"use client";

export default function Footer() {
    return (
        <section className="relative w-full py-24 px-4 md:px-8 max-w-7xl mx-auto flex flex-col justify-end">
            <div className="bento-card p-12 md:p-20 flex flex-col items-center text-center">
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 text-gradient">
                    Let's Build Together
                </h2>
                <div className="flex gap-6 md:gap-8 font-space-mono text-lg mb-12">
                    <a href="#" className="hover:text-violet-400 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-rose-400 transition-colors">GitHub</a>
                </div>
                
                <div className="flex flex-col md:flex-row justify-between w-full border-t border-white/10 pt-8 mt-12 font-space-mono text-sm text-white/40">
                    <p>&copy; {new Date().getFullYear()} Harshit Kudhial</p>
                    <p className="mt-4 md:mt-0">Premium Bento Edition</p>
                </div>
            </div>
        </section>
    );
}
