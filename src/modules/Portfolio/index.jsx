import React from "react";
import CustomNextLink from "@/common/components/CustomNextLink";
import Icon from "@/components/Icon";
import ButtonCard from "@/common/components/ButtonCard";
import TechnologiesSlider from "@/common/components/TechnologiesSlider";
import { useLanguageQuery } from "next-export-i18n";
import { useTranslation } from "@/common/lib/i18n";
import { useRouter } from "next/router";
import { repeatImageLogos } from "@/common/utils/methods";
import { clientsLogos } from "@/common/utils/constants";
import Banner from "../Banner";

const Portfolio = () => {
  const {
    query: { locale },
    push,
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  const onClick = (url) => {
    push(
      {
        pathname: url,
        query: i18nQuery,
      },
      url,
      { shallow: false }
    );
  };

  return (
    <section className="mb-[72px]">
      <div>
        <Banner />

        <div className="container flex lg:hidden justify-end items-end gap-2 pr-[23px] -mt-6 md:-mt-12 mb-8">
          <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
            <a>
              <span className="text-blue text-xs font-bold">
                {t("PortfolioHomeSection.title")}
              </span>
            </a>
          </CustomNextLink>
          <Icon name="chevronRight" className="h-4 w-4" />
        </div>

        <TechnologiesSlider
          images={repeatImageLogos(clientsLogos, 20)}
          slides={8}
          imgClass="w-20"
        />
      </div>
    </section>
  );
};

export default Portfolio;
