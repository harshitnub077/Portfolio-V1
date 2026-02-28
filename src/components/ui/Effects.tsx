export default function Effects() {
    return (
        <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden mix-blend-overlay">
            <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.03] animate-[noise_0.2s_infinite]" />
            <div className="absolute left-0 top-0 h-full w-[4px] bg-gradient-to-b from-transparent via-primary/50 to-transparent blur-[2px] animate-pulse-slow mix-blend-screen" />
            <div className="absolute right-0 top-0 h-full w-[4px] bg-gradient-to-b from-transparent via-primary/50 to-transparent blur-[2px] animate-pulse-slow mix-blend-screen" />
        </div>
    );
}
