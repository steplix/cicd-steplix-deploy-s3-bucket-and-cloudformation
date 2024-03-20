import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useLanguageQuery } from 'next-export-i18n';

import CustomNextLink from '@/common/components/CustomNextLink';
import Icon from '@/components/Icon';
import { useTranslation } from '@/common/lib/i18n';
import { LOCALE_SLUGS } from '@/common/utils/constants';

const ButtonRaise = ({ locale, customStyles, i18nKeyText, pathname, ariaLabel }) => {
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <CustomNextLink to={`/${locale}${pathname}`}>
      <motion.button
        aria-label={ariaLabel}
        className={`text-xs lg:text-base relative text-center text-blue font-bold w-fit pl-3 pr-2 font-poppins flex gap-2 items-center justify-center lg:bg-blue lg:text-white lg:rounded-3xl lg:justify-center ${customStyles} btn btn--raise`}
        whileHover={{ translateY: '-0.25em', transition: '0.10s' }}
      >
        {t(i18nKeyText)}
        <Icon className="w-4" fill="currentColor" name="chevronRight" />
      </motion.button>
    </CustomNextLink>
  );
};

ButtonRaise.propTypes = {
  ariaLabel: PropTypes.string,
  locale: PropTypes.oneOf(LOCALE_SLUGS),
  customStyles: PropTypes.string,
  i18nKeyText: PropTypes.string.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default ButtonRaise;
