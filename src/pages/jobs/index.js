import React, { useContext } from "react";
import BecomeASteplixer from "@/modules/jobs/BecomeASteplixer";
import Head from "next/head";
import { useTranslation } from "next-export-i18n";
import Flags from "@/common/components/Flags";

export default function Jobs() {
    const { t } = useTranslation();

    return (
        <div className="relative">
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <section className="bg--jobs">
                <div className="container-steplix section-steplix flex justify-center">
                    <BecomeASteplixer />
                </div>
            </section>
            <Flags />
        </div>
    );
}
