import CustomNextLink from "@/common/components/CustomNextLink";
import PropTypes from "prop-types";
import Icon from "@/components/Icon";
import { useTranslation } from "@/common/lib/i18n";
import { LOCALE_SLUGS } from "@/common/utils/constants";
import { useLanguageQuery } from "next-export-i18n";

const ButtonBecomeSteplixer = ({ locale, customStyles }) => {
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);
  return (
    <div
      className={`text-center text-blue font-bold h font-poppins flex gap-4 items-center justify-center lg:bg-blue lg:text-white lg:rounded-3xl lg:justify-center ${customStyles}`}
    >
      <CustomNextLink to={`/${locale}/become-steplixer`}>
        {t("ButtonBecomeSteplixer")}
      </CustomNextLink>
      <Icon name="chevronRight" className="w-4" fill="currentColor" />
    </div>
  );
};

ButtonBecomeSteplixer.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
  customStyles: PropTypes.string,
};

export default ButtonBecomeSteplixer;
