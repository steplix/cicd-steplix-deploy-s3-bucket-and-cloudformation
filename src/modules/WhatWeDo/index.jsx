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
        <div className="section-steplix" id="process">
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
            <h2 className="text-[30px] font-semibold">{t("whatWeDo.title")}</h2>
            <div className="text-sm font-light flex flex-col lg:mb-0 mb-12">
                <p>{`${t("whatWeDo.subtitlePartOne")} ${t(
                    "whatWeDo.subtitlePartTwo"
                )}`}</p>
            </div>
            <div className="steplix-process grid lg:grid-cols-3 grid-cols-1 lg:gap-0 gap-7">
                <div className="lg:col-start-3">
                    <StepCard
                        number="01."
                        title={t("whatWeDo.cardOne.title")}
                        colorTitle="text-steplix-yellow"
                        colorLine="bg-steplix-red"
                        seeMore={t("seeMore")}
                        textOne={t("whatWeDo.cardOne.description")}
                        setisModalOpen={setisModalOpen}
                        setPositionModal={setPositionModal}
                    />
                </div>
                <div className="lg:col-start-2">
                    <StepCard
                        number="02."
                        title={t("whatWeDo.cardTwo.title")}
                        colorTitle="text-steplix-yellow"
                        colorLine="bg-steplix-red"
                        seeMore={t("seeMore")}
                        textOne={t("whatWeDo.cardTwo.description")}
                        setisModalOpen={setisModalOpen}
                        setPositionModal={setPositionModal}
                    />
                </div>
                <div className="lg:col-start-1">
                    <StepCard
                        number="03."
                        title={t("whatWeDo.cardThree.title")}
                        colorTitle="text-steplix-yellow"
                        colorLine="bg-steplix-red"
                        seeMore={t("seeMore")}
                        textOne={t("whatWeDo.cardThree.description")}
                        setisModalOpen={setisModalOpen}
                        setPositionModal={setPositionModal}
                    />
                </div>
            </div>
            <div className="lg:text-base text-sm text-steplix-yellow underline decoration-2 hidden lg:block text-center mt-16">
                <Link href={{ pathname: "/process", query: query }}>
                    <a>{t("seeMore")}</a>
                </Link>
            </div>
        </div>
    );
};

export default WhatWeDo;
