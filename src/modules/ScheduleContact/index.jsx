/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "next-export-i18n";
import ContactCard from "@/common/components/ContactCard";
import Fade from "react-reveal/Fade";

const ScheduleContact = () => {
    const { t } = useTranslation();
    return (
        <div>
            <Fade cascade>
                <div>
                    <h1 className="mb-8 mt-16 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                        {t("contact.title")}{" "}
                        <span className="text--outlined">
                            {t("contact.titleEmpty")}
                        </span>
                    </h1>
                    <p className="text-[22px] xl:text-[20px] 2xl:text-[24px] mb-10 font-normal">
                        {" "}
                        {t("contact.subtitle")}
                    </p>
                </div>
                <div className="xl:flex space-y-7 xl:space-y-0 xl:space-x-4">
                    <div>
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
                        />
                    </div>
                    <div>
                        <ContactCard
                            img="assets/img/marcelo.webp"
                            alt={t("contact.salesRepresentative")}
                            job={t("contact.salesRepresentative")}
                            name="Marcelo Zalegas"
                            borderColor="border-yellow"
                            bgColor="bg-yellow"
                            icon="assets/img/almanac.svg"
                            iconAlt="almanac"
                            linkCalendary="https://meetings.hubspot.com/marcelo-leonardo"
                        />
                    </div>
                </div>
                <div>
                    <p className="paragraph mt-[30px] xl:mt-[50px] mb-[80px] xl:mb-[150px]">
                        {t("contact.brochureText")}
                        <span className="text-yellow decoration-solid underline">
                            <a
                                href="assets/files/brochure.pdf"
                                download="brochure-steplix"
                            >
                                {t("contact.brochure")}
                            </a>
                        </span>
                    </p>
                </div>
                {/* address */}
                <div className="xl:flex xl:mb-[250px] xl:space-x-32 order-last">
                    <div>
                        <h2 className="mb-7 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                            {t("contact.ourOfficeTitle")}{" "}
                            <span className="text--outlined">
                                {t("contact.ourOfficeTitleEmpty")}{" "}
                            </span>{" "}
                        </h2>
                        <div className="w-[333px] md:w-full xl:w-[715px] h-[186px] mb-8 xl:h-[400px]">
                            <Link href="https://g.page/steplix?share">
                                <a target="_blank">
                                    <img src="assets/img/map.svg" alt="map" />
                                </a>
                            </Link>{" "}
                        </div>
                        <address>
                            <div className="xl:text-2xl text-base xl:space-y-7 space-y-4 md:mt-[230px] xl:mt-0">
                                <p>
                                    Costa rica 4999, Palermo, Buenos Aires.
                                    Argentina.
                                </p>
                                <p>
                                    <a href="mailto:hello@steplix.com">
                                        hello@steplix.com
                                    </a>
                                </p>

                                <p>
                                    <a href="tel:+54 (11) 5367-4369">
                                        +54 (11) 5367-4369
                                    </a>
                                </p>
                            </div>
                        </address>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ScheduleContact;
