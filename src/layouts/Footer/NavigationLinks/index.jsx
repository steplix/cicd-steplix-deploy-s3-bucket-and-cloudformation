import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/common/lib/i18n';
import CustomNextLink from '@/common/components/CustomNextLink';

const NavigationLinks = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <div className="text-white text-xs leading-6 tracking-[0.03em] sm:text-sm sm:leading-7 lg:text-base lg:leading-8 font-medium flex flex-wrap justify-center sm:justify-start gap-1 max-w-[187px] lg:w-full lg:max-w-none lg:justify-center">
      <CustomNextLink to={`/${i18nQuery?.lang}/about-us`}>
        <a aria-label={t('navbar.item1.ariaLabel')}>{t('footer.links.item0')} </a>
      </CustomNextLink>

      <div>|</div>

      <CustomNextLink to={`/${i18nQuery?.lang}/what-we-do`}>
        <a aria-label={t('navbar.item2.ariaLabel')}>{t('footer.links.item1')} </a>
      </CustomNextLink>

      <div className="hidden lg:block">|</div>

      <CustomNextLink to={`/${i18nQuery?.lang}/portfolio`}>
        <a aria-label={t('navbar.item3.ariaLabel')}>{t('footer.links.item2')} </a>
      </CustomNextLink>

      <div>|</div>

      <CustomNextLink to={`/${i18nQuery?.lang}/contact`}>
        <a aria-label={t('navbar.item4.ariaLabel')}>{t('footer.links.item3')} </a>
      </CustomNextLink>
    </div>
  );
};

export default NavigationLinks;
