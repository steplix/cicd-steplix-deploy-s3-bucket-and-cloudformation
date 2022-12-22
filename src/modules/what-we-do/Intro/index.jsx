import React from "react";
import { useTranslation } from "next-export-i18n";

const Intro = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <p className="font-poppins text-sm lg:text-base font-normal text-black">
        <strong>{t("what_we_do.intro.descriptionOne")}</strong>
        {t("what_we_do.intro.descriptionTwo")}
      </p>
    </section>
  );
};

export default Intro;
