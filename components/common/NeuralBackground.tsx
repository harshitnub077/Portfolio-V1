import React from "react";

const NeuralBackground: React.FC = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden bg-dark-100 selection:bg-accent-flow selection:text-black">
            {/* Fluid Blobs */}
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent-purple/10 rounded-full blur-[120px] animate-blob" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent-flow/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
            <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-accent-cyan/10 rounded-full blur-[100px] animate-blob animation-delay-4000" />

            {/* Neural Grid hint */}
            <div className="absolute inset-0 opacity-[0.03] bg-grid-pattern bg-[size:40px_40px]" />

            {/* Noise Overlay */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
};

export default NeuralBackground;
