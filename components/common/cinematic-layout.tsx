import React, { ReactNode } from "react";
import Head from "next/head";
import { METADATA } from "../../constants";

type Props = {
    children: ReactNode;
};

const CinematicLayout = ({ children }: Props) => {
    return (
        <>
            <Head>
                <title>{METADATA.title}</title>
                <meta name="description" content={METADATA.description} />
            </Head>

            <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black overflow-x-hidden">
                <main className="relative w-full z-10 flex flex-col">{children}</main>

                <div className="fixed inset-0 pointer-events-none z-50 mix-blend-overlay opacity-20 bg-[url('/noise.svg')]"></div>
            </div>
        </>
    );
};

export default CinematicLayout;
