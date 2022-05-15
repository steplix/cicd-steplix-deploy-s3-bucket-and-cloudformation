/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonApply from "../ButtonApply";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import FeatureCard from "@/common/components/FeatureCard";
import Link from "next/link";
import Fade from "react-reveal/Fade";

const JobItemCard = ({ item }) => {
    const [query] = useLanguageQuery();
    const { t } = useTranslation();

    return (
        <div className="container px-5 md:px-0 xl:max-w-[960px] 2xl:max-w-[1140px]">
            <Fade cascade>
                {/* section job description */}
                <section>
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
                            {item?.responsibilities?.items.map(
                                (element, index) => (
                                    <li key={index}>{element}</li>
                                )
                            )}
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
                </section>

                {/* section apply */}
                <section>
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
                                    <img
                                        src="/assets/img/email.svg"
                                        alt="email"
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* section values steplix */}
                <section className="pb-20">
                    <h2 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl mb-[40px] xl:mb-[85px]">
                        {t("jobs.valuesSteplix.title")}
                        <span className="text--outlined">
                            {t("jobs.valuesSteplix.titleEmpty")}
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 2xl:gap-y-16 xl:gap-x-10 2xl:gap-x-16">
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueOne.title")}
                            description={t("jobs.valuesSteplix.valueOne.text")}
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                            divideColor="bg-blue"
                            rightImage="/assets/img/trust.svg"
                            sizeRightImage="w-[66px] h-[30px] md:w-[84px] md:h-[38px] lg:w-[102px] lg:h-[46px] xl:w-[84px] xl:h-[38px] 2xl:w-[102px] 2xl:h-[46px]"
                        />
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueTwo.title")}
                            description={t("jobs.valuesSteplix.valueTwo.text")}
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                            divideColor="bg-red"
                            rightImage="/assets/img/respect.svg"
                            sizeRightImage="w-[50px] h-[40px] md:w-[59px] md:h-[48px] lg:w-[73px] lg:h-[59px] xl:w-[59px] xl:h-[48px] 2xl:w-[73px] 2xl:h-[59px]"
                        />
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueThree.title")}
                            description={t(
                                "jobs.valuesSteplix.valueThree.text"
                            )}
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                            divideColor="bg-yellow"
                            rightImage="/assets/img/success.svg"
                            sizeRightImage="w-[44px] h-[50px] md:w-[54px] md:h-[61px] lg:w-[71px] lg:h-[80px] xl:w-[54px] xl:h-[61px] 2xl:w-[71px] 2xl:h-[80px]"
                        />
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueFour.title")}
                            description={t("jobs.valuesSteplix.valueFour.text")}
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                            divideColor="bg-red"
                            rightImage="/assets/img/agil.svg"
                            sizeRightImage="w-[43px] h-[30px] md:w-[62px] md:h-[43px] lg:w-[81px] lg:h-[56px] xl:w-[62px] xl:h-[43px] 2xl:w-[81px] 2xl:h-[56px]"
                        />
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueFive.title")}
                            description={t("jobs.valuesSteplix.valueFive.text")}
                            widthDescription="xl:w-[305px] 2xl:w-[365px]"
                            divideColor="bg-blue"
                            rightImage="/assets/img/conscience.svg"
                            sizeRightImage="w-[36px] h-[40px] md:w-[53px] md:h-[58px] 2xl:w-[62px] 2xl:h-[68px]"
                        />
                    </div>
                </section>
            </Fade>
        </div>
    );
};

export default JobItemCard;
