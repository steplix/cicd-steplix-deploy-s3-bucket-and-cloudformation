import PropTypes from 'prop-types';

import { CERTIFICATIONS_LIST, LOCALE_SLUGS } from '@/common/utils/constants';
import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/common/lib/i18n';

const Certifications = ({ locale }) => {
  const { t } = useTranslation(locale);

  return (
    <section className='flex flex-col gap-8 lg:gap-10 xl:gap-12'>
      <Title
        borderPosition="left"
        content={t('about_us.certificates.title')}
        height="h-[32px]"
        size="text-[26px] lg:text-[32px]"
        type="h1"
      />
      <div className="w-full flex items-center justify-center gap-4 ">
        <div className='w-[330px] sm:w-[450px] lg:w-full flex flex-wrap items-center justify-center'>
        {CERTIFICATIONS_LIST.map((certification) => {
          return (
            <div key={certification.imageAlt} className="certification-image">
              <img
                alt={certification.imageAlt}
                className="h-full w-full"
                src={certification.imageUrl}
              />
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
};

Certifications.propTypes = {
  locale: PropTypes.oneOf(LOCALE_SLUGS),
};
export default Certifications;
