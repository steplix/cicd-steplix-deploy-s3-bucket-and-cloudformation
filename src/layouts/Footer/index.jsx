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
    <footer className="footer-gradient h-auto pt-8 pb-[72px] sm:pt-6 sm:pb-8">
      <div className="container sm:flex sm:justify-between sm:items-end">
        <div className="flex flex-col gap-y-12 sm:gap-y-4">
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
          <div className="flex sm:hidden flex-col justify-center items-center gap-4">
            <Certificates text={t('footer.certificateText')} />
            <a
              aria-label={t('footer.qualityPolicyAriaLabel')}
              className="text-white underline text-[11px] leading-4 tracking-[0.01em]"
              href={t('footer.qualityPolicyUrl')}
              rel="noreferrer"
              target="_blank"
            >
              {t('footer.qualityPolicyText')}
            </a>
          </div>
          <Policies
            privacyPolicyAriaLabel={t('footer.privacyPolicyAriaLabel')}
            privacyPolicyFilename={t('footer.privacyPolicyFile')}
            privacyPolicyText={t('footer.privacyPolicyText')}
            rightsText={t('footer.rights')}
          />
        </div>
        <div className="hidden sm:flex flex-col items-end gap-4">
          <Certificates text={t('footer.certificateText')} />
          <div className="text-white flex justify-center">
            <a
              aria-label={t('footer.qualityPolicyAriaLabel')}
              className="underline text-[11px] leading-4 tracking-[0.01em]"
              href={t('footer.qualityPolicyUrl')}
              rel="noreferrer"
              target="_blank"
            >
              {t('footer.qualityPolicyText')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
