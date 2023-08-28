import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useLanguageQuery } from 'next-export-i18n';

import { useTranslation } from '@/common/lib/i18n';
import { repeatImageLogos } from '@/common/utils/methods';
import { technologiesImages, LOCALE_SLUGS, SPACE_BETWEEN_CARDS } from '@/common/utils/constants';
import Title from '@/common/components/Title/Gradient';
import TechnologiesSlider from '@/common/components/TechnologiesSlider';
import Icon from '@/components/Icon';

const HowDoWeDoIt = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  return (
    <section className="container section-container pt-[72px] md:pt-[56px] lg:pt-[72px] rounded-t-[20px] ">
      <Title
        underlineFixed
        content={t('what_we_do.HowDoWeDoIt.titleOne')}
        size="text-[26px] lg:text-[32px]"
      />
      <div>
        <p className="font-poppins text-mobile lg:text-custom-base font-normal text-black mt-4 lg:mt-7">
          {t('what_we_do.HowDoWeDoIt.descriptionOne')}
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
            <span className="font-poppins text-blue text-xs font-bold">
              {isDropdownOpen ? t('seeLess') : t('seeMore')}
            </span>
            <Icon
              className={`h-4 w-4 dropdown-arrow text-blue ${
                isDropdownOpen ? 'dropdown-arrow--open' : ''
              }`}
              name="chevronDown"
            />
          </div>
        </button>
      </div>
      <div
        className={`dropdown-tech ${
          isDropdownOpen ? 'dropdown-tech--open' : ''
        } font-poppins text-mobile lg:text-custom-base font-normal text-grey-neutro text-center mb-[22px]`}
      >
        HTML • CSS • SASS • Typescript • JQuery • Angular • Angular Js • Reacts • NextJs • Bootstrap
        • Material • Foundation • Tailwind NodeJs • PHP • Java • Swift • NestJS • C • C++ • Express
        • Laravel • ReactNative • Symfony • MySQL • Mariadb • SQL • Sqlite DynamoDB • PostgreSQL •
        Redis • MongoDB • ElastiCache • Elasticsearch • Cordova • Ionic • Flutter • React • Kotlin •
        Swift • Git • Figma • SVN • Gitlab • Github • Bitbucket • Vagrant • Docker • Kubernetes •
        Linux • Windows • AWS • Azure • Firebase
      </div>
    </section>
  );
};

HowDoWeDoIt.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};

export default HowDoWeDoIt;
