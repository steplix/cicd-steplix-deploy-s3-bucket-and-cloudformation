import MainHeader from "@/modules/MainHeader";
import OurPosts from "@/modules/OurPosts";
import HeadTag from "@/common/components/HeadTag";
import Portfolio from "@/modules/Portfolio";
import { useTranslation } from "@/common/lib/i18n";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function Home({ locale }) {
    const { t } = useTranslation(locale);
    const router = useRouter();

    useEffect(() => {
        router.replace({ pathname: '/', query: { lang: locale }}, '/', { shallow: true })
    }, [router, locale]);

    return (
        <>
            <HeadTag metaContent={{title: t("metaTags.home.title"), description: t("metaTags.home.description"), keywords: t("metaTags.home.keywords")}} />
            <main className="flex flex-col">
                {/* MainHeader Section */}
                <MainHeader locale={locale} />

                {/* Portfolio Section */}
                <Portfolio />

                {/* Posts Section */}
                <OurPosts />
            </main>
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
