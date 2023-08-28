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
        Angular • Angular Js • AWS • Azure • Bitbucket • Bootstrap • C • C++ • CakePHP • Cordova •
        CSS • DynamoDB Docker • ElastiCache • Elasticsearch • Express • Figma • Firebase • Flutter •
        Foundation • Git • Github Gitlab • HTML • Ionic • Java • JQuery • Kotlin • Kubernetes •
        Laravel • Linux • Mariadb • MaterialMongoDB • MySQL • NestJS • NextJs • NodeJs • PHP •
        PostgreSQL • ReactJs ReactNative • Redis • SASS • SQL • Sqlite • SVN • Swift • Symfony
        Tailwind • Typescript • Vagrant • Windows
      </div>
    </section>
  );
};

HowDoWeDoIt.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};

export default HowDoWeDoIt;
