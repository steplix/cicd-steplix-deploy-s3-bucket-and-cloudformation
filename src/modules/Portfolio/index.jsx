import React from "react";
import TechnologiesSlider from "@/common/components/TechnologiesSlider";
import { useLanguageQuery } from "next-export-i18n";
import { useTranslation } from "@/common/lib/i18n";
import { useRouter } from "next/router";
import { repeatImageLogos } from "@/common/utils/methods";
import { clientsLogos, SPACE_BETWEEN_CARDS } from "@/common/utils/constants";
import Banner from "../Banner";

const Portfolio = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <section className="mb-[72px] lg:mt-[-196px]">
      <>
        <Banner />

        <div className="container mt-[72px]">
          <TechnologiesSlider
              images={repeatImageLogos(clientsLogos, 20)}
              slides={8}
              imgClass="w-24"
              spacingBeetWeenSlides={SPACE_BETWEEN_CARDS}
            />
        </div>
      </>
    </section>
  );
};

export default Portfolio;
