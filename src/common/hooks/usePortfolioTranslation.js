import { useLanguageQuery } from 'next-export-i18n';
import { useRouter } from 'next/router';

import { useTranslation } from '@/pages/lib/i18n';

export const usePortfolioTranslation = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  const PORTFOLIO_INDUSTRIES = [
    {
      icon: 'agro',
      text: t('IconsLabel.agro'),
    },
    {
      icon: 'insurance',
      text: t('IconsLabel.insurance'),
    },

    {
      icon: 'eccomerce',
      text: t('IconsLabel.eccomerce'),
    },
    {
      icon: 'pharmacist',
      text: t('IconsLabel.pharmacist'),
    },
    {
      icon: 'fintech',
      text: t('IconsLabel.fintech'),
    },
    {
      icon: 'environment',
      text: t('IconsLabel.environment'),
    },
    {
      icon: 'car',
      text: t('IconsLabel.car'),
    },
    {
      icon: 'communications',
      text: t('IconsLabel.communications'),
    },
    {
      icon: 'news',
      text: t('IconsLabel.news'),
    },
    {
      icon: 'aeronautics',
      text: t('IconsLabel.aeronautics'),
    },
  ];

  const ARRAY_CLIENTS = [
    {
      image: '/assets/img/clients/client-sura.svg',
      alt: 'sura',
      name: 'Juan',
      lastName: 'Ramallo',
      position: 'Founder',
      title: t('happyClients.clientSura.title'),
      companyName: 'Seguros SURA',
      borderColor: 'border-red',
      text: t('happyClients.clientSura.text'),
      textColor: 'text-blue',
    },
    {
      image: '/assets/img/clients/client-valid.svg',
      alt: 'Valid',
      name: 'Pierre',
      lastName: 'Lassus',
      position: 'VP Global Director Software & Services',
      title: t('happyClients.clientValidTwo.title'),
      companyName: 'Valid',
      borderColor: 'border-blue',
      text: t('happyClients.clientValidTwo.text'),
      textColor: 'text-blue',
    },
    {
      image: '/assets/img/clients/client-finket.svg',
      alt: 'CTECH',
      name: 'Lucas',
      position: 'Ceo & Founder',
      lastName: 'Bianchi',
      title: t('happyClients.clientFinket.title'),
      companyName: 'CTECH',
      borderColor: 'border-yellow',
      text: t('happyClients.clientFinket.text'),
      textColor: 'text-blue',
    },
    {
      image: '/assets/img/clients/client-sinoar.svg',
      alt: 'SinoAr',
      name: 'Ramón',
      lastName: 'Uranga',
      position: 'Ceo & Founder',
      title: t('happyClients.clientSinoar.title'),
      companyName: 'SinoAr',
      borderColor: 'border-blue',
      text: t('happyClients.clientSinoar.text'),
      textColor: 'text-blue',
    },
    {
      image: '/assets/img/clients/client-pow.svg',
      alt: 'Pow',
      name: 'Guido',
      lastName: 'Ginesi',
      position: 'Ceo & Founder',
      title: t('happyClients.clientPow.title'),
      companyName: 'Pow',
      borderColor: 'border-yellow',
      text: t('happyClients.clientPow.text'),
      textColor: 'text-blue',
    },
    {
      image: '/assets/img/clients/client-x-28.svg',
      alt: 'X-28',
      name: 'Mariano',
      lastName: 'Mondani',
      position: 'Research and Development',
      title: t('happyClients.clientX-28.title'),
      companyName: 'X-28',
      borderColor: 'border-blue',
      text: t('happyClients.clientX-28.text'),
      textColor: 'text-blue',
    },
    {
      image: '/assets/img/clients/client-vacaygreen.svg',
      alt: 'VacayGreen',
      name: 'Gonzalo',
      lastName: 'Arreche',
      position: 'Ceo & Founder',
      title: t('happyClients.clientVacayGreen.title'),
      companyName: 'VacayGreen',
      borderColor: 'border-red',
      text: t('happyClients.clientVacayGreen.text'),
      textColor: 'text-blue',
    },
    {
      image: '/assets/img/clients/client-valid.svg',
      alt: 'Valid',
      name: 'Federico',
      lastName: 'Bitonte',
      position: 'Ceo & Founder',
      title: t('happyClients.clientValid.title'),
      companyName: 'Valid',
      borderColor: 'border-blue',
      text: t('happyClients.clientValid.text'),
      textColor: 'text-blue',
    },
    {
      image: '/assets/img/clients/client-ceva.svg',
      alt: 'Ceva',
      name: 'Maria',
      lastName: 'Fariña',
      position: 'Marketing',
      title: t('happyClients.clientCeva.title'),
      companyName: 'CEVA Salud Animal',
      borderColor: 'border-blue',
      text: t('happyClients.clientCeva.text'),
      textColor: 'text-blue',
    },
    {
      image: '/assets/img/clients/client-pow.svg',
      alt: 'Pow',
      name: 'Giovanna',
      lastName: 'Maratta',
      position: 'Product Manager',
      title: t('happyClients.clientPowTwo.title'),
      companyName: 'Pow',
      borderColor: 'border-blue',
      text: t('happyClients.clientPowTwo.text'),
      textColor: 'text-blue',
    },
  ];

  return { clients: ARRAY_CLIENTS, industries: PORTFOLIO_INDUSTRIES };
};
