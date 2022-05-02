/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonApply from "../ButtonApply";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import StepCard from "../StepCard";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const JobItemCard = ({ item }) => {
    const [query] = useLanguageQuery();
    const { t } = useTranslation();

    return (
        <div className="container px-5 xl:px-0 xl:max-w-[960px] 2xl:max-w-[1140px]">
            <Fade cascade>
                <div className="mt-[140px] xl:mt-[190px]">
                    <h1 className="text-center font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                        {item?.title}{" "}
                        <span className="text--outlined">
                            {" "}
                            {item?.titleEmpty}{" "}
                        </span>
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
                    <p className="paragraph">{item?.description}</p>
                </div>
                <div>
                    <p className="text-2xl xl:text-[32px] font-bold xl:mt-[60px] mt-[50px] mb-7">
                        {item?.values?.title}
                    </p>
                    <p className="paragraph">{item?.values?.textOne}</p>
                    <p className="paragraph">{item?.values?.textTwo}</p>
                </div>

                <div>
                    <p className="text-2xl xl:text-[32px] font-bold mt-[70px] mb-7">
                        {item?.requirements?.title}
                    </p>
                    <ul className="list-disc mb-[70px] paragraph ml-5 lg:ml-9">
                        {item?.requirements?.items.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-2xl xl:text-[32px] font-bold mt-[70px] mb-7">
                        {item?.responsibilities?.title}
                    </p>
                    <p className="paragraph mt-10">
                        {item?.responsibilities?.subtitle}
                    </p>
                    <ul className="list-disc mb-[70px] paragraph ml-5 lg:ml-9">
                        {item?.responsibilities?.items.map((element, index) => (
                            <li key={index}>{element}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <p className="text-2xl xl:text-[32px] font-bold mt-[70px]  xl:mb-7">
                        {item?.Benefits?.title}
                    </p>
                    <div className="paragraph space-y-6">
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
                    <p className="text-2xl xl:text-[32px] font-bold">
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
                <div className="xl:mt-[70px] mt-[60px] xl:mb-[170px] mb-[70px] xl:w-[662px] w-[332px] xl:h-[167px] h-[84px] flex items-center border-2 border-red rounded-2xl">
                    <div className="xl:h-[100px] h-[50px] w-[50px] xl:w-[100px] xl:ml-[70px] ml-[10px]">
                        <img src="/assets/img/rrhh.svg" alt="rrhh" />
                    </div>
                    <div className="xl:w-[5px] w-[2px] xl:h-[80px] h-[40px] bg-red xl:mx-[30px] mx-[12px]" />
                    <div className="xl:space-y-2">
                        {" "}
                        <p className="font-bold xl:text-[32px] text-[22px]">
                            Josefina Salimei
                        </p>
                        <p className="paragraph">{t("jobs.hr")}</p>
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
                <div className="pb-20">
                    <h2 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl mb-[40px] xl:mb-[85px]">
                        {t("jobs.valuesSteplix.title")}
                        <span className="text--outlined">
                            {t("jobs.valuesSteplix.titleEmpty")}
                        </span>
                    </h2>
                    <div>
                        <div className="grid xl:grid-cols-3 lg:flex-row gap-10 lg:gap-27">
                            <StepCard
                                title={t("jobs.valuesSteplix.valueOne.title")}
                                colorTitle="font-semibold text-white"
                                colorLine="bg-blue"
                                textOne={t("jobs.valuesSteplix.valueOne.text")}
                                icon={"/assets/img/trust.svg"}
                                sizeTitle={"text-2xl md:text-3xl lg:text-5xl"}
                            />
                            <StepCard
                                title={t("jobs.valuesSteplix.valueTwo.title")}
                                colorTitle="font-semibold text-white"
                                colorLine="bg-red"
                                textOne={t("jobs.valuesSteplix.valueTwo.text")}
                                icon={"/assets/img/respect.svg"}
                                sizeTitle={"text-2xl md:text-3xl lg:text-5xl"}
                            />
                            <StepCard
                                title={t("jobs.valuesSteplix.valueThree.title")}
                                colorTitle="font-semibold text-white"
                                colorLine="bg-yellow"
                                textOne={t(
                                    "jobs.valuesSteplix.valueThree.text"
                                )}
                                sizeTitle={"text-2xl md:text-3xl lg:text-5xl"}
                                icon={"/assets/img/success.svg"}
                            />{" "}
                            <StepCard
                                title={t("jobs.valuesSteplix.valueFour.title")}
                                colorTitle="font-semibold text-white"
                                colorLine="bg-red"
                                textOne={t("jobs.valuesSteplix.valueFour.text")}
                                sizeTitle={"text-2xl md:text-3xl lg:text-5xl"}
                                icon={"/assets/img/agil.svg"}
                            />
                            <StepCard
                                title={t("jobs.valuesSteplix.valueFive.title")}
                                colorTitle="font-semibold text-white"
                                textOne={t("jobs.valuesSteplix.valueFive.text")}
                                colorLine="bg-blue"
                                sizeTitle={"text-2xl md:text-3xl lg:text-5xl"}
                                icon={"/assets/img/conscience.svg"}
                            />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default JobItemCard;
