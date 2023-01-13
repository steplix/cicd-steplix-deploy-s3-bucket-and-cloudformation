import React from "react";
import PropTypes from "prop-types"; 
import Title from "@/common/components/Title/Gradient";
import TechnologiesSlider from "@/common/components/TechnologiesSlider";
import { useTranslation } from "@/common/lib/i18n";
import { repeatImageLogos } from "@/common/utils/methods";
import { technologiesImages, LOCALE_SLUGS, SPACE_BETWEEN_CARDS } from "@/common/utils/constants";

const HowDoWeDoIt = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <section className="space-y-7">
      <Title
        content={t("what_we_do.HowDoWeDoIt.titleOne")}
        size="text-[26px] lg:text-[32px]"
        underlineFixed
      />
      <div>
        <p className="font-poppins text-sm lg:text-base font-normal text-black">
          {t("what_we_do.HowDoWeDoIt.descriptionOne")}
        </p>
      </div>
      <TechnologiesSlider
        images={repeatImageLogos(technologiesImages, 20)}
        slides={8}
        imgClass="w-24"
        spacingBetweenSlides={SPACE_BETWEEN_CARDS}
      />
      <p className="font-poppins text-sm lg:text-base font-normal text-black text-center">
        HTML • CSS • SASS • Typescript • JQuery • Angular Js • Angular • ReactJs
        • NextJs • Bootstrap • Material • Foundation • Tailwind • NodeJs • PHP •
        Java • Python • Ruby • C • C++ • C# • GO • ASP.NET • Express • Ember •
        Laravel • Symfony • CakePHP • Django • Spring • Struts • Ruby on Rails •
        MySQL • Mariadb • SQL • Sqlite • DynamoDB • PostgreSQL • DB2 • HSQLDB •
        Redis • MongoDB • ElastiCache • Elasticsearch • Cordova • Ionic •
        Flutter • Kotlin • Objective-C • Swift • Git • SVN • Gitlab • Github •
        Bitbucket • Vagrant • Docker • Kubernetes • Linux • Windows • AWS •
        Azure • Firebase • WordPress • Ghost • Drupal
      </p>
    </section>
  );
};

HowDoWeDoIt.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS)
}

export default HowDoWeDoIt;
