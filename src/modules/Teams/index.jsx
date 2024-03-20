import PropTypes from 'prop-types';

import { useTranslation } from '@/common/lib/i18n';
import { aboutUsPhotoArray, LOCALE_SLUGS } from '@/common/utils/constants';
import Chip from '@/common/components/TechnologyChip';
import Title from '@/common/components/Title/Gradient';
import PhotoCarousel from '@/common/components/PhotoCarousel';
import ButtonRaise from '@/common/components/ButtonRaise';

const Teams = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <section className="flex flex-col">
      <Title
        borderPosition="left"
        content={t('about_us.teams.title')}
        height="h-9"
        size="text-[26px] lg:text-[32px]"
      />
      <div className="flex flex-col xl:flex-row items-center justify-between">
        <p className="font-poppins text-sm lg:text-base font-normal text-black my-8 max-w-[740px]">
          {t('about_us.teams.description')}
          <span className="font-semibold">{t('about_us.teams.descriptionBold')}</span>
        </p>
        <h3 className="font-black text-[24px] xl:text-5xl text-purple mx-auto lg:mx-0 xl:pr-[44px]">
          #Digital{' '}
          <span className="text-outlined--purple font-black" data-content="Sherpas">
            Sherpas
          </span>
        </h3>
      </div>
      <div className="my-8">
        <PhotoCarousel locale={locale} photoArray={aboutUsPhotoArray} />
      </div>
      <div className="flex flex-col gap-8 space-y-6 lg:space-y-0 lg:space-x-16 items-center lg:justify-center">
        <div className="flex flex-col xl:flex-row space-y-4 lg:space-y-[18px] xl:space-x-4 xl:space-y-0 sm:space-x-0 items-center justify-center">
          <div className="flex flex-row space-x-4 lg:space-x-[18px]">
            <Chip
              customIconClass="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px] mt-2"
              label={'QA'}
              name="qa"
            />
            <Chip
              customIconClass="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]"
              label={'UX/UI'}
              name="uiux"
            />
            <Chip
              customIconClass="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px] text-white"
              label={'Mobile'}
              name="mobile"
            />
            <div className="hidden sm:block">
              <Chip
                customIconClass="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]"
                label={'Back end'}
                name="backend"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-4 lg:space-x-[18px]">
            <div className="flex flex-row space-x-4 sm:space-x-0">
              <div className="block sm:hidden">
                <Chip
                  customIconClass="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]"
                  label={'Back end'}
                  name="backend"
                />
              </div>
              <Chip
                customIconClass="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px] mt-1"
                label={'Front end'}
                name="frontend"
              />
            </div>
            <div className="flex flex-row space-x-4 lg:space-x-[18px]">
              <Chip
                customIconClass="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px]"
                label={'Scrum'}
                name="scrum"
              />
              <Chip
                customIconClass="h-[18px] w-[18px] lg:h-[20px] lg:w-[20px] text-white"
                label={'Architect'}
                name="architect"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-8 lg:mt-10 xl:mt-14">
        <ButtonRaise
          ariaLabel={t('navbar.item5.ariaLabel')}
          customStyles="h-[37px]"
          i18nKeyText={'ButtonBecomeSteplixer'}
          locale={locale}
          pathname="/become-steplixer"
        />
      </div>
    </section>
  );
};

Teams.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};

export default Teams;
