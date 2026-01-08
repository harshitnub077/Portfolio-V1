import React from "react";
import MagneticButton from "../common/magnetic-button";
import { ButtonTypes } from "../common/button";
import { SOCIAL_LINKS } from "../../constants";

const Contact = () => {
    return (
        <footer id="contact" className="w-full min-h-[50vh] flex flex-col justify-between py-24 px-6 md:px-12 bg-black border-t border-white/10 relative overflow-hidden">
            <div className="flex flex-col gap-8 z-10">
                <h2 className="text-[12vw] leading-[0.8] font-black tracking-tighter text-white mix-blend-difference">
                    LET'S TALK
                </h2>

                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <MagneticButton
                        classes="px-10 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all uppercase tracking-widest text-sm"
                        type={ButtonTypes.OUTLINE}
                        name="Email Me"
                        href="mailto:harshitkudhial@gmail.com" // Assuming email based on user context or generic
                    >
                        Initiate_Protocol (Email)
                    </MagneticButton>

                    <MagneticButton
                        classes="px-10 py-4 border border-white/20 rounded-full text-gray-400 hover:bg-white/10 hover:text-white transition-all uppercase tracking-widest text-sm"
                        type={ButtonTypes.OUTLINE}
                        name="LinkedIn"
                        href={SOCIAL_LINKS.linkedin}
                        otherProps={{ target: "_blank", rel: "noreferrer" }}
                    >
                        Connection_Link (LinkedIn)
                    </MagneticButton>
                </div>
            </div>

            <div className="flex justify-between items-end mt-24 z-10 border-t border-white/20 pt-8">
                <div className="flex flex-col">
                    <span className="text-xs font-mono text-gray-500">ENGINEERED BY HARSHIT</span>
                    <span className="text-xs font-mono text-gray-700">© 2026 ORIGIN SYSTEM</span>
                </div>
                <div className="flex gap-4">
                    {/* Social Mini Links */}
                    <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="text-white hover:text-white transition-colors text-xs font-mono">[GH]</a>
                    <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noreferrer" className="text-white hover:text-white transition-colors text-xs font-mono">[TW]</a>
                    <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="text-white hover:text-white transition-colors text-xs font-mono">[IG]</a>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none"></div>
        </footer>
    );
};

export default Contact;
