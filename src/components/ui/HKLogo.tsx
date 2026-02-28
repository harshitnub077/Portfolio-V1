export default function HKLogo({ size = 36, inverted = false }: { size?: number; inverted?: boolean }) {
    const fg = inverted ? "#ffffff" : "#000000";
    const bg = inverted ? "#000000" : "#ffffff";
    const accent = "#c8f000"; // primary color

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer border square */}
            <rect x="1" y="1" width="98" height="98" fill={bg} stroke={fg} strokeWidth="4" />

            {/* Top-left accent corner triangle */}
            <polygon points="1,1 26,1 1,26" fill={accent} />

            {/* Bottom-right accent corner triangle */}
            <polygon points="99,99 74,99 99,74" fill={accent} />

            {/* H letter - Left vertical bar */}
            <rect x="18" y="28" width="10" height="44" fill={fg} />
            {/* H letter - Right vertical bar */}
            <rect x="40" y="28" width="10" height="44" fill={fg} />
            {/* H letter - Crossbar */}
            <rect x="18" y="47" width="32" height="8" fill={fg} />

            {/* K letter - Vertical bar */}
            <rect x="56" y="28" width="10" height="44" fill={fg} />
            {/* K letter - Upper diagonal */}
            <polygon points="66,28 82,28 66,50" fill={fg} />
            {/* K letter - Lower diagonal */}
            <polygon points="66,52 82,72 66,72" fill={fg} />
        </svg>
    );
}
