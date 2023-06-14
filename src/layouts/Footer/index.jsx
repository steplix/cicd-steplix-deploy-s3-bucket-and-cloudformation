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
    <footer className="footer-gradient h-[519px] pt-8 pb-[72px] sm:pt-6 sm:pb-8 sm:h-[235px] lg:h-[207px]">
      <div className="container sm:flex sm:justify-between">
        <div className="flex flex-col gap-y-12 sm:gap-y-4">
          <div className="flex flex-col gap-8 sm:gap-4 items-center sm:items-start w-full">
            <div>
              <img
                src="/assets/img/logo-navbar.svg"
                alt="Steplix logo"
                className="w-[70px] h-[18px] sm:w-[86px] sm:h-[22px]"
              />
            </div>
            <div className="text-white text-xs leading-6 tracking-[0.03em] sm:text-sm sm:leading-7 lg:text-base lg:leading-8 font-medium flex flex-wrap justify-center sm:justify-start gap-1 max-w-[187px] lg:w-full lg:max-w-none lg:justify-center">
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
          <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
            <a className="rounded-full h-8 w-8 flex items-center justify-center bg-icon" href="https://www.instagram.com/steplixsoftware/" rel="noreferrer" target="_blank" aria-label={t("footer.instagramAriaLabel")}>
              <Icon name="instagram" className="h-4 w-4 text-white" />
            </a>
            <a className="rounded-full h-8 w-8 flex items-center justify-center bg-icon" href="https://www.linkedin.com/company/steplix" rel="noreferrer" target="_blank" aria-label={t("footer.linkedInAriaLabel")}>                
              <Icon name="linkedIn" className="h-4 w-4 text-white" />   
            </a>
            <div className="flex gap-[5px] font-poppins text-white items-center text-mobile">
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
          <div className="flex justify-center sm:justify-end gap-4 sm:hidden">
            <Icon name="iram" className="h-[108px] w-[60px] sm:h-[52.82px] sm:w-[52.82px] lg:h-[61.5px] lg:w-[61.5px]" />
            <Icon name="inet" className="h-[85px] w-[61px] sm:h-[52.82px] sm:w-[52.82px] lg:h-[61.5px] lg:w-[61.5px]" />
            <div className="w-[72px]">
              <a
                href={t("footer.certificateUrl")}
                rel="noreferrer"
                target="_blank"
                className="font-poppins underline text-[10px] leading-4 tracking-[0.01em] text-white"
                aria-label={t("footer.certificateAriaLabel")}
              >
                {t("footer.certificateText")}
              </a>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 font-poppins text-center text-white">
            <p className="text-[10px] leading-[0.813rem] font-light sm:text-left">{t("footer.rights")}</p>
            <a
                href={`/assets/files/${t("footer.privacyPolicyFile")}`}
                rel="noreferrer"
                target="_blank"
                className="underline text-[10px] leading-4 tracking-[0.01em]"
                aria-label={t("footer.privacyPolicyAriaLabel")}
              >
              {t("footer.privacyPolicyText")}
            </a>
          </div>          
        </div>
        <div className="hidden sm:flex sm:flex-col justify-center sm:justify-end gap-4 sm:gap-6">
          <div className="flex sm:justify-end lg:justify-center sm:gap-4">
            <Icon name="iram" className="h-[108px] w-[60px]" />
            <Icon name="inet" className="h-[85px] w-[61px]" />
          </div>
          <div className="w-[72px] sm:w-full">
            <a
              href={t("footer.certificateUrl")}
              rel="noreferrer"
              target="_blank"
              className="font-poppins underline text-[10px] lg:text-xs leading-4 tracking-[0.01em] text-white"
              aria-label={t("footer.certificateAriaLabel")}
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
