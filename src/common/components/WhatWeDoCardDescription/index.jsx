import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import { ButtonText } from '../ButtonText';
import ChipColorFilled from '../Chip/ChipColorFilled';
import Icon from '../Icon';
import { ProductItemDescription } from '../ProductItemDescription';

import { useTranslation } from '@/common/lib/i18n';
import { LOCALE_SLUGS } from '@/common/utils/constants';
import Title from '@/common/components/Title/GradientInvert';

export const WhatWeDoCardDescription = ({ card, locale, onClose }) => {
  const { t } = useTranslation(locale);

  return (
    <div className="w-full bg-white rounded-lg shadow-tech-card py-8 px-6">
      <div className="w-full flex items-center justify-between mb-8">
        <ChipColorFilled
          background="bg-transparent"
          borderWidth={1.5}
          label={card.shortName}
          outlineColor="border-purple"
          type="slim"
        />
        <button className="w-6 h-6" onClick={onClose}>
          <Icon className="" name="newClose" />
        </button>
      </div>
      <Title content={t(card.title)} secondContent={t(card.title2)} size="text-2xl" />
      <div className="mt-8 mb-12 text-zinc-900 text-base font-normal font-poppins leading-tight tracking-tight">
        {parse(t(card.description))}
      </div>
      <div className="flex flex-wrap w-full">
        {card.items.map((item, index) => {
          return (
            <ProductItemDescription
              key={index}
              description={t(item.description)}
              iconName={t(item.iconName)}
              label={t(item.title)}
            />
          );
        })}
      </div>
      <div>
        <div>
            
        </div>
      </div>
      <ButtonText clickEvent={() => console.log('ir a...')} label={t('what_we_do.buttonCard')} />
    </div>
  );
};

WhatWeDoCardDescription.prototype = {
  card: PropTypes.object.isRequired,
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};
