import PropTypes from 'prop-types';
import parse from 'html-react-parser';

import ChipColorFilled from '../../../common/components/Chip/ChipColorFilled';
import Icon from '../../../common/components/Icon';
import { ProductItemDescription } from '../../../common/components/ProductItemDescription';

import { useTranslation } from '@/pages/lib/i18n';
import { LOCALE_SLUGS } from '@/common/utils/constants';
import Title from '@/common/components/Title/GradientInvert';
import ButtonCard from '@/common/components/ButtonCard';
import { openLink } from '@/common/utils/methods';

export const WhatWeDoModal = ({ card, locale, onClose }) => {
  const { t } = useTranslation(locale);

  return (
    <div className="w-full lg:w-[753px] bg-white rounded-lg shadow-tech-card py-8 px-6">
      <div className="w-full flex items-center justify-between mb-8">
        <ChipColorFilled
          background="bg-transparent"
          borderWidth={1.5}
          label={card?.shortName}
          outlineColor="border-purple"
          type="slim"
        />
        <button className="w-6 h-6" onClick={onClose}>
          <Icon className="" name="newClose" />
        </button>
      </div>
      <Title content={t(card?.title)} secondContent={t(card?.title2)} size="text-2xl" />
      <div className="mt-8 mb-12 text-zinc-900 text-base font-normal font-poppins leading-tight tracking-tight">
        {parse(t(card?.description))}
      </div>
      <div className="flex flex-wrap w-full mb-2 sm:mb-8">
        {card?.items?.map((item, index) => {
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
      <div className="sm:flex sm:gap-6 mb-8">
        <div className="flex gap-2 items-end sm:flex-col-reverse sm:items-center sm: min-w-[138px] mb-6">
          <Icon className="w-[54px] sm:w-[74px]" name="idea" />
          <div class="text-zinc-900 text-[26px] font-bold font-poppins">
            {t('what_we_do.idealFor')}
          </div>
        </div>
        <div>
          {card?.idealFor?.map((idea, index) => {
            return (
              <div key={index} className="flex gap-2 items-start mb-2">
                <div className="w-6 h-6">
                  <Icon className="w-6 h-6" name="itemList" />
                </div>
                <span className="text-sm leading-tight tracking-tight font-poppins">
                  {parse(t(idea))}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      {card?.underText ? (
        <div className="w-full flex flex-col items-center mb-6 text-base leading-tight font-poppins">
          <span>{parse(t(card?.underText?.firstText))}</span>
          <span>{t(card?.underText?.secondText)}</span>
        </div>
      ) : null}
      <div className="w-full flex items-center justify-center">
        <ButtonCard
          clickEvent={() => {
            openLink('https://meetings.hubspot.com/jyanez1?embed=true');
          }}
          customImageClass="w-4 h-4 text-white"
          iconName="send"
          iconPosition="right"
          label={t('what_we_do.buttonCard')}
        />
      </div>
    </div>
  );
};

WhatWeDoModal.prototype = {
  card: PropTypes.object.isRequired,
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};
