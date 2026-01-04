// Copyright Harshit Kudhial 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaharshit/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import Image from "next/image";
import { useState } from "react";
import Menu from "@/components/common/menu";

const Header = () => {
  const [menuVisible, setmenuVisible] = useState(false);

  return (
    <header className="w-full relative z-50">
      {/* Logo Component - Top Left */}
      <div className="fixed top-8 left-6 md:left-12 z-50">
        <a href="#home" className="link">
          <Image
            src="/logo.svg"
            alt="Logo - Harshit Kudhial"
            width={30}
            height={30}
          />
        </a>
      </div>

      {/* HUD Navigation Dock - Bottom Center */}
      <nav
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${menuVisible ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      >
        <div className="glass px-6 py-3 rounded-full flex items-center justify-between gap-6 shadow-2xl border border-white/10 backdrop-blur-xl bg-black/40">
          <span className="text-xs font-mono text-gray-400 hidden md:block">MENU_SYSTEM_V3</span>
          <button
            className="hamburger w-8 h-8 flex items-center justify-center link relative group"
            onClick={setmenuVisible.bind(null, !menuVisible)}
          >
            <div className="relative flex-col gap-1.5 w-full flex items-center justify-center">
              <span className="w-6 h-[2px] bg-white group-hover:w-8 transition-all duration-300"></span>
              <span className="w-6 h-[2px] bg-white group-hover:w-4 transition-all duration-300"></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Full Screen Menu Overlay */}
      <nav className={`outer-menu ${menuVisible ? "menu-visible" : ""}`}>
        {/* Close Button for Menu */}
        <button
          className="fixed top-8 right-6 md:right-12 z-[60] text-white opacity-0 pointer-events-none transition-all duration-300 menu-close-btn"
          onClick={setmenuVisible.bind(null, !menuVisible)}
          style={{ opacity: menuVisible ? 1 : 0, pointerEvents: menuVisible ? 'auto' : 'none' }}
        >
          <span className="text-xl font-bold">CLOSE</span>
        </button>
        <Menu setmenuVisible={setmenuVisible} />
      </nav>
    </header>
  );
};

export default Header;
