import React from "react";
import { useTranslation } from "@/common/lib/i18n";
import JobItemCard from "@/common/components/JobItemCard";
import Flags from "@/common/components/Flags";
import { ActiveSearches } from "@/common/utils/ActiveSearches";
import HeadTag from "@/common/components/HeadTag";

const Job = ({ params }) => {
    const [slug, lang] = params.slug;
    const { t } = useTranslation(lang);

    return (
        <>
            <HeadTag title={t("metaTags.jobs.title")} description={t("metaTags.jobs.description")} keywords={t("metaTags.jobs.keywords")} />
            <div className="relative">
                <div className="bg--job flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28">
                    <JobItemCard item={t(`jobs.${slug}`)} />
                </div>
                <Flags />
            </div>
        </>
    );
};

export default Job;

export const getStaticPaths = async () => {
    return {
        paths: ActiveSearches(),
        fallback: false,
    };
};

export async function getStaticProps(context) {
    return {
        props: {
            params: context.params,
        },
    };
}
