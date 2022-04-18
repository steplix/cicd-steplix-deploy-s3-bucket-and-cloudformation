/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "next-export-i18n";

const ScrumFramework = () => {
    const { t } = useTranslation();
    const goldenWords = ["Sprints, Incremento del producto"];
    return (
        <div className="w-[340px] lg:w-[1400px] text-2xl lg:text-4xl font-black lg:block hidden">
            <div>
                <h2 className="h2-steplix leading-tight">
                    {t("process.scrumFramework.titleOne")}
                    <span className="title-empty">
                        {t("process.scrumFramework.titleTwo")}
                    </span>
                </h2>
            </div>
            <div className="w-[1087px] mt-10 mb-14">
                <p className="p-steplix">
                    {t("process.scrumFramework.paragraphOne.textOne")}
                    <span className="text-steplix-yellow">
                        {t("process.scrumFramework.paragraphOne.goldenWordOne")}
                    </span>
                    {t("process.scrumFramework.paragraphOne.textTwo")}
                    <span className="text-steplix-yellow">
                        {t("process.scrumFramework.paragraphOne.goldenWordTwo")}
                    </span>
                    {t("process.scrumFramework.paragraphOne.textThree")}
                    <span className="text-steplix-yellow">
                        {t(
                            "process.scrumFramework.paragraphOne.goldenWordThree"
                        )}
                    </span>
                    {t("process.scrumFramework.paragraphOne.textFour")}
                </p>
            </div>
            <div className="mt-[100px]">
                <img
                    src="/assets/img/ScrumFrameworkEs.svg"
                    alt="Scrum Framework"
                />
            </div>
            <div className="w-[1407px] p-steplix space-y-8 mt-14 mb-14">
                <p className="">{t("process.scrumFramework.textTwo")}</p>
                <p className="p-steplix">
                    {t("process.scrumFramework.paragraphTwo.textOne")}
                    <span className="text-steplix-yellow">
                        {t("process.scrumFramework.paragraphTwo.goldenWordOne")}
                    </span>
                    {t("process.scrumFramework.paragraphTwo.textTwo")}
                    <span className="text-steplix-yellow">
                        {t("process.scrumFramework.paragraphTwo.goldenWordTwo")}
                    </span>
                    {t("process.scrumFramework.paragraphTwo.textThree")}
                    <span className="text-steplix-yellow">
                        {t(
                            "process.scrumFramework.paragraphTwo.goldenWordThree"
                        )}
                    </span>
                    {t("process.scrumFramework.paragraphTwo.textFour")}
                    <span className="text-steplix-yellow">
                        {t(
                            "process.scrumFramework.paragraphTwo.goldenWordFour"
                        )}
                    </span>
                    {t("process.scrumFramework.paragraphTwo.textFive")}
                </p>
                <div>
                    <p>{t("process.scrumFramework.subtitle")}</p>
                    <ul className="list-disc mb-[70px] p-steplix ml-8">
                        {t("process.scrumFramework.items")?.map(
                            (element, index) => (
                                <li key={index}>{element}</li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ScrumFramework;
