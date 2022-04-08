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
            <div className="mb-[190px]">
                <h1 className="lg:text-[100px] text-lg text-center font-black">
                    {item?.title}{" "}
                    <span className="title-empty"> {item?.titleEmpty} </span>
                </h1>
            </div>
            <div className="mx-auto mb-[110px] flex justify-center">
                <ButtonApply
                    apply={t("jobs.applyButton")}
                    url="rrhh@steplix.com"
                    query={query}
                />
            </div>
            <div>
                <p className="p-steplix">{item?.description}</p>
            </div>
            <div>
                <p className="xl:text-[32px] font-bold mt-[60px] mb-7">
                    {item?.values?.title}
                </p>
                <p className="p-steplix">{item?.values?.textOne}</p>
                <p className="p-steplix">{item?.values?.textTwo}</p>
            </div>

            <div>
                <p className="xl:text-[32px] font-bold mt-[70px] mb-7">
                    {item?.requirements?.title}
                </p>
                <ul className="list-disc mb-[70px] p-steplix">
                    {item?.requirements?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="xl:text-[32px] font-bold mt-[70px] mb-7">
                    {item?.responsibilities?.title}
                </p>
                <p className="p-steplix mt-10">
                    {item?.responsibilities?.subtitle}
                </p>
                <ul className="list-disc mb-[70px] p-steplix">
                    {item?.responsibilities?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div className="">
                <p className="xl:text-[32px] font-bold mt-[70px] mb-7">
                    {item?.Benefits?.title}
                </p>
                <div className="p-steplix space-y-6">
                    <p className="">{item?.Benefits?.textOne}</p>
                    <p className="">{item?.Benefits?.textTwo}</p>
                    <p className="">{item?.Benefits?.textThree}</p>
                    <p className="">{item?.Benefits?.textFour}</p>
                    <p className="">{item?.Benefits?.textFive}</p>
                    <p className="">{item?.Benefits?.textSix}</p>
                </div>
            </div>
            {/* section apply */}
            <div className="my-24">
                <p className="xl:text-[32px] font-bold">{t("jobs.textCV")}</p>
            </div>
            <div className="flex justify-center text-center">
                <div className="space-y-3">
                    <ButtonApply
                        apply={t("jobs.applyButton")}
                        url="rrhh@steplix.com"
                        query={query}
                    />
                    <p>ó</p>
                    <p>rrhh@ steplix.com</p>
                </div>
            </div>
            <div className="mt-[70px] mb-[170px] w-[662px] h-[167px] flex items-center border-2 border-steplix-red rounded-2xl">
                <div className="h-[100px] w-[100px] xl:ml-[70px]">
                    <img src="/assets/img/rrhh.svg" alt="rrhh" />
                </div>
                <div className="w-[5px] h-[80px] bg-steplix-red mx-[30px]" />
                <div className="space-y-2">
                    {" "}
                    <p className="font-bold text-[32px]">Josefina Salimei</p>
                    <p className="p-steplix">RR.HH</p>
                </div>

                <div className="w-[33px] h-[23px] xl:ml-[100px]">
                    <img src="/assets/img/email.svg" alt="email" />
                </div>
            </div>
            {/* section values steplix */}
            <div>
                <h2 className="h2-steplix font-black mb-[85px]">
                    {t("jobs.valuesSteplix.title")}
                    <span className="title-empty">
                        {t("jobs.valuesSteplix.titleEmpty")}
                    </span>
                </h2>
                <div>
                    <div className="grid grid-cols-3 lg:flex-row gap-10 lg:gap-27">
                        <StepCard
                            title={t("jobs.valuesSteplix.valueOne.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-blue"
                            textOne={t("jobs.valuesSteplix.valueOne.text")}
                            icon={"/assets/img/trust.svg"}
                        />
                        <StepCard
                            title={t("jobs.valuesSteplix.valueTwo.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-red"
                            textOne={t("jobs.valuesSteplix.valueTwo.text")}
                            icon={"/assets/img/respect.svg"}
                        />
                        <StepCard
                            title={t("jobs.valuesSteplix.valueThree.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-yellow"
                            textOne={t("jobs.valuesSteplix.valueThree.text")}
                            icon={"/assets/img/success.svg"}
                        />{" "}
                        <StepCard
                            title={t("jobs.valuesSteplix.valueFour.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-red"
                            textOne={t("jobs.valuesSteplix.valueFour.text")}
                            icon={"/assets/img/agil.svg"}
                        />
                        <StepCard
                            title={t("jobs.valuesSteplix.valueFive.title")}
                            colorTitle="font-semibold text-white"
                            textOne={t("jobs.valuesSteplix.valueFive.text")}
                            colorLine="bg-steplix-blue"
                            icon={"/assets/img/conscience.svg"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobItemCard;
