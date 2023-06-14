import React from "react";
import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";

import Certificates from "./Certificates";
import NavigationLinks from "./NavigationLinks";
import Contact from "./Contact";
import Policies from "./Policies";

const Footer = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <footer className="footer-gradient h-[519px] pt-8 pb-[72px] sm:pt-6 sm:pb-8 sm:h-[235px] lg:h-[207px]">
      <div className="container sm:flex sm:justify-between sm:items-end">
        <div className="flex flex-col gap-y-12 sm:gap-y-4">
          <div className="flex flex-col gap-8 sm:gap-4 items-center sm:items-start w-full">
            <div>
              <img
                src="/assets/img/logo-navbar.svg"
                alt="Steplix logo"
                className="w-[70px] h-[18px] sm:w-[86px] sm:h-[22px]"
              />
            </div>
            <NavigationLinks />
          </div>
          <Contact />
          <Certificates
            className="block sm:hidden"
            url={t("footer.certificateUrl")}
            ariaLabel={t("footer.certificateAriaLabel")}
            text={t("footer.certificateText")}
          />
          <Policies
            rightsText={t("footer.rights")}
            privacyPolicyFilename={t("footer.privacyPolicyFile")}
            privacyPolicyAriaLabel={t("footer.privacyPolicyAriaLabel")}
            privacyPolicyText={t("footer.privacyPolicyText")}
          />
        </div>
        <Certificates
          className="hidden sm:block"
          url={t("footer.certificateUrl")}
          ariaLabel={t("footer.certificateAriaLabel")}
          text={t("footer.certificateText")}
        />
      </div>
    </footer>
  );
};

export default Footer;
