// Copyright Harshit Kudhial 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaharshit/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import styles from "./ProjectTile.module.scss";
import Image from "next/image";
import React, { MutableRefObject, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { IProject } from "../../constants";

const ProjectTile = ({
  project,
}: {
  project: IProject;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 10,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
        scale: 1.02,
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative group w-full h-full rounded-[2rem] overflow-hidden border border-white/5 bg-white/[0.02] backdrop-blur-2xl transition-all duration-700 hover:border-accent-flow/30 shadow-2xl"
    >
      {/* Background Image with Parallax hint */}
      <div className="absolute inset-0 z-0 grayscale-[0.8] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out">
        <Image
          src={project.image}
          alt={project.name}
          layout="fill"
          objectFit="cover"
          className="opacity-40 group-hover:opacity-60 transition-opacity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-100 via-dark-100/40 to-transparent" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full h-full p-8 md:p-12 flex flex-col justify-end items-start pointer-events-none">
        <div className="flex items-center gap-4 mb-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono text-accent-flow uppercase tracking-widest px-3 py-1 border border-accent-flow/20 rounded-full bg-accent-flow/5">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-4xl md:text-6xl font-heading text-white uppercase tracking-tighter mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {project.name}
        </h3>

        <p className="max-w-md text-gray-400 text-sm md:text-base font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-8 group-hover:translate-y-0 transition-all duration-700 delay-100">
          {project.description}
        </p>

        <div className="mt-8 flex items-center justify-center w-12 h-12 rounded-full border border-white/10 text-white group-hover:bg-accent-flow group-hover:text-black group-hover:border-accent-flow transition-all duration-500 group-hover:rotate-45">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 15L15 1M15 1V14M15 1H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      {/* Enhanced Glow Effects */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-accent-flow/30 blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      <div className="absolute inset-0 border border-transparent group-hover:border-accent-flow/20 transition-all duration-700 rounded-[2rem] glow-flow opacity-0 group-hover:opacity-100" />
    </div>
  );
};

export default ProjectTile;
