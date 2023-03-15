import React from "react";
import PropTypes from "prop-types"; 
import { useRouter } from "next/router";
import { useLanguageQuery } from "next-export-i18n";
import { useTranslation } from "@/common/lib/i18n";
import { repeatImageLogos } from "@/common/utils/methods";
import { technologiesImages, LOCALE_SLUGS, SPACE_BETWEEN_CARDS } from "@/common/utils/constants";
import Title from "@/common/components/Title/Gradient";
import TechnologiesSlider from "@/common/components/TechnologiesSlider";
import Icon from '@/components/Icon';

const HowDoWeDoIt = () => {
  const { query: { locale } } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <section className="container section-container pt-14 rounded-t-[20px] ">
      <Title
        content={t("what_we_do.HowDoWeDoIt.titleOne")}
        size="text-[26px] lg:text-[32px]"
        underlineFixed
      />
      <div>
        <p className="font-poppins text-mobile lg:text-custom-base font-normal text-black mt-4 lg:mt-7">
          {t("what_we_do.HowDoWeDoIt.descriptionOne")}
        </p>
      </div>
      <div className="mt-8 mb-4">
        <TechnologiesSlider
          images={repeatImageLogos(technologiesImages, 20)}
          spacingBetweenSlides={SPACE_BETWEEN_CARDS}
          />
      </div>
      <div className="flex justify-end">
        <button className="cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
          <div className="flex items-end gap-2">
            <span className="font-poppins text-blue text-xs font-bold">{isDropdownOpen ? t("seeLess") : t("seeMore") }</span>
            <Icon name="chevronDown" className={`h-4 w-4 dropdown-arrow text-blue ${isDropdownOpen ? 'dropdown-arrow--open' : ''}`} />
          </div>
        </button>
      </div>
      <div className={`dropdown-tech ${isDropdownOpen ? 'dropdown-tech--open' : ''} font-poppins text-mobile lg:text-custom-base font-normal text-grey-neutro text-center`}>
        HTML • CSS • SASS • Typescript • JQuery • Angular Js • Angular • ReactJs
        • NextJs • Bootstrap • Material • Foundation • Tailwind • NodeJs • PHP •
        Java • Python • Ruby • C • C++ • C# • GO • ASP.NET • Express • Ember •
        Laravel • Symfony • CakePHP • Django • Spring • Struts • Ruby on Rails •
        MySQL • Mariadb • SQL • Sqlite • DynamoDB • PostgreSQL • DB2 • HSQLDB •
        Redis • MongoDB • ElastiCache • Elasticsearch • Cordova • Ionic •
        Flutter • Kotlin • Objective-C • Swift • Git • SVN • Gitlab • Github •
        Bitbucket • Vagrant • Docker • Kubernetes • Linux • Windows • AWS •
        Azure • Firebase • WordPress • Ghost • Drupal
      </div>
    </section>
  );
};

HowDoWeDoIt.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS)
}

export default HowDoWeDoIt;
