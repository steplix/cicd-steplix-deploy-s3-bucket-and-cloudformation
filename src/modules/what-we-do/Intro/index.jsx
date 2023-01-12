import React from "react";
import PropTypes from "prop-types"; 
import { LOCALE_SLUGS } from '@/common/utils/constants';
import { useTranslation } from "@/common/lib/i18n";


const Intro = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <section className="w-full">
      <p className="font-poppins text-sm lg:text-base font-normal text-black">
        <strong>{t("what_we_do.intro.descriptionOne")}</strong>
        {t("what_we_do.intro.descriptionTwo")}
      </p>
    </section>
  );
};

Intro.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS)
}

export default Intro;
