import React from "react";
import { useTranslation } from "@/common/lib/i18n";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import BecomeASteplixer from "@/modules/jobs/BecomeASteplixer";
import Flags from "@/common/components/Flags";
import HeadTag from "@/common/components/HeadTag";

const Jobs = ({ locale }) => {
    const { t } = useTranslation(locale);

    return (
        <>
            <HeadTag title={t("metaTags.jobs.title")} description={t("metaTags.jobs.description")} keywords={t("metaTags.jobs.keywords")} />
            <div className="relative">
                <section className="bg--jobs relative">
                    <BecomeASteplixer locale={locale} />
                </section>
                <Flags />
            </div>
        </>
    );
}

export async function getStaticPaths(...args) {
    const pathsWithLocale = getPathSlugs();
    return {
      paths: pathsWithLocale,
      fallback: false
    };
  }
  
  export async function getStaticProps({ params }) {
    return {
      props: {
        ...params
      }
    };
  }
  

export default Jobs