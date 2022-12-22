import { useTranslation } from "next-export-i18n";

export const usePortfolioTranslation = () => {
  const { t } = useTranslation();

  const PORTFOLIO_INDUSTRIES = [
    {
      icon: "agro",
      text: t("IconsLabel.agro"),
    },
    {
      icon: "insurance",
      text: t("IconsLabel.insurance"),
    },

    {
      icon: "eccomerce",
      text: t("IconsLabel.eccomerce"),
    },
    {
      icon: "pharmacist",
      text: t("IconsLabel.pharmacist"),
    },
    {
      icon: "logistics",
      text: t("IconsLabel.logistics"),
    },
    {
      icon: "fintech",
      text: t("IconsLabel.fintech"),
    },
    {
      icon: "environment",
      text: t("IconsLabel.environment"),
    },
    {
      icon: "car",
      text: t("IconsLabel.car"),
    },
    {
      icon: "communications",
      text: t("IconsLabel.communications"),
    },
    {
      icon: "news",
      text: t("IconsLabel.news"),
    },
    {
      icon: "aeronautics",
      text: t("IconsLabel.aeronautics"),
    },
  ];

  const ARRAY_CLIENTS = [
    {
      image: "/assets/img/clients/client-finket-v2.svg",
      alt: "CTECH",
      name: "Lucas",
      position: "Ceo & Founder",
      lastName: "Bianchi",
      title: t("happyClients.clientFinket.title"),
      companyName: "CTECH",
      borderColor: "border-yellow",
      text: t("happyClients.clientFinket.text"),
    },
    {
      image: "/assets/img/clients/client-sura.svg",
      alt: "sura",
      name: "Juan",
      lastName: "Ramallo",
      position: "Founder",
      title: t("happyClients.clientSura.title"),
      companyName: "Seguros SURA",
      borderColor: "border-red",
      text: t("happyClients.clientSura.text"),
    },
    {
      image: "/assets/img/clients/sinoar-logo.webp",
      alt: "SinoAr",
      name: "Ramón",
      lastName: "Uranga",
      position: "Ceo & Founder",
      title: t("happyClients.clientSinoar.title"),
      companyName: "SinoAr",
      borderColor: "border-blue",
      text: t("happyClients.clientSinoar.text"),
    },
    {
      image: "/assets/img/clients/client-pow.svg",
      alt: "Pow.",
      name: "Guido",
      lastName: "Ginesi",
      position: "Ceo & Founder",
      title: t("happyClients.clientPow.title"),
      companyName: "Pow.",
      borderColor: "border-yellow",
      text: t("happyClients.clientPow.text"),
    },
    {
      image: "/assets/img/clients/client-vacaygreen.svg",
      alt: "VacayGreen",
      name: "Gonzalo",
      lastName: "Arreche",
      position: "Ceo & Founder",
      title: t("happyClients.clientVacayGreen.title"),
      companyName: "VacayGreen",
      borderColor: "border-red",
      text: t("happyClients.clientVacayGreen.text"),
    },
    {
      image: "/assets/img/clients/client-valid.svg",
      alt: "Valid",
      name: "Federico",
      lastName: "Bitonte",
      position: "Ceo & Founder",
      title: t("happyClients.clientValid.title"),
      companyName: "Valid",
      borderColor: "border-blue",
      text: t("happyClients.clientValid.text"),
    },
  ];

  // TODO: Replace this array with the one obove when the carrusel is ready
  const ARRAY_CLIENT = [
    {
      image: "/assets/img/clients/client-finket-v2.svg",
      alt: "CTECH",
      name: "Lucas",
      position: "Ceo & Founder",
      lastName: "Bianchi",
      title: t("happyClients.clientFinket.title"),
      companyName: "CTECH",
      borderColor: "border-yellow",
      text: t("happyClients.clientFinket.text"),
    },
  ];

  return { clients: ARRAY_CLIENT, industries: PORTFOLIO_INDUSTRIES };
};
