import React from "react";
import Flags from "@/common/components/Flags";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const Stack = () => {
    const { t } = useTranslation();

    return (
        <div className="relative">
            <div className="bg--stack ">
                <section className="container-steplix section-steplix">
                    <div className="mt-[128px] mb-8 2xl:mb-12 ">
                        <h1 className="h2-steplix w-5 md:w-full 2xl:mt-16 mb-6 2xl:mb-8">
                            {t("stack.sectionOne.title")}
                            <span className="title-empty">
                                {t("stack.sectionOne.titleEmpty")}
                            </span>
                        </h1>
                        <p className="p-steplix md:w-[735px] lg:w-[931px] xl:w-[1000px] 2xl:w-[1160px]">
                            {t("stack.sectionOne.description")}
                        </p>
                    </div>
                    <div className="grid xl:grid-cols-3 lg:flex-row gap-y-5 lg:gap-x-1 2xl:gap-y-10 mb-12 2xl:w-[1200px] ">
                        <div className="xl:w-[320px] 2xl:w-[362px]">
                            <StepCard
                                widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                iconStyles="pl-0 w-[55px] h-[33px] lg:w-[71px] lg:h-[42px] xl:w-[66px] xl:h-[71px] 2xl:w-[66px] 2xl:h-[42px]"
                                colorTitle="font-semibold text-white"
                                colorLine="bg-steplix-yellow"
                                textOne={t("stack.cards.cardOne")}
                                icon={"/assets/img/stack/aws.svg"}
                                sizeTitle={"text-[22px] xl:text-[50px]"}
                            />
                        </div>
                        <div className="2xl:w-[362px]">
                            <StepCard
                                widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                iconStyles="pl-0 w-[58px] h-[23px] md:w-[81px] md:h-[33px] lg:w-[102px] lg:h-[42px] xl:w-[81px] xl:h-[33px] 2xl:w-[102px] 2xl:h-[61px]"
                                colorTitle="font-semibold text-white"
                                colorLine="bg-steplix-red"
                                textOne={t("stack.cards.cardTwo")}
                                icon={"/assets/img/stack/git.svg"}
                                sizeTitle={"text-[22px] xl:text-[50px]"}
                            />
                        </div>

                        <div className="2xl:w-[362px]">
                            <StepCard
                                widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                iconStyles="pl-0 w-[89px] h-[23px] md:w-[126px] md:h-[33px] lg:w-[174px] lg:h-[44px] xl:w-[144px] xl:h-[36px] 2xl:w-[174px] 2xl:h-[44px]"
                                colorTitle="font-semibold text-white"
                                colorLine="bg-steplix-blue"
                                textOne={t("stack.cards.cardThree")}
                                sizeTitle={"text-[22px] xl:text-[50px]"}
                                icon={"/assets/img/stack/docker.svg"}
                            />{" "}
                        </div>

                        <div className="2xl:w-[362px]">
                            <StepCard
                                widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                iconStyles="pl-0 w-[89px] h-[18px] md:w-[109px] md:h-[24px] lg:w-[153px] lg:h-[34px] xl:w-[144px] xl:h-[32px] 2xl:w-[153px] 2xl:h-[34px]"
                                colorTitle="font-semibold text-white"
                                colorLine="bg-steplix-yellow"
                                textOne={t("stack.cards.cardFour")}
                                sizeTitle={"text-[22px] xl:text-[50px]"}
                                icon={"/assets/img/stack/kotlin.svg"}
                            />
                        </div>

                        <div className="2xl:w-[362px]">
                            <StepCard
                                widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                iconStyles="pl-0 w-[89px] h-[23px] md:w-[107px] md:h-[31px] lg:w-[146px] lg:h-[42px] xl:w-[132px] xl:h-[39px] 2xl:w-[146px] 2xl:h-[42px]"
                                colorTitle="font-semibold text-white"
                                textOne={t("stack.cards.cardFive")}
                                colorLine="bg-steplix-red"
                                sizeTitle={"text-[22px] xl:text-[50px]"}
                                icon={"/assets/img/stack/flutter.svg"}
                            />{" "}
                        </div>

                        <div className="2xl:w-[362px]">
                            <StepCard
                                widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                iconStyles="pl-0 w-[82px] h-[28px] md:w-[102px] md:h-[34px] lg:w-[136px] lg:h-[46px] xl:w-[108px] xl:h-[37px] 2xl:w-[136px] 2xl:h-[46px]"
                                colorTitle="font-semibold text-white"
                                textOne={t("stack.cards.cardSix")}
                                colorLine="bg-steplix-blue"
                                sizeTitle={"text-[22px] xl:text-[50px]"}
                                icon={"/assets/img/stack/react.svg"}
                            />{" "}
                        </div>

                        <div className="2xl:w-[362px]">
                            <StepCard
                                widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                iconStyles="pl-0 w-[67px] h-[41px] md:w-[78px] md:h-[48px] lg:w-[94px] lg:h-[56px] xl:w-[88px] xl:h-[54px] 2xl:w-[94px] 2xl:h-[58px]"
                                colorTitle="font-semibold text-white"
                                textOne={t("stack.cards.cardSeven")}
                                colorLine="bg-steplix-yellow"
                                sizeTitle={"text-[22px] xl:text-[50px]"}
                                icon={"/assets/img/stack/node.svg"}
                            />
                        </div>
                    </div>
                </section>
                <section className="container-steplix section-steplix pb-[53px] md:pb-[106px] lg:pb-[196px] xl:pb-[142px] 2xl:pb-[150px]">
                    <h2 className="h2-steplix w-10 md:w-full mb-6 md:mb-8 lg:mb-10 xl:mb-8 2xl:mb-10">
                        {t("stack.sectionOne.title")}
                        <span className="title-empty">
                            {" "}
                            {t("stack.sectionOne.titleEmpty")}
                        </span>
                    </h2>
                    <p className="p-steplix text-center md:w-[735px] lg:w-[931px] xl:w-[1000px] 2xl:w-[1160px]">
                        HTML • CSS • SASS • Typescript • JQuery • Angular Js •
                        Angular • ReactJs • NextJs • Bootstrap • Material •
                        Foundation • Tailwind • NodeJs • PHP • Java • Python •
                        Ruby • C • C++ • C# • GO • ASP.NET • Express • Ember •
                        Laravel • Symfony • CakePHP • Django • Spring • Struts •
                        Ruby on Rails • MySQL • Mariadb • SQL • Sqlite •
                        DynamoDB • PostgreSQL • DB2 • HSQLDB • redis • mongoDB •
                        ElastiCache • elasticSearch • Cordova • Ionic • Flutter
                        • Kotlin • Java • Objective-C • Swift • git • svn •
                        Gitlab • Github • Bitbucket • Vagrant • Docker •
                        Kubernetes • Linux • Windows • AWS • Azure • Firebase •
                        WordPress • ghost • Drupal
                    </p>
                </section>
            </div>

            <Flags />
        </div>
    );
};

export default Stack;
