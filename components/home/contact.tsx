import React from "react";
import { SOCIAL_LINKS } from "../../constants";

const Contact = () => {
  return (
    <section id="contact" className="min-h-[80vh] flex flex-col justify-between py-24 md:py-32 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-flow/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container px-6 md:px-12 flex-1 flex flex-col justify-center items-center text-center z-10">
        <span className="text-sm font-mono text-gray-400 uppercase tracking-widest mb-8">What&apos;s Next?</span>

        <h2 className="text-[12vw] leading-none font-display font-medium text-white mb-12 mix-blend-difference hover:scale-105 transition-transform duration-700 ease-out cursor-none">
          <a href={`mailto:${SOCIAL_LINKS.email ? SOCIAL_LINKS.email.replace('mailto:', '') : 'harshitkudhial@gmail.com'}`} className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-white hover:to-gray-500 transition-all">
            Let&apos;s Talk
          </a>
        </h2>

        <div className="flex gap-8 md:gap-16 items-center">
          {Object.entries(SOCIAL_LINKS).slice(0, 4).map(([key, link]) => (
            <a
              key={key}
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white uppercase font-mono text-xs md:text-sm tracking-widest relative group"
            >
              {key}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-white group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
      </div>

      <div className="container px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono uppercase tracking-wider border-t border-white/10 pt-8">
          <p>© {new Date().getFullYear()} Harshit Kudhial</p>
          <p>Designed & Built with Love</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
