import React from "react";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";
import JobItemCard from "@/common/components/JobItemCard";
import Head from "next/head";

const Job = () => {
    const { t } = useTranslation();
    const router = useRouter();
    let nameJob = router.query.slug;
    return (
        <div>
            <Head>
                <title>Steplix</title>
                <meta name="description" content="Steplix Web Page" />
                <meta name="robots" content="noindex" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className="bg--job">
                <div className="container-steplix section-steplix ">
                    <JobItemCard item={t(`jobs.${nameJob}`)} />
                </div>
            </div>
        </div>
    );
};

export default Job;
