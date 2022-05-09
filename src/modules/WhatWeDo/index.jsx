import React, { useState } from "react";
import { useTranslation } from "next-export-i18n";
import Modal from "@/common/components/Modal";
import StepCard from "@/common/components/StepCard";
import Fade from "react-reveal/Fade";

const WhatWeDo = () => {
    const { t } = useTranslation();

    //
    // State
    //
    const [positionModal, setPositionModal] = useState(1);
    const [isModalOpen, setisModalOpen] = useState(false);

    let subDescription,
        title,
        textOne,
        textTwo,
        textThree,
        textFour,
        borderColor,
        bgColor,
        textColor,
        bgLine,
        number;

    if (positionModal === 1) {
        subDescription = t("modal.modalOne.descriptionTwo");
        title = t("modal.modalOne.title");
        textOne = t("modal.modalOne.descriptionOne.textOne");
        textTwo = t("modal.modalOne.descriptionOne.textTwo");
        textThree = t("modal.modalOne.descriptionOne.textThree");
        textFour = t("modal.modalOne.descriptionOne.textFour");
        bgColor = "bg-blue";
        bgLine = "bg-yellow";
        textColor = "text-white";
        borderColor = "border-blue";
        number = 1;
    }
    if (positionModal === 2) {
        subDescription = t("modal.modalTwo.descriptionTwo");
        title = t("modal.modalTwo.title");
        textOne = t("modal.modalTwo.descriptionOne.textOne");
        textTwo = t("modal.modalTwo.descriptionOne.textTwo");
        textThree = t("modal.modalTwo.descriptionOne.textThree");
        textFour = t("modal.modalTwo.descriptionOne.textFour");
        textColor = "text-white";
        bgLine = "bg-yellow";
        bgColor = "bg-red";
        borderColor = "border-red";
        number = 2;
    }
    if (positionModal === 3) {
        subDescription = t("modal.modalThree.descriptionTwo");
        title = t("modal.modalThree.title");
        textOne = t("modal.modalThree.descriptionOne.textOne");
        textTwo = t("modal.modalThree.descriptionOne.textTwo");
        textThree = t("modal.modalThree.descriptionOne.textThree");
        textFour = t("modal.modalThree.descriptionOne.textFour");
        bgLine = "bg-blue";
        textColor = "text-black";
        bgColor = "bg-yellow";
        borderColor = "border-yellow";
        number = 3;
    }

    return (
        <div className="container px-5 md:px-0" id="what-we-do">
            <Fade cascade>
                <Modal
                    isModalOpen={isModalOpen}
                    setisModalOpen={setisModalOpen}
                    borderColor={borderColor}
                    bgColor={bgColor}
                    bgLine={bgLine}
                    textColor={textColor}
                    subDescription={subDescription}
                    setPositionModal={setPositionModal}
                    positionModal={positionModal}
                >
                    <div className="xl:px-6 xl:py-4 py-2">
                        <StepCard
                            textLeft
                            number={`0${number}.`}
                            numberStyles="xl:mt-1"
                            title={title}
                            colorTitle="font-semibold text-yellow"
                            colorLine="bg-red"
                            textOne={textOne}
                            textTwo={textTwo}
                            textThree={textThree}
                            textFour={textFour}
                            sizeTitle="text-[22px] xl:text-[50px]"
                            sizeText="text-[16px] xl:text-[20px]"
                        />
                    </div>
                </Modal>

                <h3 className="mb-3.5 xl:mb-2.5 font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                    <span>{t("whatWeDo.title")} </span>
                    <span className="text--outlined">
                        {t("whatWeDo.emptyTitle")}
                    </span>
                </h3>
                <div className="flex flex-col mb-12 xl:mb-36 paragraph">
                    <p>{t("whatWeDo.subtitlePartOne")}</p>
                    <br />
                    <p>{t("whatWeDo.subtitlePartTwo")}</p>
                </div>
                <div className="steplix-process grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-0">
                    <div className="w-[350px] md:w-[551px] lg:w-[823px] xl:w-[320px] row-span-2 xl:relative xl:col-start-3">
                        <div className="hidden xl:block">
                            <StepCard
                                number="03."
                                title={t("whatWeDo.cardThree.title")}
                                sizeTitle="text-2xl md:text-3xl lg:text-5xl font-semibold xl:font-normal w-40 lg:w-64"
                                colorTitle="text-yellow"
                                colorLine="bg-red"
                                textOne={t("whatWeDo.cardThree.description")}
                            />
                        </div>
                        <div className="block xl:hidden">
                            <StepCard
                                number="01."
                                title={t("whatWeDo.cardOne.title")}
                                sizeTitle="text-2xl md:text-3xl lg:text-5xl font-semibold xl:font-normal w-40 lg:w-64"
                                colorTitle="text-yellow"
                                colorLine="bg-red"
                                textOne={t("whatWeDo.cardOne.description")}
                            />
                        </div>
                        <div className="xl:absolute xl:top-[10px] right-[330px]">
                            <div className="xl:bg-white xl:h-[1px] xl:w-24 2xl:w-[118px] xl:relative xl:top-[6px]" />
                            <div className="xl:h-3 xl:w-3 xl:shadow--gray xl:bg-white xl:rounded-full xl:absolute xl:left-0" />
                        </div>
                    </div>
                    <div className="w-[350px] md:w-[551px] lg:w-[823px] xl:w-[320px] xl:col-start-2 row-span-2  xl:relative">
                        <StepCard
                            number="02."
                            title={t("whatWeDo.cardTwo.title")}
                            sizeTitle="text-2xl md:text-3xl lg:text-5xl font-semibold xl:font-normal w-40 lg:w-64"
                            colorTitle="text-yellow"
                            colorLine="bg-red"
                            textOne={t("whatWeDo.cardTwo.description")}
                        />
                        <div className="xl:absolute xl:top-[20px] 2xl:top-[45px] xl:left-[325px] 2xl:left-[280px]">
                            <div className="xl:bg-white xl:h-[1px] xl:w-7 2xl:w-32 xl:relative xl:top-[6px]" />{" "}
                            <div className="xl:h-3 xl:w-3 xl:shadow--gray xl:bg-white xl:rounded-full xl:absolute xl:right-0" />
                        </div>
                    </div>
                    <div className="w-[350px] md:w-[551px] lg:w-[823px] xl:w-[320px] xl:col-start-1 row-span-1 xl:relative">
                        <div className="block xl:hidden">
                            <StepCard
                                number="03."
                                title={t("whatWeDo.cardThree.title")}
                                sizeTitle="text-2xl md:text-3xl lg:text-5xl font-semibold xl:font-normal w-40 lg:w-64"
                                colorTitle="text-yellow"
                                colorLine="bg-red"
                                textOne={t("whatWeDo.cardThree.description")}
                            />
                        </div>
                        <div className="hidden xl:block">
                            <StepCard
                                number="01."
                                title={t("whatWeDo.cardOne.title")}
                                sizeTitle="text-2xl md:text-3xl lg:text-5xl font-semibold xl:font-normal w-40 lg:w-64"
                                colorTitle="text-yellow"
                                colorLine="bg-red"
                                textOne={t("whatWeDo.cardOne.description")}
                            />
                        </div>
                        <div className="xl:absolute xl:top-[70px] 2xl:top-[115px] xl:left-[360px] 2xl:left-[440px]">
                            <div className="xl:bg-white xl:h-[1px] xl:w-16 xl:relative xl:top-[6px]" />{" "}
                            <div className="xl:h-3 xl:w-3 xl:shadow--gray xl:bg-white xl:rounded-full xl:absolute xl:right-0" />
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default WhatWeDo;
