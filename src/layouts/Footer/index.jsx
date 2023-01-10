/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomNextLink from "@/common/components/CustomNextLink";
import Icon from "@/common/components/Icon";
import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";

//TODO: RE-CHECK FOOTERS LINKS AND TRANSLATIONs

const Footer = () => {
  const {query: { locale }} = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <footer className="footer-gradient py-11">
      <div className="container flex flex-col space-y-8 md:space-y-4">
        <div className="flex flex-col space-y-6 md:space-y-4 items-center md:flex-row md:justify-between lg:flex-col lg:items-start lg:space-y-4">
          <div className="flex flex-col items-center md:items-start space-y-4 w-full">
            <div>
              <img
                src="/assets/img/logo-navbar.svg"
                alt="logo"
                className="w-[109px] h-[28px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-1 ml-6 md:ml-0 lg:flex lg:space-x-2 lg:self-center text-white md:max-w-[225px] lg:max-w-none text-xs lg:text-base">
              <div>
                <CustomNextLink to={`/${i18nQuery?.lang}/about-us`}>
                  <a>{t("footer.links.item0")} </a>
                </CustomNextLink>
                <span className="ml-2 md:ml-3 lg:ml-1">|</span>
              </div>
              <div>
                <CustomNextLink to={`/${i18nQuery?.lang}/what-we-do`}>
                  <a>{t("footer.links.item1")} </a>
                </CustomNextLink>
                <span className="ml-1 hidden lg:inline">|</span>
              </div>
              <div>
                <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
                  <a>{t("footer.links.item2")} </a>
                </CustomNextLink>
                <span className="ml-1">|</span>
              </div>
              <div>
                <CustomNextLink to={`/${i18nQuery?.lang}/contact`}>
                  <a>{t("footer.links.item3")} </a>
                </CustomNextLink>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row self-center">
            <div className="flex space-x-4 self-center md:self-end">
              <a href="https://www.instagram.com/steplixsoftware/" rel="noreferrer" target="_blank">
                <div className="rounded-full h-8 w-8 flex items-center justify-center bg-icon">
                  <Icon name="instagram" className="h-4 w-4 text-white" />
                </div>
              </a>
              <a href="https://www.linkedin.com/company/steplix" rel="noreferrer" target="_blank">
                <div className="rounded-full h-8 w-8 flex items-center justify-center bg-icon">
                  <Icon name="linkedIn" className="h-4 w-4 text-white" />
                </div>
              </a>
            </div>
            <div className="flex space-x-2 text-white items-center text-xs lg:text-base">
              <Icon
                name="mail"
                className="h-[19px] w-[19px] text-white"
                fill="white"
              />
              <p>hello@steplix.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center space-y-4 lg:space-y-0 md:flex-row md:items-end lg:items-center md:justify-between text-white text-xs">
          <p className="mt-12 md:mt-0">{t("footer.rights")}</p>
          <div className="flex flex-col space-y-3 lg:space-y-0 lg:flex-row lg:space-x-3 text-white items-center text-xs">
            <div className="flex space-x-3">
              <Icon name="iso9001" className="h-[38px] w-[38px]" />
              <Icon name="inet" className="h-[38px] w-[38px]" />
              <Icon name="iram" className="h-[38px] w-[38px]" />
            </div>
            <a
              href={t("footer.certificateUrl")}
              rel="noreferrer"
              target="_blank"
              className="font-poppins underline"
            >
              {t("footer.certificateText")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
