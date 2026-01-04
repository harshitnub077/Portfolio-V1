// Copyright Harshit Kudhial 2021,2022. All Rights Reserved.
// Project: folio
// Author contact: https://www.linkedin.com/in/alphaharshit/
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import { EMAIL, MENULINKS, SOCIAL_LINKS } from "../../constants";
import Image from "next/image";
import Button, { ButtonTypes } from "./button";

const Footer = () => {
  const renderSocialIcons = (): React.ReactNode => {
    return Object.keys(SOCIAL_LINKS).map((el: keyof typeof SOCIAL_LINKS) => (
      <a
        href={SOCIAL_LINKS[el]}
        key={el}
        className="link hover:opacity-80 duration-300 md:px-2 px-1"
        rel="noreferrer"
        target="_blank"
      >
        <Image src={`/social/${el}.svg`} alt={el} width={40} height={40} />
      </a>
    ));
  };

  const renderFooterContent = (): React.ReactNode => (
    <>
      <h1 className="font-bold text-4xl md:text-5xl text-center tracking-tight">
        Let&apos;s build something <span className="text-gradient">extraordinary</span>.
      </h1>
      <div className="flex mt-12 gap-2">{renderSocialIcons()}</div>
      <div className="flex mt-12 gap-6">
        <Button
          classes="px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 border-2 border-white hover:bg-white hover:text-dark-100"
          type={ButtonTypes.OUTLINE}
          name="Resume"
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
          href="/Harshit_Resume.pdf"
        ></Button>
        <Button
          classes="px-8 py-3 rounded-full font-medium transition-all hover:scale-105 active:scale-95 bg-white text-dark-100 hover:opacity-90"
          type={ButtonTypes.WHITE}
          name="Let's Talk"
          href={SOCIAL_LINKS.linkedin}
          otherProps={{
            target: "_blank",
            rel: "noreferrer",
          }}
        ></Button>
      </div>
      <h2 className="text-center text-sm sm:text-base mt-16 opacity-60">
        Designed and Developed with ❤️ by Harshit
      </h2>
    </>
  );

  const { ref: footerRef } = MENULINKS[4];

  return (
    <footer
      className="w-full relative select-none bg-cover flex flex-col items-stretch"
      id={footerRef}
    >
      <img
        src="/footer-curve.svg"
        alt="Footer"
        className="w-full"
        loading="lazy"
        height={290}
        role="presentation"
        width={1440}
      />
      <div className="h-full w-full">
        <div className="section-container flex-col flex h-full justify-end z-10 items-center py-12">
          {renderFooterContent()}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
