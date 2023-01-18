import CustomNextLink from "@/common/components/CustomNextLink";
import PropTypes from 'prop-types';
import Icon from "@/components/Icon";
import { useTranslation } from "@/common/lib/i18n";
import { LOCALE_SLUGS } from "@/common/utils/constants";

const ButtonBecomeSteplixer = ({ locale, customStyles }) => {
  const { t } = useTranslation(locale);
  return (
    <div className={`text-center text-blue font-bold w-fit pl-3 pr-2 font-poppins flex gap-2 items-center justify-center lg:bg-blue lg:text-white lg:rounded-3xl lg:justify-center ${customStyles}`}>
      <CustomNextLink to={`/${locale}/become-steplixer`}>{t("ButtonBecomeSteplixer")}</CustomNextLink>
      <Icon name="chevronRight" className="w-4" fill="currentColor" />
    </div>
  );
};

ButtonBecomeSteplixer.propTypes = {
    locale: PropTypes.oneOf(LOCALE_SLUGS),
    customStyles: PropTypes.string
}

export default ButtonBecomeSteplixer;
