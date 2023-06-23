import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import Certificates from './Certificates';
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
    <footer className="footer-gradient h-[519px] pt-8 pb-[72px] sm:pt-6 sm:pb-8 sm:h-[235px] lg:h-[207px]">
      <div className="container sm:flex sm:justify-between sm:items-end">
        <div className="flex flex-col gap-y-12 sm:gap-y-4">
          <div className="flex flex-col gap-8 sm:gap-4 items-center sm:items-start w-full">
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
          <Certificates
            ariaLabel={t('footer.certificateAriaLabel')}
            className="block sm:hidden"
            text={t('footer.certificateText')}
            url={t('footer.certificateUrl')}
          />
          <Policies
            privacyPolicyAriaLabel={t('footer.privacyPolicyAriaLabel')}
            privacyPolicyFilename={t('footer.privacyPolicyFile')}
            privacyPolicyText={t('footer.privacyPolicyText')}
            rightsText={t('footer.rights')}
          />
        </div>
        <Certificates
          ariaLabel={t('footer.certificateAriaLabel')}
          className="hidden sm:block"
          text={t('footer.certificateText')}
          url={t('footer.certificateUrl')}
        />
      </div>
    </footer>
  );
};

export default Footer;
