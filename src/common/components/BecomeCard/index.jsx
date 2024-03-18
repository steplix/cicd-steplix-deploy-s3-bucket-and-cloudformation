import PropTypes from 'prop-types';

import TitleIcon from '../Title/TitleIcon';

import { useTranslation } from '@/pages/lib/i18n';

const BecomeCard = ({ icon, benefit, locale }) => {
  const { t } = useTranslation(locale);

  return (
    <article className="flex flex-col gap-2 mb-10">
      <TitleIcon icon={icon} title={t(`SteplixBenefits.${benefit}.title`)} />
      <div>
        <p className="text-[13px] lg:text-base">{t(`SteplixBenefits.${benefit}.description`)}</p>
      </div>
    </article>
  );
};

BecomeCard.propTypes = {
  icon: PropTypes.string.isRequired,
  benefit: PropTypes.string.isRequired,
  locale: PropTypes.string.isRequired,
};

export default BecomeCard;
