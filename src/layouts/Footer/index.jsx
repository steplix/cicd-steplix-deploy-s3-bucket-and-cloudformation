import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import Certifications from './Certifications';
import NavigationLinks from './NavigationLinks';
import Contact from './Contact';
import Policies from './Policies';

import { useTranslation } from '@/common/lib/i18n';

const Footer = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <footer className="footer-gradient h-auto pt-8 pb-[4.5rem] sm:pb-14 lg:pt-6 lg:pb-10">
      <div className="container flex justify-center">
        <div className="flex flex-col gap-12 sm:gap-11 w-[15.43rem] sm:w-full">
          <div className="flex flex-col gap-12 sm:flex-row sm:justify-between">
            <div className="flex flex-col gap-12 sm:gap-4">
              <div className="flex flex-col gap-6 sm:gap-4 items-center sm:items-start">
                <div>
                  <img
                    alt="Steplix logo"
                    className="w-[70px] h-[18px] sm:w-[86px] sm:h-[22px]"
                    src="/assets/img/logo-navbar.svg"
                  />
                </div>
                <NavigationLinks />
              </div>
              <Contact />
              <div className="hidden lg:block">
                <Policies locale={locale} />
              </div>
            </div>
            <Certifications text={t('footer.certificateText')} />
          </div>
          <div className="block lg:hidden">
            <Policies locale={locale} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
