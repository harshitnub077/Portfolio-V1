
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    id: "01",
    name: "COGNIFY",
    category: "Neural Interface",
    description: "Pushing the boundaries of cognitive enhancement through AI.",
    stack: "Next.js • Python • TensorFlow"
  },
  {
    id: "02",
    name: "PROJECT 2",
    category: "System Architecture",
    description: "High-performance scalable architecture for distributed systems.",
    stack: "Go • Docker • Kubernetes"
  },
  {
    id: "03",
    name: "PROJECT 3",
    category: "Creative Dev",
    description: "Experimental WebGL fluid simulations and interactive audio.",
    stack: "Three.js • GSAP • WebGL"
  }
];

const Work = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  useGSAP(() => {
    // Entrance animation for the title
    gsap.from(".work-header h2", {
      scrollTrigger: {
        trigger: ".work-section",
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    });

    // List item animations
    const items = document.querySelectorAll(".project-item");
    items.forEach((item, index) => {
      gsap.from(item, {
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
        },
        y: 50,
        opacity: 0,
        delay: index * 0.1,
        duration: 0.8,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <div className="work-section bg-black min-h-screen py-32" id="work">
      <div className="section-container">

        <div className="work-header mb-24">
          <h2 className="text-[10vw] font-bold leading-[0.8] tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-neutral-800">
            SELECTED <br />
            <span className="text-white">WORKS</span>
          </h2>
        </div>

        <div className="project-list flex flex-col">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-item group relative border-t border-neutral-800 py-16 cursor-pointer overflow-hidden transition-colors duration-500 hover:bg-neutral-900/30"
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-8 relative z-10">
                <div className="w-full md:w-1/3">
                  <span className="font-mono text-sm text-neutral-500 tracking-widest block mb-4">
                    {project.id} /// {project.category.toUpperCase()}
                  </span>
                  <h3 className="text-6xl md:text-8xl font-bold tracking-tighter text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accentColor transition-all duration-300">
                    {project.name}
                  </h3>
                </div>

                <div className="w-full md:w-1/3 text-xl text-neutral-400 font-light group-hover:text-white transition-colors duration-300">
                  <p>{project.description}</p>
                </div>

                <div className="w-full md:w-1/4 text-right">
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-600 group-hover:text-accentColor transition-colors duration-300">
                    {project.stack}
                  </span>
                </div>
              </div>

              {/* Hover Reveal Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-neutral-900/50 to-transparent transform translate-x-[-100%] transition-transform duration-700 ease-out z-0 ${hovered === project.id ? 'translate-x-[100%]' : ''}`} />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Work;
