import React, { ReactNode, useEffect, useState, useCallback } from "react";
import Head from "next/head";
import { METADATA } from "../../constants";
import Header from "./header";
import Cursor from "./cursor";
import NeuralBackground from "./NeuralBackground";

type Props = {
    children: ReactNode;
};

const CinematicLayout = ({ children }: Props) => {
    const [isDesktop, setIsDesktop] = useState(true);

    const checkIsDesktop = useCallback(() => {
        const isDesktopResult =
            typeof window.orientation === "undefined" &&
            navigator.userAgent.indexOf("IEMobile") === -1;
        setIsDesktop(isDesktopResult);
    }, []);

    useEffect(() => {
        checkIsDesktop();
        window.addEventListener("resize", checkIsDesktop);
        return () => window.removeEventListener("resize", checkIsDesktop);
    }, [checkIsDesktop]);

    return (
        <>
            <Head>
                <title>{METADATA.title}</title>
                <meta name="description" content={METADATA.description} />
            </Head>

            <div className="bg-dark-100 min-h-screen text-white selection:bg-accent-flow selection:text-black overflow-x-hidden">
                <NeuralBackground />
                <Header />
                <Cursor isDesktop={isDesktop} />
                <main className="relative w-full z-10 flex flex-col">{children}</main>

                <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20 bg-[url('/noise.svg')]"></div>
            </div>
        </>
    );
};

export default CinematicLayout;
