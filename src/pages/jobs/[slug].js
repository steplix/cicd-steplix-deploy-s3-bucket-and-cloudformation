import React from "react";
import { useTranslation } from "@/common/lib/i18n";
import JobItemCard from "@/common/components/JobItemCard";
import HeadTag from "@/common/components/HeadTag";

const Job = ({ params }) => {
    const slug = params.slug;
    const { t } = useTranslation();

    return (
        <>
            <HeadTag title={t("metaTags.jobs.title")} description={t("metaTags.jobs.description")} keywords={t("metaTags.jobs.keywords")} />
            <div className="relative">
                <div className="bg--job flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28">
                    <JobItemCard item={t(`jobs.${slug}`)} />
                </div>
            </div>
        </>
    );
};

export default Job;

export const getStaticPaths = async () => {
    return {
        paths: [
            {
                params: {
                    slug: "UI_UXDesigner",
                },
            },
            {
                params: {
                    slug: "BACKENDSSR",
                },
            }
        ],
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
