/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useLanguageQuery, useTranslation } from "next-export-i18n";
import ContactCard from "@/common/components/ContactCard";
import Fade from "react-reveal/Fade";

const Address = () => {
    return (
        <address className="not-italic">
            <div className="text-base md:text-xl lg:text-3xl xl:text-xl leading-tight space-y-4">
                <p className="md:w-[330px] lg:w-[460px]">
                    Costa rica 4999, Palermo, Buenos Aires. Argentina.
                </p>
                <p>
                    <a href="mailto:hello@steplix.com">hello@steplix.com</a>
                </p>

                <p>
                    <a href="tel:+541150105103">+54 (11) 5010-5103</a>
                </p>
            </div>
        </address>
    );
};

const ScheduleContact = () => {
    let [query] = useLanguageQuery();
    const { t } = useTranslation();

    let brochureLang = query?.lang === "en" ? "assets/files/brochure_EN.pdf" : "assets/files/brochure_ES.pdf";
    const handleLinkedInTag = () => window.lintrk('track', { conversion_id: 9492433 });

    return (
        <div className="flex flex-col space-y-14 md:space-y-20 lg:space-y-12 xl:space-y-28">
            <Fade cascade>
                <section className="flex flex-col space-y-7">
                    <h2 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl">
                        {t("contact.title")}{" "}
                        <span className="text--outlined">
                            {t("contact.titleEmpty")}
                        </span>
                    </h2>
                    <div className="flex flex-col space-y-7">
                        <p className="text-2xl md:text-xl lg:text-3xl xl:text-xl leading-tight xl:mb-24">
                            {t("contact.subtitle")}
                        </p>
                        <div className="flex flex-col flex-wrap xl:flex-row gap-y-7 xl:gap-x-36">
                            <ContactCard
                                img="assets/img/kevin.svg"
                                alt={t("contact.salesRepresentative")}
                                job={t("contact.salesRepresentative")}
                                name="Kevin Halbinger"
                                borderColor="border-blue"
                                bgColor="bg-blue"
                                icon="assets/img/almanac.svg"
                                iconAlt="almanac"
                                linkCalendary="https://meetings.hubspot.com/kevin-halbinger"
                                handleLinkedInTag={handleLinkedInTag}
                            />
                            <ContactCard
                                img="assets/img/enrique.webp"
                                alt={t("contact.salesRepresentative")}
                                job={t("contact.salesRepresentative")}
                                name="Enrique Serrani"
                                borderColor="border-yellow"
                                bgColor="bg-yellow"
                                icon="assets/img/almanac.svg"
                                iconAlt="almanac"
                                linkCalendary="https://meetings.hubspot.com/enrique-serrani"
                                handleLinkedInTag={handleLinkedInTag}
                            />
                        </div>
                    </div>
                    <div>
                        <p className="text-2xl md:text-xl lg:text-3xl xl:text-xl leading-tight">
                            {t("contact.brochureText")}
                            <span className="text-yellow underline">
                                <a
                                    href={brochureLang}
                                    download="brochure-steplix"
                                >
                                    {t("contact.brochure")}
                                </a>
                            </span>
                        </p>
                    </div>
                </section>
            </Fade>
            <Fade cascade>
                <section className="flex flex-col xl:flex-row space-y-7 xl:space-y-0 xl:items-center">
                    <div className="flex flex-col space-y-7">
                        <h2 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl">
                            {t("contact.ourOfficeTitle")}{" "}
                            <span className="text--outlined">
                                {t("contact.ourOfficeTitleEmpty")}{" "}
                            </span>{" "}
                        </h2>
                        <div className="hidden xl:block">
                            <Address />
                        </div>
                    </div>
                    <div className="w-full xl:w-[523px] xl:h-[293px]">
                        <Link href="https://g.page/steplix?share">
                            <a target="_blank">
                                <img src="assets/img/map.svg" alt="map" />
                            </a>
                        </Link>{" "}
                    </div>
                    <div className="block xl:hidden">
                        <Address />
                    </div>
                </section>
            </Fade>
        </div>
    );
};

export default ScheduleContact;
