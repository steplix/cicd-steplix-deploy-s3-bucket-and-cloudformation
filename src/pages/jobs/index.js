import React from "react";
import { useTranslation } from "next-export-i18n";
import BecomeASteplixer from "@/modules/jobs/BecomeASteplixer";
import HeadTag from "@/common/components/HeadTag";

export default function Jobs() {
    const { t } = useTranslation();

    return (
        <>
            <HeadTag title={t("metaTags.jobs.title")} description={t("metaTags.jobs.description")} keywords={t("metaTags.jobs.keywords")} />
            <div className="relative">
                <section className="bg--jobs relative">
                    <BecomeASteplixer />
                </section>
            </div>
        </>
    );
}
