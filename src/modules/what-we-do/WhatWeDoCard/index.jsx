import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { ButtonText } from '../../../common/components/ButtonText';
import ChipColorFilled from '../../../common/components/Chip/ChipColorFilled';
import { ProductItem } from '../../../common/components/ProductItem';

import { useTranslation } from '@/common/lib/i18n';
import { LOCALE_SLUGS } from '@/common/utils/constants';
import Title from '@/common/components/Title/Gradient';

export const WhatWeDoCard = ({ card, locale }) => {
  const { t } = useTranslation(locale);
  const router = useRouter();

  const handleOpenModal = () => {
    router.replace(
      {
        pathname: `/${locale}/what-we-do`,
        query: {
          product: card.shortName,
        },
      },
      undefined,
      { shallow: true },
    );
  };

  return (
    <div className="w-full lg:w-[436px] pl-8 pr-4 pt-6 pb-4 bg-white rounded-[20px] shadow-tech-card flex-col justify-start items-end gap-6 inline-flex">
      <div className="w-full flex flex-col items-start gap-8">
        <ChipColorFilled
          background="bg-transparent"
          borderWidth={1.5}
          label={card.shortName}
          labelColor="text-purple-dark"
          outlineColor="border-purple-dark"
          type="slim"
        />
        <Title
          color="title-gradientInverted"
          content={t(card.title)}
          leading="leading-7"
          secondContent={t(card.title2)}
          size="text-[24px]"
        />
        <div className="flex flex-wrap w-full">
          {card.items.map((item, index) => {
            return <ProductItem key={index} iconName={t(item.iconName)} label={t(item.title)} />;
          })}
        </div>
      </div>
      <ButtonText clickEvent={handleOpenModal} label={t('what_we_do.buttonCard')} />
    </div>
  );
};

WhatWeDoCard.prototype = {
  openModal: PropTypes.func.isRequired,
  card: PropTypes.object.isRequired,
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};