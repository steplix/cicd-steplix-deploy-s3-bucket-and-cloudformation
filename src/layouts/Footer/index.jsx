/* eslint-disable @next/next/no-img-element */
import React from "react";
import CustomNextLink from "@/common/components/CustomNextLink";
import Link from 'next/link';
import Icon from "@/common/components/Icon";
import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";

const Footer = () => {
  const {query: { locale }} = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <footer className="footer-gradient h-[490px] pt-8 pb-[72px] sm:pt-[25px] sm:pb-[65px] lg:pt-[46px] sm:h-[271px] lg:h-[252px]">
      <div className="container flex flex-col sm:space-y-0 lg:space-y-4">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between lg:flex-col lg:items-start lg:space-y-4">
          <div className="flex flex-col items-center sm:items-start w-full">
            <div>
              <img
                src="/assets/img/logo-navbar.svg"
                alt="logo"
                className="w-[70px] h-[18px] lg:w-[86px] lg:h-[22px]"
              />
            </div>
            <div className="mt-6 grid grid-cols-2 ml-6 sm:ml-0 lg:flex lg:space-x-2 lg:self-center text-white sm:max-w-[225px] lg:max-w-none text-xs lg:text-base font-medium">
              <div className="w-fit">
                <CustomNextLink to={`/${i18nQuery?.lang}/about-us`}>
                  <a>{t("footer.links.item0")} </a>
                </CustomNextLink>
                <span className="ml-1">|</span>
              </div>
              <div className="w-fit">
                <CustomNextLink to={`/${i18nQuery?.lang}/what-we-do`}>
                  <a>{t("footer.links.item1")} </a>
                </CustomNextLink>
                <span className="hidden lg:inline-block lg:ml-1">|</span>
              </div>
              <div className="w-fit mt-2 lg:mt-0 lg:ml-1">
                <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
                  <a>{t("footer.links.item2")} </a>
                </CustomNextLink>
                <span className="">|</span>
              </div>
              <div className="w-fit ml-1 mt-2 lg:mt-0">
                <CustomNextLink to={`/${i18nQuery?.lang}/contact`}>
                  <a className="">{t("footer.links.item3")} </a>
                </CustomNextLink>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-0 sm:mb-7 flex flex-col lg:flex-row lg:space-x-4 self-center">
            <div className="flex space-x-4 self-center sm:self-end sm:mb-1 lg:mb-0">
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
            <div className="flex space-x-2 text-white items-center text-xs lg:text-[13px] mt-3 lg:mt-0">
              <Icon
                name="mail"
                className="h-[19px] w-[19px] text-white"
                fill="white"
              />
              <Link href="mailto:hello@steplix.com">
                <a className="font-poppins">hello@steplix.com</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center space-y-4 sm:space-y-0 lg:space-y-0 sm:flex-row sm:items-end lg:items-center sm:justify-between text-white text-xs sm:!mt-4 lg:mt-[72px]">
          <p className="text-[10px] font-light mt-11 sm:mt-0">{t("footer.rights")}</p>
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
              className="font-poppins underline text-[11px] sm:self-end lg:self-auto"
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
