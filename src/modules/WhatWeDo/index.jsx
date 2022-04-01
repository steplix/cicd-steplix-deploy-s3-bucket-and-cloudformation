import React, { useState } from "react";
import Link from "next/link";
import { useTranslation, useLanguageQuery } from "next-export-i18n";
import Modal from "@/common/components/Modal";
import StepCard from "@/common/components/StepCard";

const WhatWeDo = () => {
    const { t } = useTranslation();
    const [query] = useLanguageQuery();
    //
    // State
    //
    const [positionModal, setPositionModal] = useState(1);
    const [isModalOpen, setisModalOpen] = useState(false);

    let subDescription,
        title,
        text,
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
        <div className="lg:w-[1230px] w-[345px] steplix-process">
            <Modal
                isModalOpen={isModalOpen}
                setisModalOpen={setisModalOpen}
                borderColor={borderColor}
                subDescription={subDescription}
                setPositionModal={setPositionModal}
                positionModal={positionModal}
            >
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
            </Modal>
            <div
                className="text-white w-[290px] lg:w-[1300px] "
                id="what-we-do"
            >
                <h2 className="text-[24px] lg:text-[54px]">
                    {t("whatWeDo.title")}
                </h2>
                <div className="lg:w-[800px] w-[250px] lg:text-2xl text-xs mb-5 mt-3">
                    <p className="mb-3">{t("whatWeDo.subtitlePartOne")}</p>
                    <p>{t("whatWeDo.subtitlePartTwo")} </p>
                </div>

                <div className="space-y-5 lg:space-y-1 lg:grid lg:grid-rows-4 lg:grid-flow-col">
                    <div className="w-[250px] lg:w-[470px] lg:row-start-3 lg:row-span-2">
                        <StepCard
                            number="01."
                            title={t("whatWeDo.cardOne.title")}
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore={t("seeMore")}
                            textOne={t("whatWeDo.cardOne.description")}
                            setisModalOpen={setisModalOpen}
                            setPositionModal={setPositionModal}
                        />
                    </div>
                    <div className="w-[250px] lg:w-[470px] lg:row-start-2 lg:row-span-3">
                        <StepCard
                            number="02."
                            title={t("whatWeDo.cardTwo.title")}
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore={t("seeMore")}
                            textOne={t("whatWeDo.cardTwo.description")}
                            setisModalOpen={setisModalOpen}
                            setPositionModal={setPositionModal}
                        />
                    </div>
                    <div className="w-[250px] lg:w-[470px] lg:row-start-1 lg:row-span-4">
                        <StepCard
                            number="03."
                            title={t("whatWeDo.cardThree.title")}
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore={t("seeMore")}
                            textOne={t("whatWeDo.cardThree.description")}
                            setisModalOpen={setisModalOpen}
                            setPositionModal={setPositionModal}
                        />
                    </div>
                </div>
                <div className="lg:text-2xl text-sm text-steplix-yellow underline decoration-2 hidden lg:block text-center mt-16">
                    <Link href={{ pathname: "/process", query: query }}>
                        <a>{t("seeMore")}</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
