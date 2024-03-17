import PropTypes from 'prop-types';
import { useState } from 'react';

import { ButtonText } from '../ButtonText';
import ChipColorFilled from '../Chip/ChipColorFilled';
import { ProductItem } from '../ProductItem';
import { Modal } from '../Modal';
import { WhatWeDoCardDescription } from '../WhatWeDoCardDescription';

import { useTranslation } from '@/common/lib/i18n';
import { LOCALE_SLUGS } from '@/common/utils/constants';
import Title from '@/common/components/Title/GradientInvert';

export const WhatWeDoCard = ({ card, locale }) => {
  const { t } = useTranslation(locale);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full lg:w-[436px] pl-8 pr-4 pt-6 pb-4 bg-white rounded-[20px] shadow-tech-card flex-col justify-start items-end gap-6 inline-flex">
      <div className="w-full flex flex-col items-start gap-8">
        <ChipColorFilled
          background="bg-transparent"
          borderWidth={1.5}
          label={card.shortName}
          outlineColor="border-purple"
          type="slim"
        />
        <Title content={t(card.title)} secondContent={t(card.title2)} size="text-2xl" />
        <div className="flex flex-wrap w-full">
          {card.items.map((item, index) => {
            return <ProductItem key={index} iconName={t(item.iconName)} label={t(item.title)} />;
          })}
        </div>
      </div>
      <ButtonText clickEvent={openModal} label={t('what_we_do.buttonCard')} />
      <Modal isModalOpen={isModalOpen} setisModalOpen={setIsModalOpen}>
        <WhatWeDoCardDescription card={card} locale={locale} onClose={closeModal} />
      </Modal>
    </div>
  );
};

WhatWeDoCard.prototype = {
  card: PropTypes.object.isRequired,
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};
