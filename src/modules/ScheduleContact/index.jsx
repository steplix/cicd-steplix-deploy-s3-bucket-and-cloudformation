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
                <div className="h2-steplix">
                    <h1 className="mb-8 mt-16">
                        {t("contact.title")}{" "}
                        <span className="title-empty">
                            {t("contact.titleEmpty")}
                        </span>
                    </h1>
                    <p className="xl:text-[40px] text-[22px] mb-10 font-normal">
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
                            borderColor="border-steplix-blue"
                            bgColor="bg-steplix-blue"
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
                            borderColor="border-steplix-yellow"
                            bgColor="bg-steplix-yellow"
                            icon="assets/img/almanac.svg"
                            iconAlt="almanac"
                            linkCalendary="https://meetings.hubspot.com/marcelo-leonardo"
                        />
                    </div>
                </div>
                <div>
                    <p className="paragraph mt-[30px] xl:mt-[50px] mb-[80px] xl:mb-[220px]">
                        {t("contact.brochureText")}
                        <span className="text-steplix-yellow decoration-solid underline">
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
                        <h2 className="h3-steplix mb-7">
                            {t("contact.ourOfficeTitle")}{" "}
                            <span className="title-empty">
                                {t("contact.ourOfficeTitleEmpty")}{" "}
                            </span>{" "}
                        </h2>
                        <div className="xl:w-[715px] w-[333px] h-[186px] mb-8 xl:h-[400px] xl:hidden ">
                            <Link href="https://g.page/steplix?share">
                                <a target="_blank">
                                    <img src="assets/img/map.svg" alt="map" />
                                </a>
                            </Link>{" "}
                        </div>
                        <div className="xl:text-2xl text-base xl:space-y-7 space-y-4">
                            <p>
                                Costa rica 4999, Palermo, Buenos Aires.
                                Argentina.
                            </p>
                            <p>hello@steplix.com</p>
                            <p>+54 (11) 5367-4369</p>
                        </div>
                    </div>
                    <div className="xl:w-[715px] w-[333px] h-[186px] xl:h-[400px] hidden xl:block">
                        <Link href="https://g.page/steplix?share">
                            <a target="_blank">
                                <img src="assets/img/map.svg" alt="map" />
                            </a>
                        </Link>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ScheduleContact;
