import { useLanguageQuery } from 'next-export-i18n';

import { useTranslation } from '@/common/lib/i18n';

const Policies = ({ locale }) => {
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 font-poppins justify-center lg:justify-start items-center sm:items-baseline lg:gap-2 text-white text-center">
      <p className="text-[10px] leading-[14px] font-light">{t('footer.rights')}</p>
      <a
        aria-label={t('footer.privacyPolicyAriaLabel')}
        className="underline text-[10px] leading-4 tracking-[0.01em]"
        href={`/assets/files/${t('footer.privacyPolicyFile')}`}
        rel="noreferrer"
        target="_blank"
      >
        {t('footer.privacyPolicyText')}
      </a>
      <a
        aria-label={t('footer.qualityPolicyAriaLabel')}
        className="text-white underline text-[10px] leading-4 tracking-[0.01em]"
        href={`${t('footer.qualityPolicyUrl')}`}
        rel="noreferrer"
        target="_blank"
      >
        {t('footer.qualityPolicyText')}
      </a>
    </div>
  );
};

export default Policies;
