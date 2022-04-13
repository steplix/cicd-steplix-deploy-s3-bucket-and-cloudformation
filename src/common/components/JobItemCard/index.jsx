/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonApply from "../ButtonApply";
import { useLanguageQuery } from "next-export-i18n";
import { useTranslation } from "next-export-i18n";
import StepCard from "../StepCard";
import Link from "next/link";

const JobItemCard = ({ item }) => {
    const [query] = useLanguageQuery();
    const { t } = useTranslation();
    return (
        <div>
            <div className="xl:my-[190px] my-[62px] w-[340px] xl:w-full ">
                <h1 className="xl:lg:text-[100px] text-4xl xl:text-center font-black">
                    {item?.title}{" "}
                    <span className="title-empty"> {item?.titleEmpty} </span>
                </h1>
            </div>
            <div className="mx-auto mb-[43px] xl:mb-[110px] flex justify-center">
                <ButtonApply
                    apply={t("jobs.applyButton")}
                    email="rrhh@steplix.com"
                    query={query}
                />
            </div>
            <div>
                <p className="p-steplix">{item?.description}</p>
            </div>
            <div>
                <p className="xl:text-[32px] text-[22px] font-bold xl:mt-[60px] mt-[50px] mb-7">
                    {item?.values?.title}
                </p>
                <p className="p-steplix">{item?.values?.textOne}</p>
                <p className="p-steplix">{item?.values?.textTwo}</p>
            </div>

            <div>
                <p className="xl:text-[32px] text-[22px] font-bold mt-[70px] mb-7">
                    {item?.requirements?.title}
                </p>
                <ul className="list-disc mb-[70px] p-steplix">
                    {item?.requirements?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="xl:text-[32px] text-[22px] font-bold mt-[70px] mb-7">
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
            <div>
                <p className="xl:text-[32px] text-[22px] font-bold mt-[70px]  xl:mb-7">
                    {item?.Benefits?.title}
                </p>
                <div className="p-steplix space-y-6">
                    <p>{item?.Benefits?.textOne}</p>
                    <p>{item?.Benefits?.textTwo}</p>
                    <p>{item?.Benefits?.textThree}</p>
                    <p>{item?.Benefits?.textFour}</p>
                    <p>{item?.Benefits?.textFive}</p>
                    <p>{item?.Benefits?.textSix}</p>
                </div>
            </div>
            {/* section apply */}
            <div className="my-24">
                <p className="xl:text-[32px] text-[22px] font-bold">
                    {t("jobs.textCV")}
                </p>
            </div>
            <div className="flex justify-center text-center">
                <div className="space-y-3">
                    <ButtonApply
                        apply={t("jobs.applyButton")}
                        email="rrhh@steplix.com"
                        query={query}
                    />
                    <p>{t("jobs.or")}</p>
                    <p>rrhh@steplix.com</p>
                </div>
            </div>
            <div className="xl:mt-[70px] mt-[60px] xl:mb-[170px] mb-[70px] xl:w-[662px] w-[332px] xl:h-[167px] h-[84px] flex items-center border-2 border-steplix-red rounded-2xl">
                <div className="xl:h-[100px] h-[50px] w-[50px] xl:w-[100px] xl:ml-[70px] ml-[10px]">
                    <img src="/assets/img/rrhh.svg" alt="rrhh" />
                </div>
                <div className="xl:w-[5px] w-[2px] xl:h-[80px] h-[40px] bg-steplix-red xl:mx-[30px] mx-[12px]" />
                <div className="xl:space-y-2">
                    {" "}
                    <p className="font-bold xl:text-[32px] text-[22px]">
                        Josefina Salimei
                    </p>
                    <p className="p-steplix">{t("jobs.hr")}</p>
                </div>

                <div className="xl:w-[33px] w-[16px] xl:h-[23px] h-[13px] xl:ml-[100px] ml-[30px]">
                    <Link href="mailto:rrhh@steplix.com">
                        <a>
                            <img src="/assets/img/email.svg" alt="email" />
                        </a>
                    </Link>
                </div>
            </div>
            {/* section values steplix */}
            <div>
                <h2 className="h2-steplix font-black mb-[40px] xl:mb-[85px]">
                    {t("jobs.valuesSteplix.title")}
                    <span className="title-empty">
                        {t("jobs.valuesSteplix.titleEmpty")}
                    </span>
                </h2>
                <div>
                    <div className="grid xl:grid-cols-3 lg:flex-row gap-10 lg:gap-27">
                        <StepCard
                            title={t("jobs.valuesSteplix.valueOne.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-blue"
                            textOne={t("jobs.valuesSteplix.valueOne.text")}
                            icon={"/assets/img/trust.svg"}
                            sizeTitle={"text-[22px] xl:text-[50px]"}
                        />
                        <StepCard
                            title={t("jobs.valuesSteplix.valueTwo.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-red"
                            textOne={t("jobs.valuesSteplix.valueTwo.text")}
                            icon={"/assets/img/respect.svg"}
                            sizeTitle={"text-[22px] xl:text-[50px]"}
                        />
                        <StepCard
                            title={t("jobs.valuesSteplix.valueThree.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-yellow"
                            textOne={t("jobs.valuesSteplix.valueThree.text")}
                            sizeTitle={"text-[22px] xl:text-[50px]"}
                            icon={"/assets/img/success.svg"}
                        />{" "}
                        <StepCard
                            title={t("jobs.valuesSteplix.valueFour.title")}
                            colorTitle="font-semibold text-white"
                            colorLine="bg-steplix-red"
                            textOne={t("jobs.valuesSteplix.valueFour.text")}
                            sizeTitle={"text-[22px] xl:text-[50px]"}
                            icon={"/assets/img/agil.svg"}
                        />
                        <StepCard
                            title={t("jobs.valuesSteplix.valueFive.title")}
                            colorTitle="font-semibold text-white"
                            textOne={t("jobs.valuesSteplix.valueFive.text")}
                            colorLine="bg-steplix-blue"
                            sizeTitle={"text-[22px] xl:text-[50px]"}
                            icon={"/assets/img/conscience.svg"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobItemCard;
