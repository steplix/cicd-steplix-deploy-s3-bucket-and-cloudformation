import React from "react";
import { useTranslation } from "next-export-i18n";
import ImageFeatureCard from "@/common/components/ImageFeatureCard";
import Fade from "react-reveal/Fade";
import HeadTag from "@/common/components/HeadTag";

const Stack = () => {
    const { t } = useTranslation();

    return (
        <>
            <HeadTag title={t("metaTags.stack.title")} description={t("metaTags.stack.description")} keywords={t("metaTags.stack.keywords")} />
            <div className="relative">
                <div className="bg--stack flex flex-col space-y-20">
                    <section className="container px-5 md:px-0 pt-28 xl:pr-24">
                        <Fade cascade>
                            <div className="mb-8">
                                <h1 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl w-5 md:w-full mb-6">
                                    {t("stack.sectionOne.title")}
                                    <span className="text--outlined">
                                        {t("stack.sectionOne.titleEmpty")}
                                    </span>
                                </h1>
                                <p className="paragraph md:w-[735px] lg:w-[931px] xl:w-[1000px]">
                                    {t("stack.sectionOne.description")} 👇
                                </p>
                            </div>
                        </Fade>
                        <Fade cascade>
                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-y-10 md:gap-y-12 xl:gap-y-10 xl:gap-x-12">
                                <ImageFeatureCard
                                    image="/assets/img/stack/react.svg"
                                    imageAlt="react"
                                    imageSize="w-[136px] h-[46px] xl:w-[131px] xl:h-[44px]"
                                    description={t("stack.cards.react")}
                                    divideColor="bg-yellow"
                                />
                                <ImageFeatureCard
                                    image="/assets/img/stack/git.svg"
                                    imageAlt="git"
                                    imageSize="w-[102px] h-[42px] xl:w-[98px] xl:h-[41px]"
                                    description={t("stack.cards.git")}
                                    divideColor="bg-red"
                                />
                                <ImageFeatureCard
                                    image="/assets/img/stack/docker.svg"
                                    imageAlt="docker"
                                    imageSize="w-[174px] h-[44px] xl:w-[167px] xl:h-[42px]"
                                    description={t("stack.cards.docker")}
                                    divideColor="bg-blue"
                                />
                                <ImageFeatureCard
                                    image="/assets/img/stack/next.svg"
                                    imageAlt="next"
                                    imageSize="w-[100px] h-[60px] md:w-[110px] md:h-[66px] xl:w-[98px] xl:h-[59px]"
                                    description={t("stack.cards.next")}
                                    divideColor="bg-yellow"
                                />
                                <ImageFeatureCard
                                    image="/assets/img/stack/flutter.svg"
                                    imageAlt="flutter"
                                    imageSize="w-[146px] h-[42px] xl:w-[130px] xl:h-[37px]"
                                    description={t("stack.cards.flutter")}
                                    divideColor="bg-red"
                                />
                                <ImageFeatureCard
                                    image="/assets/img/stack/aws.svg"
                                    imageAlt="aws"
                                    imageSize="w-[83px] h-[49px] xl:w-[74px] xl:h-[44px]"
                                    description={t("stack.cards.aws")}
                                    divideColor="bg-blue"
                                />
                                <ImageFeatureCard
                                    image="/assets/img/stack/figma.svg"
                                    imageAlt="figma"
                                    imageSize="w-[45px] h-[67px] xl:w-[39px] xl:h-[59px]"
                                    description={t("stack.cards.figma")}
                                    divideColor="bg-yellow"
                                />
                                <ImageFeatureCard
                                    image="/assets/img/stack/kotlin.svg"
                                    imageAlt="kotlin"
                                    imageSize="w-[153px] h-[34px]"
                                    description={t("stack.cards.kotlin")}
                                    divideColor="bg-red"
                                />
                                <ImageFeatureCard
                                    image="/assets/img/stack/node.svg"
                                    imageAlt="node"
                                    imageSize="w-[94px] h-[58px] xl:w-[99px] xl:h-[61px]"
                                    description={t("stack.cards.node")}
                                    divideColor="bg-blue"
                                />
                            </div>
                        </Fade>
                    </section>
                    <Fade cascade>
                        <section className="container px-5 md:px-0 xl:pr-24 pb-[53px] md:pb-[106px] lg:pb-[196px] xl:pb-[142px]">
                            <div className="flex flex-col items-center space-y-4">
                                <h2 className="text-center md:text-left font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl mb-6 md:mb-8 lg:mb-10 xl:mb-8 w-[190px] md:w-full">
                                    {t("stack.sectionTwo.title")}
                                    <span className="text--outlined">
                                        {t("stack.sectionTwo.titleEmpty")}
                                    </span>
                                </h2>
                                <p className="paragraph text-center md:w-[735px] lg:w-[931px] xl:w-[1000px]">
                                    HTML • CSS • SASS • Typescript • JQuery •
                                    Angular Js • Angular • ReactJs • NextJs •
                                    Bootstrap • Material • Foundation • Tailwind
                                    • NodeJs • PHP • Java • Python • Ruby • C •
                                    C++ • C# • GO • ASP.NET • Express • Ember •
                                    Laravel • Symfony • CakePHP • Django •
                                    Spring • Struts • Ruby on Rails • MySQL •
                                    Mariadb • SQL • Sqlite • DynamoDB •
                                    PostgreSQL • DB2 • HSQLDB • Redis • MongoDB
                                    • ElastiCache • Elasticsearch • Cordova •
                                    Ionic • Flutter • Kotlin • Objective-C •
                                    Swift • Git • SVN • Gitlab • Github •
                                    Bitbucket • Vagrant • Docker • Kubernetes •
                                    Linux • Windows • AWS • Azure • Firebase •
                                    WordPress • Ghost • Drupal
                                </p>
                            </div>
                        </section>
                    </Fade>
                </div>

            </div>
        </>
    );
};

export default Stack;
