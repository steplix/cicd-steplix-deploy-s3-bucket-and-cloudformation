import React from "react";
import ButtonApply from "../ButtonApply";
import { useLanguageQuery } from "next-export-i18n";
import { useTranslation } from "next-export-i18n";
import StepCard from "../StepCard";

const JobItemCard = ({ item }) => {
    const [query] = useLanguageQuery();
    const { t } = useTranslation();
    return (
        <div className="my-20 ">
            <div className="mb-20">
                <h1 className="lg:text-[100px] text-lg mb-4 font-black">
                    {item?.title}{" "}
                    <span className="title-empty"> {item?.titleEmpty} </span>
                </h1>
            </div>
            <div className="mx-auto flex justify-center">
                <ButtonApply
                    apply={t("jobs.applyButton")}
                    url="rrhh@steplix.com"
                    query={query}
                />
            </div>
            <div>
                <p className="lg:text-xl text-base">{item?.description}</p>
            </div>
            <div>
                <p>{item?.values?.title}</p>
                <p>{item?.values?.textOne}</p>
                <p>{item?.values?.textTwo}</p>
            </div>

            <div>
                <p className="text-2xl font-black mb-10 ">
                    {item?.requirements?.title}
                </p>
                <ul className="list-disc mb-14">
                    {item?.requirements?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="text-2xl font-black my-10 ">
                    {item?.responsibilities?.title}
                </p>
                <p className="text-2xl font-black my-10 ">
                    {item?.responsibilities?.subtitle}
                </p>
                <ul className="list-disc mb-14">
                    {item?.responsibilities?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p>{item?.Benefits?.title}</p>
                <p>{item?.Benefits?.textOne}</p>
                <p>{item?.Benefits?.textTwo}</p>
                <p>{item?.Benefits?.textThree}</p>
                <p>{item?.Benefits?.textFour}</p>
                <p>{item?.Benefits?.textFive}</p>
                <p>{item?.Benefits?.textSix}</p>
            </div>
            {/* section apply */}
            <div>
                <p>{item?.textCV}</p>
                textCV
            </div>
            <div>
                <ButtonApply
                    apply={t("jobs.applyButton")}
                    url="rrhh@steplix.com"
                    query={query}
                />
                <p>ó</p>
                <p>rrhh@ steplix.com</p>
            </div>
            <div>josefina salimei rrhh</div>
            {/* section values steplix */}
            <div>
                <h2>
                    {t("jobs.valuesSteplix.title")}
                    <span className="title--empty">
                        {t("jobs.valuesSteplix.titleEmpty")}
                    </span>
                </h2>
                <div>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-27">
                        <StepCard
                            title={t("jobs.valuesSteplix.valueOne.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-blue"
                            textOne={t("jobs.valuesSteplix.valueOne.text")}
                        />
                        <StepCard
                            title={t("jobs.valuesSteplix.valueTwo.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-red"
                            textOne={t("jobs.valuesSteplix.valueTwo.text")}
                        />
                        <StepCard
                            title={t("jobs.valuesSteplix.valueThree.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-yellow"
                            textOne={t("jobs.valuesSteplix.valueThree.text")}
                        />{" "}
                        <StepCard
                            title={t("jobs.valuesSteplix.valueFour.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-red"
                            textOne={t("jobs.valuesSteplix.valueFour.text")}
                        />
                        <StepCard
                            title={t("jobs.valuesSteplix.valueFive.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-yellow"
                            textOne={t("jobs.valuesSteplix.valueFive.text")}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobItemCard;
