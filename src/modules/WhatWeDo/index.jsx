import React, { useState } from "react";
import { useTranslation } from "next-export-i18n";
import Modal from "@/common/components/Modal";
import StepCard from "@/common/components/StepCard";

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
        number;

    if (positionModal === 1) {
        subDescription = t("modal.modalOne.descriptionTwo");
        title = t("modal.modalOne.title");
        textOne = t("modal.modalOne.descriptionOne.textOne");
        textTwo = t("modal.modalOne.descriptionOne.textTwo");
        textThree = t("modal.modalOne.descriptionOne.textThree");
        textFour = t("modal.modalOne.descriptionOne.textFour");

        borderColor = "border-steplix-blue";
        number = 1;
    }
    if (positionModal === 2) {
        subDescription = t("modal.modalTwo.descriptionTwo");
        title = t("modal.modalTwo.title");
        textOne = t("modal.modalTwo.descriptionOne.textOne");
        textTwo = t("modal.modalTwo.descriptionOne.textTwo");
        textThree = t("modal.modalTwo.descriptionOne.textThree");
        textFour = t("modal.modalTwo.descriptionOne.textFour");
        borderColor = "border-steplix-red";
        number = 2;
    }
    if (positionModal === 3) {
        subDescription = t("modal.modalThree.descriptionTwo");
        title = t("modal.modalThree.title");
        textOne = t("modal.modalTwo.descriptionOne.textOne");
        textTwo = t("modal.modalTwo.descriptionOne.textTwo");
        textThree = t("modal.modalTwo.descriptionOne.textThree");
        textFour = t("modal.modalTwo.descriptionOne.textFour");
        borderColor = "border-steplix-yellow";
        number = 3;
    }

    return (
        <div className="section-steplix" id="what-we-do">
            <Modal
                isModalOpen={isModalOpen}
                setisModalOpen={setisModalOpen}
                borderColor={borderColor}
                subDescription={subDescription}
                setPositionModal={setPositionModal}
                positionModal={positionModal}
            >
                <div className="px-6 py-4">
                    <StepCard
                        number={`0${number}.`}
                        title={title}
                        colorTitle="font-semibold text-steplix-yellow"
                        colorLine="bg-steplix-red"
                        textOne={textOne}
                        textTwo={textTwo}
                        textThree={textThree}
                        textFour={textFour}
                    />
                </div>
            </Modal>
            <h3 className="mb-3.5 xl:mb-2.5">
                <span className="h3-steplix h3-steplix--filled">
                    {t("whatWeDo.title")}{" "}
                </span>
                <span className="h3-steplix h3-steplix--outlined">
                    {t("whatWeDo.emptyTitle")}
                </span>
            </h3>
            <div className="flex flex-col mb-12 xl:mb-36">
                <p className="p-steplix">{t("whatWeDo.subtitlePartOne")}</p>
                <p className="p-steplix">{t("whatWeDo.subtitlePartTwo")}</p>
            </div>
            <div className="steplix-process grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-0">
                <div className="w-[350px] row-span-2 xl:relative xl:col-start-3">
                    <div className="hidden xl:block">
                        <StepCard
                            number="03."
                            title={t("whatWeDo.cardThree.title")}
                            sizeTitle="text-xl xl:text-5xl font-semibold xl:font-normal w-40 xl:w-80"
                            colorTitle="text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            textOne={t("whatWeDo.cardThree.description")}
                        />
                    </div>
                    <div className="block xl:hidden">
                        <StepCard
                            number="01."
                            title={t("whatWeDo.cardOne.title")}
                            sizeTitle="text-xl xl:text-5xl font-semibold xl:font-normal w-40 xl:w-80"
                            colorTitle="text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            textOne={t("whatWeDo.cardOne.description")}
                        />
                    </div>
                    <div className="lg:absolute lg:top-[10px] right-[360px]">
                        <div className="lg:bg-white lg:h-[1px] lg:w-24 2xl:w-[118px] lg:relative lg:top-[6px]" />
                        <div className="lg:h-3 lg:w-3 lg:bg-white lg:rounded-full lg:absolute lg:left-0" />
                    </div>
                </div>
                <div className="lg:col-start-2 row-span-2  lg:relative">
                    <StepCard
                        number="02."
                        title={t("whatWeDo.cardTwo.title")}
                        sizeTitle="text-xl xl:text-5xl font-semibold xl:font-normal w-40 xl:w-80"
                        colorTitle="text-steplix-yellow"
                        colorLine="bg-steplix-red"
                        textOne={t("whatWeDo.cardTwo.description")}
                    />
                    <div className="lg:absolute lg:top-[10px] 2xl:top-[45px] lg:left-[327px]">
                        <div className="lg:bg-white lg:h-[1px] lg:w-7 2xl:w-32 lg:relative lg:top-[6px]" />{" "}
                        <div className="lg:h-3 lg:w-3 lg:bg-white lg:rounded-full lg:absolute lg:right-0" />
                    </div>
                </div>
                <div className="lg:col-start-1 row-span-1 lg:relative">
                    <div className="block xl:hidden">
                        <StepCard
                            number="03."
                            title={t("whatWeDo.cardThree.title")}
                            sizeTitle="text-xl xl:text-5xl font-semibold xl:font-normal w-40 xl:w-80"
                            colorTitle="text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            textOne={t("whatWeDo.cardThree.description")}
                        />
                    </div>
                    <div className="hidden xl:block">
                        <StepCard
                            number="01."
                            title={t("whatWeDo.cardOne.title")}
                            sizeTitle="text-xl xl:text-5xl font-semibold xl:font-normal w-40 xl:w-80"
                            colorTitle="text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            textOne={t("whatWeDo.cardOne.description")}
                        />
                    </div>
                    <div className="lg:absolute lg:top-[70px] lg:left-[360px] 2xl:left-[440px]">
                        <div className="lg:bg-white lg:h-[1px] lg:w-16 lg:relative lg:top-[6px]" />{" "}
                        <div className="lg:h-3 lg:w-3 lg:bg-white lg:rounded-full lg:absolute lg:right-0" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
