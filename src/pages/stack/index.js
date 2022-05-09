import React from "react";
import Head from "next/head";
import Flags from "@/common/components/Flags";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";
import Fade from "react-reveal/Fade";

const Stack = () => {
    const { t } = useTranslation();

    return (
        <>
            <Head>
                {/* HTML Meta Tags */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="robots" content="index, follow" />
                <link rel="icon" href="/favicon.png" />
                <title>{t("metaTags.stack.title")}</title>
                <meta
                    name="description"
                    content={t("metaTags.stack.description")}
                />
                <meta name="keywords" content={t("metaTags.stack.keywords")} />
                {/* Facebook Meta Tags */}
                <meta property="og:title" content={t("metaTags.stack.title")} />
                <meta
                    property="og:description"
                    content={t("metaTags.stack.description")}
                />
                <meta property="og:url" content="https://steplix.com/stack/" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:image"
                    content="https://steplix.com/assets/img/logo.png"
                />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="54" />
                <meta property="og:image:alt" content="Steplix Logo" />
                {/* Twitter Meta Tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="steplix.com" />
                <meta
                    property="twitter:url"
                    content="https://steplix.com/stack/"
                />
                <meta
                    name="twitter:title"
                    content={t("metaTags.stack.title")}
                />
                <meta
                    name="twitter:description"
                    content={t("metaTags.stack.description")}
                />
                <meta
                    name="twitter:image"
                    content="https://steplix.com/assets/img/logo.png"
                />
            </Head>
            <div className="relative">
                <div className="bg--stack">
                    <section className="container px-5 md:px-0 xl:pr-24">
                        <Fade cascade>
                            <div className="pt-[128px] mb-8 2xl:mb-12 ">
                                <h1 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl w-5 md:w-full 2xl:mt-16 mb-6 2xl:mb-8">
                                    {t("stack.sectionOne.title")}
                                    <span className="text--outlined">
                                        {t("stack.sectionOne.titleEmpty")}
                                    </span>
                                </h1>
                                <p className="paragraph md:w-[735px] lg:w-[931px] xl:w-[1000px] 2xl:w-[1160px]">
                                    {t("stack.sectionOne.description")} 👇
                                </p>
                            </div>
                        </Fade>
                        <Fade cascade>
                            <div className="grid xl:grid-cols-3 lg:flex-row gap-y-5 lg:gap-x-1 2xl:gap-y-10 mb-12 2xl:w-[1200px] ">
                                <div className="2xl:w-[362px]">
                                    <StepCard
                                        widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                        iconStyles="pl-0 w-[82px] h-[28px] md:w-[102px] md:h-[34px] lg:w-[136px] lg:h-[46px] xl:w-[108px] xl:h-[37px] 2xl:w-[136px] 2xl:h-[46px]"
                                        colorTitle="font-semibold text-white"
                                        textOne={t("stack.cards.react")}
                                        colorLine="bg-yellow"
                                        sizeTitle={"text-[22px] xl:text-[50px]"}
                                        icon={"/assets/img/stack/react.svg"}
                                    />
                                </div>
                                <div className="2xl:w-[362px]">
                                    <StepCard
                                        widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                        iconStyles="pl-0 w-[58px] h-[23px] md:w-[81px] md:h-[33px] lg:w-[102px] lg:h-[42px] xl:w-[81px] xl:h-[33px] 2xl:w-[102px] 2xl:h-[61px]"
                                        colorTitle="font-semibold text-white"
                                        colorLine="bg-red"
                                        textOne={t("stack.cards.git")}
                                        icon={"/assets/img/stack/git.svg"}
                                        sizeTitle={"text-[22px] xl:text-[50px]"}
                                    />
                                </div>
                                <div className="2xl:w-[362px]">
                                    <StepCard
                                        widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                        iconStyles="pl-0 w-[89px] h-[23px] md:w-[126px] md:h-[33px] lg:w-[174px] lg:h-[44px] xl:w-[144px] xl:h-[36px] 2xl:w-[174px] 2xl:h-[44px]"
                                        colorTitle="font-semibold text-white"
                                        colorLine="bg-blue"
                                        textOne={t("stack.cards.docker")}
                                        sizeTitle={"text-[22px] xl:text-[50px]"}
                                        icon={"/assets/img/stack/docker.svg"}
                                    />
                                </div>
                                <div className="2xl:w-[362px]">
                                    <StepCard
                                        widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                        iconStyles="pl-0 w-[67px] h-[41px] md:w-[78px] md:h-[48px] lg:w-[94px] lg:h-[56px] xl:w-[88px] xl:h-[54px] 2xl:w-[94px] 2xl:h-[58px]"
                                        colorTitle="font-semibold text-white"
                                        textOne={t("stack.cards.next")}
                                        colorLine="bg-yellow"
                                        sizeTitle={"text-[22px] xl:text-[50px]"}
                                        icon={"/assets/img/stack/next.svg"}
                                    />
                                </div>
                                <div className="2xl:w-[362px]">
                                    <StepCard
                                        widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                        iconStyles="pl-0 w-[89px] h-[23px] md:w-[107px] md:h-[31px] lg:w-[146px] lg:h-[42px] xl:w-[132px] xl:h-[39px] 2xl:w-[146px] 2xl:h-[42px]"
                                        colorTitle="font-semibold text-white"
                                        textOne={t("stack.cards.flutter")}
                                        colorLine="bg-red"
                                        sizeTitle={"text-[22px] xl:text-[50px]"}
                                        icon={"/assets/img/stack/flutter.svg"}
                                    />
                                </div>
                                <div className="xl:w-[320px] 2xl:w-[362px]">
                                    <StepCard
                                        widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                        iconStyles="pl-0 w-[55px] h-[33px] lg:w-[71px] lg:h-[42px] xl:w-[66px] xl:h-[71px] 2xl:w-[66px] 2xl:h-[42px]"
                                        colorTitle="font-semibold text-white"
                                        colorLine="bg-blue"
                                        textOne={t("stack.cards.aws")}
                                        icon={"/assets/img/stack/aws.svg"}
                                        sizeTitle={"text-[22px] xl:text-[50px]"}
                                    />
                                </div>

                                <div className="2xl:w-[362px]">
                                    <StepCard
                                        widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                        iconStyles="pl-0 w-[55px] h-[37px] md:w-[67px] md:h-[41px] w-[45px] h-[67px] xl:w-[39px] xl:h-[59px] 2xl:w-[45px] 2xl:h-[67px]"
                                        colorTitle="font-semibold text-white"
                                        textOne={t("stack.cards.figma")}
                                        colorLine="bg-yellow"
                                        sizeTitle={"text-[22px] xl:text-[50px]"}
                                        icon={"/assets/img/stack/figma.svg"}
                                    />
                                </div>

                                <div className="2xl:w-[362px]">
                                    <StepCard
                                        widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                        iconStyles="pl-0 w-[89px] h-[18px] md:w-[109px] md:h-[24px] lg:w-[153px] lg:h-[34px] xl:w-[144px] xl:h-[32px] 2xl:w-[153px] 2xl:h-[34px]"
                                        colorTitle="font-semibold text-white"
                                        colorLine="bg-red"
                                        textOne={t("stack.cards.kotlin")}
                                        sizeTitle={"text-[22px] xl:text-[50px]"}
                                        icon={"/assets/img/stack/kotlin.svg"}
                                    />
                                </div>
                                <div className="2xl:w-[362px]">
                                    <StepCard
                                        widthTexts="md:w-[735px] lg:w-[931px] xl:w-[320px] 2xl:w-[362px]"
                                        iconStyles="pl-0 w-[67px] h-[41px] md:w-[78px] md:h-[48px] lg:w-[94px] lg:h-[56px] xl:w-[88px] xl:h-[54px] 2xl:w-[94px] 2xl:h-[58px]"
                                        colorTitle="font-semibold text-white"
                                        textOne={t("stack.cards.node")}
                                        colorLine="bg-blue"
                                        sizeTitle={"text-[22px] xl:text-[50px]"}
                                        icon={"/assets/img/stack/node.svg"}
                                    />
                                </div>
                            </div>
                        </Fade>
                    </section>
                    <Fade cascade>
                        <section className="container px-5 xl:px-0 xl:pr-24 pb-[53px] md:pb-[106px] lg:pb-[196px] xl:pb-[142px] 2xl:pb-[150px]">
                            <h2 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl w-10 md:w-full mb-6 md:mb-8 lg:mb-10 xl:mb-8 2xl:mb-10">
                                {t("stack.sectionTwo.title")}
                                <span className="text--outlined">
                                    {t("stack.sectionTwo.titleEmpty")}
                                </span>
                            </h2>
                            <p className="paragraph text-center md:w-[735px] lg:w-[931px] xl:w-[1000px] 2xl:w-[1160px]">
                                HTML • CSS • SASS • Typescript • JQuery •
                                Angular Js • Angular • ReactJs • NextJs •
                                Bootstrap • Material • Foundation • Tailwind •
                                NodeJs • PHP • Java • Python • Ruby • C • C++ •
                                C# • GO • ASP.NET • Express • Ember • Laravel •
                                Symfony • CakePHP • Django • Spring • Struts •
                                Ruby on Rails • MySQL • Mariadb • SQL • Sqlite •
                                DynamoDB • PostgreSQL • DB2 • HSQLDB • Redis •
                                MongoDB • ElastiCache • Elasticsearch • Cordova
                                • Ionic • Flutter • Kotlin • Objective-C • Swift
                                • Git • SVN • Gitlab • Github • Bitbucket •
                                Vagrant • Docker • Kubernetes • Linux • Windows
                                • AWS • Azure • Firebase • WordPress • Ghost •
                                Drupal
                            </p>
                        </section>
                    </Fade>
                </div>

                <Flags />
            </div>
        </>
    );
};

export default Stack;
