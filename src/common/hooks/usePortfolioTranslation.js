import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";

export const usePortfolioTranslation = () => {
  const {query: { locale }} = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

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
      image: "/assets/img/clients/client-finket.webp",
      alt: "CTECH",
      name: "Lucas",
      position: "Ceo & Founder",
      lastName: "Bianchi",
      title: t("happyClients.clientFinket.title"),
      companyName: "CTECH",
      borderColor: "border-yellow",
      text: t("happyClients.clientFinket.text"),
      textColor: "text-blue",
    },
    {
      image: "/assets/img/clients/client-sura.webp",
      alt: "sura",
      name: "Juan",
      lastName: "Ramallo",
      position: "Founder",
      title: t("happyClients.clientSura.title"),
      companyName: "Seguros SURA",
      borderColor: "border-red",
      text: t("happyClients.clientSura.text"),
      textColor: "text-blue",
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
      textColor: "text-blue",
    },
    {
      image: "/assets/img/clients/client-pow.webp",
      alt: "Pow.",
      name: "Guido",
      lastName: "Ginesi",
      position: "Ceo & Founder",
      title: t("happyClients.clientPow.title"),
      companyName: "Pow.",
      borderColor: "border-yellow",
      text: t("happyClients.clientPow.text"),
      textColor: "text-blue",
    },
    {
      image: "/assets/img/clients/client-vacaygreen.webp",
      alt: "VacayGreen",
      name: "Gonzalo",
      lastName: "Arreche",
      position: "Ceo & Founder",
      title: t("happyClients.clientVacayGreen.title"),
      companyName: "VacayGreen",
      borderColor: "border-red",
      text: t("happyClients.clientVacayGreen.text"),
      textColor: "text-blue",
    },
    {
      image: "/assets/img/clients/client-valid.webp",
      alt: "Valid",
      name: "Federico",
      lastName: "Bitonte",
      position: "Ceo & Founder",
      title: t("happyClients.clientValid.title"),
      companyName: "Valid",
      borderColor: "border-blue",
      text: t("happyClients.clientValid.text"),
      textColor: "text-blue",
    },
  ];

  return { clients: ARRAY_CLIENTS, industries: PORTFOLIO_INDUSTRIES };
};
