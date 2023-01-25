import CustomNextLink from "@/common/components/CustomNextLink";
import { motion } from "framer-motion"; 
import PropTypes from 'prop-types';
import Icon from "@/components/Icon";
import { useTranslation } from "@/common/lib/i18n";
import { LOCALE_SLUGS } from "@/common/utils/constants";
import { useLanguageQuery } from "next-export-i18n";

const ButtonBecomeSteplixer = ({ locale, customStyles }) => {
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);
  return (
    <CustomNextLink to={`/${locale}/become-steplixer`}>
      <motion.button className={`relative text-center text-blue font-bold w-fit pl-3 pr-2 font-poppins flex gap-2 items-center justify-center lg:bg-blue lg:text-white lg:rounded-3xl lg:justify-center ${customStyles} btn btn--raise`} whileHover={{ translateY: '-0.25em', transition: '0.10s' }}>
        {t("ButtonBecomeSteplixer")}
        <Icon name="chevronRight" className="w-4" fill="currentColor" />
      </motion.button>
    </CustomNextLink>
  );
};

ButtonBecomeSteplixer.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
  customStyles: PropTypes.string,
};

export default ButtonBecomeSteplixer;
