export default function Vignette() {
    return (
        <div className="pointer-events-none fixed inset-0 z-[9998] mix-blend-multiply transition-opacity duration-1000">
            <div
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"
                style={{ opacity: 0.8 }}
            />
        </div>
    );
}
