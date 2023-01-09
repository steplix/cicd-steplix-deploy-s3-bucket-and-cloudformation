/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonApply from "../ButtonApply";
import { useTranslation } from "@/common/lib/i18n";
import FeatureCard from "@/common/components/FeatureCard";
import ContactCard from "@/common/components/ContactCard";
import Fade from "react-reveal/Fade";

const JobItemCard = ({ item }) => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 md:px-0 xl:pr-8">
            <Fade cascade>
                {/* section job description */}
                <section>
                    <div className="mt-[140px] xl:mt-[190px]">
                        <h1 className="text-center font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl">
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
                            />
                            <p>{t("jobs.or")}</p>
                            <p>rrhh@steplix.com</p>
                        </div>
                    </div>
                    <div className="mt-[60px] xl:mt-[70px] mb-[70px] xl:mb-[170px]">
                        <ContactCard
                            img="/assets/img/rrhh.svg"
                            alt="rh"
                            job={t("jobs.hr")}
                            name="Josefina Salimei"
                            borderColor="border-red"
                            bgColor="bg-red"
                            icon="/assets/img/email.svg"
                            iconAlt="email"
                            linkCalendary="mailto:rrhh@steplix.com"
                        />
                    </div>
                </section>

                {/* section values steplix */}
                <section className="pb-20">
                    <h2 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl mb-[40px] xl:mb-[85px]">
                        {t("jobs.valuesSteplix.title")}
                        <span className="text--outlined">
                            {t("jobs.valuesSteplix.titleEmpty")}
                        </span>
                    </h2>
                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 xl:gap-x-10">
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueOne.title")}
                            description={t("jobs.valuesSteplix.valueOne.text")}
                            widthDescription="xl:w-[305px]"
                            divideColor="bg-blue"
                            rightImage="/assets/img/trust.svg"
                            altRightImage="trust"
                            sizeRightImage="w-[66px] h-[30px] md:w-[84px] md:h-[38px] lg:w-[102px] lg:h-[46px] xl:w-[84px] xl:h-[38px]]"
                        />
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueTwo.title")}
                            description={t("jobs.valuesSteplix.valueTwo.text")}
                            widthDescription="xl:w-[305px]"
                            divideColor="bg-red"
                            rightImage="/assets/img/respect.svg"
                            altRightImage="respect"
                            sizeRightImage="w-[50px] h-[40px] md:w-[59px] md:h-[48px] lg:w-[73px] lg:h-[59px] xl:w-[59px] xl:h-[48px]"
                        />
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueThree.title")}
                            description={t(
                                "jobs.valuesSteplix.valueThree.text"
                            )}
                            widthDescription="xl:w-[305px]"
                            divideColor="bg-yellow"
                            rightImage="/assets/img/success.svg"
                            altRightImage="success"
                            sizeRightImage="w-[44px] h-[50px] md:w-[54px] md:h-[61px] lg:w-[71px] lg:h-[80px] xl:w-[54px] xl:h-[61px]"
                        />
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueFour.title")}
                            description={t("jobs.valuesSteplix.valueFour.text")}
                            widthDescription="xl:w-[305px]"
                            divideColor="bg-red"
                            rightImage="/assets/img/agil.svg"
                            altRightImage="agil"
                            sizeRightImage="w-[43px] h-[30px] md:w-[62px] md:h-[43px] lg:w-[81px] lg:h-[56px] xl:w-[62px] xl:h-[43px]"
                        />
                        <FeatureCard
                            title={t("jobs.valuesSteplix.valueFive.title")}
                            description={t("jobs.valuesSteplix.valueFive.text")}
                            widthDescription="xl:w-[305px]"
                            divideColor="bg-blue"
                            rightImage="/assets/img/conscience.svg"
                            altRightImage="conscience"
                            sizeRightImage="w-[36px] h-[40px] md:w-[53px] md:h-[58px]"
                        />
                    </div>
                </section>
            </Fade>
        </div>
    );
};

export default JobItemCard;
