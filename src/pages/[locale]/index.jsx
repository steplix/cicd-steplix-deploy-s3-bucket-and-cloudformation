import { useEffect } from 'react';
import { useRouter } from 'next/router';

import MainHeader from '@/modules/Home/MainHeader';
import Banner from '@/modules/Home/Banner';
import HowDoWeDoIt from '@/modules/Home/HowWeDoIt';
import Clients from '@/modules/Home/Clients';
import HeadTag from '@/common/components/HeadTag';
import { useTranslation } from '@/common/lib/i18n';
import { getPathSlugs } from '@/common/utils/getPathSlugs';

export default function Home({ locale }) {
  const { t } = useTranslation(locale);
  const router = useRouter();

  useEffect(() => {
    router.replace({ pathname: '/', query: { lang: locale } }, '/', {
      shallow: true,
    });
  }, [router, locale]);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t('metaTags.home.title'),
          description: t('metaTags.home.description'),
          keywords: t('metaTags.home.keywords'),
        }}
      />
      <main className="flex flex-col">
        {/* MainHeader Section */}
        <MainHeader />

        {/* Banner Section */}
        <Banner />

        {/* Technology Section */}
        <HowDoWeDoIt />

        {/* Clients Section */}
        <Clients />
      </main>
    </>
  );
}

// eslint-disable-next-line no-unused-vars
export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();

  return {
    paths: pathsWithLocale,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
