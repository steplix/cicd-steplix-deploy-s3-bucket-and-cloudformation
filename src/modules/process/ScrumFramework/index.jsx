/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Fade from "react-reveal/Fade";

const ScrumFramework = ({ data }) => {
    //
    //VARIABLES
    //
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    let imageScrum = "/assets/img/ScrumFrameworkEs.svg";

    //
    //FUNCTION
    //
    query?.lang === "es"
        ? (imageScrum = "/assets/img/ScrumFrameworkEs.svg")
        : (imageScrum = "/assets/img/ScrumFrameworkEn.svg");

    return (
        <div className="container text-2xl xl:text-4xl font-black xl:block hidden">
            <Fade cascade>
                <div className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                    <h2>
                        {t("process.scrumFramework.titleOne")}
                        <span className="text--outlined">
                            {t("process.scrumFramework.titleTwo")}
                        </span>
                    </h2>
                </div>
                <div className="mt-10">
                    <p className="paragraph font-normal xl:max-w-[1070px] 2xl:max-w-[1400px]">
                        {t("process.scrumFramework.paragraphOne.textOne")}
                        <span className="text-yellow">
                            {t(
                                "process.scrumFramework.paragraphOne.goldenWordOne"
                            )}
                        </span>
                        {t("process.scrumFramework.paragraphOne.textTwo")}
                        <span className="text-yellow">
                            {t(
                                "process.scrumFramework.paragraphOne.goldenWordTwo"
                            )}
                        </span>
                        {t("process.scrumFramework.paragraphOne.textThree")}
                        <span className="text-yellow">
                            {t(
                                "process.scrumFramework.paragraphOne.goldenWordThree"
                            )}
                        </span>
                        {t("process.scrumFramework.paragraphOne.textFour")}
                    </p>
                </div>
                <div className="mt-[100px]">
                    <img
                        src={imageScrum}
                        alt="Scrum Framework"
                        className="xl:w-[1070px] xl:h-auto 2xl:w-[1400px] 2xl:h-auto"
                    />
                </div>
                <div className="paragraph xl:max-w-[1070px] 2xl:max-w-[1400px] space-y-8 mt-14 pb-14">
                    <p className="paragraph font-normal">
                        {t("process.scrumFramework.paragraphTwo.textOne")}
                        <span className="text-yellow">
                            {t(
                                "process.scrumFramework.paragraphTwo.goldenWordOne"
                            )}
                        </span>
                        {t("process.scrumFramework.paragraphTwo.textTwo")}
                        <span className="text-yellow">
                            {t(
                                "process.scrumFramework.paragraphTwo.goldenWordTwo"
                            )}
                        </span>
                        {t("process.scrumFramework.paragraphTwo.textThree")}
                        <span className="text-yellow">
                            {t(
                                "process.scrumFramework.paragraphTwo.goldenWordThree"
                            )}
                        </span>
                        {t("process.scrumFramework.paragraphTwo.textFour")}
                        <span className="text-yellow">
                            {t(
                                "process.scrumFramework.paragraphTwo.goldenWordFour"
                            )}
                        </span>
                        {t("process.scrumFramework.paragraphTwo.textFive")}
                    </p>
                    <div className="paragraph font-normal">
                        <p>{t("process.scrumFramework.subtitle")}</p>
                        <ul className="list-disc mb-[70px] ml-8">
                            {data.items?.map((element, index) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default ScrumFramework;
