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
    <footer className="footer-gradient h-[510.62px] pt-8 pb-[72px] sm:pt-[25px] sm:pb-[65px] lg:pt-6 lg:pb-8 sm:h-[271px] lg:h-[276.5px]">
      <div className="container flex flex-col gap-y-[4.5rem] sm:gap-y-4">
        <div className="flex flex-col items-center sm:flex-row lg:flex-col sm:items-start lg:space-y-4">
          <div className="flex flex-col items-center sm:items-start w-full">
            <div>
              <img
                src="/assets/img/logo-navbar.svg"
                alt="Steplix logo"
                className="w-[70px] h-[18px] lg:w-[86px] lg:h-[22px]"
              />
            </div>
            <div className="mt-6 lg:mt-4 text-white text-xs leading-6 tracking-[0.03em] lg:text-base lg:leading-8 font-medium flex flex-wrap justify-center sm:justify-start gap-1 max-w-[187px] lg:w-full lg:max-w-none lg:justify-center">
              <CustomNextLink to={`/${i18nQuery?.lang}/about-us`}>
                <a aria-label={t("navbar.item1.ariaLabel")}>{t("footer.links.item0")} </a>
              </CustomNextLink>

              <div>|</div>

              <CustomNextLink to={`/${i18nQuery?.lang}/what-we-do`}>
                <a aria-label={t("navbar.item2.ariaLabel")}>{t("footer.links.item1")} </a>
              </CustomNextLink>

              <div className="hidden lg:block">|</div>

              <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
                <a aria-label={t("navbar.item3.ariaLabel")}>{t("footer.links.item2")} </a>
              </CustomNextLink>

              <div>|</div>

              <CustomNextLink to={`/${i18nQuery?.lang}/contact`}>
                <a aria-label={t("navbar.item4.ariaLabel")}>{t("footer.links.item3")} </a>
              </CustomNextLink>
            </div>
          </div>
          <div className="mt-8 lg:mt-4 sm:mt-0 sm:mb-7 flex flex-col lg:flex-row lg:space-x-4 self-center">
            <div className="flex space-x-4 self-center sm:self-end sm:mb-1 lg:mb-0">
              <a className="rounded-full h-8 w-8 flex items-center justify-center bg-icon" href="https://www.instagram.com/steplixsoftware/" rel="noreferrer" target="_blank" aria-label={t("footer.instagramAriaLabel")}>
                <Icon name="instagram" className="h-4 w-4 text-white" />
              </a>
              <a className="rounded-full h-8 w-8 flex items-center justify-center bg-icon" href="https://www.linkedin.com/company/steplix" rel="noreferrer" target="_blank" aria-label={t("footer.linkedInAriaLabel")}>                
                <Icon name="linkedIn" className="h-4 w-4 text-white" />   
              </a>
            </div>
            <div className="flex space-x-2 font-poppins text-white items-center text-mobile mt-3 lg:mt-0">
              <Icon
                name="mail"
                className="h-[19px] w-[19px] text-white"
                fill="white"
              />
              <Link href="mailto:hello@steplix.com">
                <a aria-label={t("footer.emailAriaLabel")}>hello@steplix.com</a>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center sm:flex-row sm:items-end lg:items-end sm:justify-between text-white text-xs">
          <p className="text-[10px] leading-[0.813rem] font-light mt-11 sm:mt-0">{t("footer.rights")}</p>
          <div className="flex flex-col space-y-3 sm:space-y-2 items-center sm:items-end text-xs text-center leading-[0.894rem] lg:leading-[0.975rem] tracking-[0.01em]">
            <div className="flex space-x-3 sm:space-x-3.5 lg:space-x-4">
              <Icon name="iso9001" className="h-[47.62px] w-[47.62px] sm:h-[52.82px] sm:w-[52.82px] lg:h-[61.5px] lg:w-[61.5px]" />
              <Icon name="inet" className="h-[47.62px] w-[47.62px] sm:h-[52.82px] sm:w-[52.82px] lg:h-[61.5px] lg:w-[61.5px]" />
              <Icon name="iram" className="h-[47.62px] w-[47.62px] sm:h-[52.82px] sm:w-[52.82px] lg:h-[61.5px] lg:w-[61.5px]" />
            </div>
            <div className="w-[150px] sm:w-fit">
              <a
                href={t("footer.certificateUrl")}
                rel="noreferrer"
                target="_blank"
                className="font-poppins underline text-[10px] sm:self-end lg:self-auto"
                aria-label={t("footer.certificateAriaLabel")}
              >
                {t("footer.certificateText")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
