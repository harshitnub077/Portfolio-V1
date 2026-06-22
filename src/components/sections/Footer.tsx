"use client";

export default function Footer() {
    return (
        <section className="relative w-full h-[80vh] flex flex-col justify-end px-8 md:px-24 pb-12">
            <div className="flex flex-col md:flex-row justify-between items-end border-b border-white/20 pb-12">
                <h2 className="text-7xl md:text-[12rem] font-bold tracking-tighter uppercase leading-none">
                    Let's Talk
                </h2>
                <div className="flex gap-8 mt-8 md:mt-0 font-space-mono text-xl">
                    <a href="#" className="hover:text-white/50 transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white/50 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-white/50 transition-colors">GitHub</a>
                </div>
            </div>
            <div className="flex justify-between font-space-mono text-sm text-white/50 pt-8">
                <p>&copy; {new Date().getFullYear()} Harshit Kudhial</p>
                <p>Designed with Intent.</p>
            </div>
        </section>
    );
}
