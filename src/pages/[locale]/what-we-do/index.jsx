import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import HeadTag from '@/common/components/HeadTag';
import { useTranslation } from '@/common/lib/i18n';
import { getPathSlugs } from '@/common/utils/getPathSlugs';
import Intro from '@/modules/what-we-do/Intro';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import { WhatWeDoCard } from '@/modules/what-we-do/WhatWeDoCard/indext';
import { PRODUCTS_CARDS } from '@/common/utils/constants';
import { Modal } from '@/common/components/Modal';
import { WhatWeDoModal } from '@/modules/what-we-do/WhatWeDoModal';

export default function WhatWeDo({ locale }) {
  const { t } = useTranslation(locale);
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardSelected, setCardSelected] = useState(undefined);

  useEffect(() => {
    const { product } = router.query;

    if (product) {
      const card = PRODUCTS_CARDS.find((card) => card.shortName === product);

      if (card) {
        setCardSelected(card);
        setIsModalOpen(true);
      }
    }
  }, [router.query]);

  const openModal = (card) => {
    setCardSelected(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    router.push(`/${locale}/what-we-do`, undefined, { shallow: true });
  };

  return (
    <>
      <HeadTag
        metaContent={{
          title: t('metaTags.whatWeDo.title'),
          description: t('metaTags.whatWeDo.description'),
          keywords: t('metaTags.whatWeDo.keywords'),
        }}
      />
      <TransitionWrapper className="w-full h-full flex flex-col relative overflow-y-auto">
        <div className="container section-container w-full mx-auto flex-col min-h-[1276px] sm:min-h-[1144px] lg:min-h-[1250px]">
          <Intro locale={locale} />
          <div className="mt-10 flex flex-col lg:flex-row lg:flex-wrap gap-6">
            {PRODUCTS_CARDS.map((card, index) => {
              return <WhatWeDoCard key={index} card={card} locale={locale} openModal={openModal} />;
            })}
          </div>
        </div>
        <Modal isModalOpen={isModalOpen} setisModalOpen={setIsModalOpen}>
          <WhatWeDoModal card={cardSelected} locale={locale} onClose={closeModal} />
        </Modal>
      </TransitionWrapper>
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
