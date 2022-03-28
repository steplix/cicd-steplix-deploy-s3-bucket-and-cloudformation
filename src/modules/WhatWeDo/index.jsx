import React, { useContext, useState } from "react";
import Card from "@/common/components/Card";
import { LanguageContext } from "@/common/components/LanguageContext";
import Link from "next/link";
import Modal from "@/common/components/Modal";

const WhatWeDo = () => {
    const { texts } = useContext(LanguageContext);
    const [positionModal, setPositionModal] = useState();
    const [isModalOpen, setisModalOpen] = useState([false, positionModal]);

    console.log("positionModal", positionModal);
    console.log(isModalOpen);
    let subDescription, title, text, borderColor, number;
    if (positionModal === 1) {
        subDescription = texts.modal.modalOne.descriptionTwo;
        title = texts.modal.modalOne.title;
        text = texts.modal.modalOne.descriptionOne;
        borderColor = "border-steplix-blue";
        number = 1;
    }
    if (positionModal === 2) {
        subDescription = texts.modal.modalTwo.descriptionTwo;
        title = texts.modal.modalTwo.title;
        text = texts.modal.modalTwo.descriptionOne;
        borderColor = "border-steplix-red";
        number = 2;
    }
    if (positionModal === 3) {
        subDescription = texts.modal.modalThree.descriptionTwo;
        title = texts.modal.modalThree.title;
        text = texts.modal.modalThree.descriptionOne;
        borderColor = "border-steplix-yellow";
        number = 3;
    }
    return (
        <div>
            <Modal
                isModalOpen={isModalOpen}
                setisModalOpen={setisModalOpen}
                borderColor={borderColor}
                subDescription={subDescription}
                setPositionModal={setPositionModal}
                positionModal={positionModal}
            >
                <Card
                    number={`0${number}.`}
                    title={title}
                    colorTitle="font-semibold text-steplix-yellow"
                    colorLine="bg-steplix-red"
                    text={text}
                />
            </Modal>
            <div
                className="text-white w-[290px] lg:w-[1300px] "
                id="what-we-do"
            >
                <h2 className="text-[24px] lg:text-[54px]">
                    {texts.whatWeDo.title}
                </h2>
                <div className="lg:w-[800px] w-[250px] lg:text-2xl text-xs mb-5 mt-3">
                    <p className="mb-3">{texts.whatWeDo.subtitlePartOne}</p>
                    <p>{texts.whatWeDo.subtitlePartTwo} </p>
                </div>

                <div className="space-y-5 lg:space-y-1 lg:grid lg:grid-rows-4 lg:grid-flow-col">
                    <div className="w-[250px] lg:w-[470px] lg:row-start-3 lg:row-span-2">
                        <Card
                            number="01."
                            title={texts.whatWeDo.cardOne.title}
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore="see More"
                            text={texts.whatWeDo.cardOne.description}
                            setisModalOpen={setisModalOpen}
                            setPositionModal={setPositionModal}
                        />
                    </div>
                    <div className="w-[250px] lg:w-[470px] lg:row-start-2 lg:row-span-3">
                        <Card
                            number="02."
                            title={texts.whatWeDo.cardTwo.title}
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore="see More"
                            text={texts.whatWeDo.cardTwo.description}
                            setisModalOpen={setisModalOpen}
                            setPositionModal={setPositionModal}
                        />
                    </div>
                    <div className="w-[250px] lg:w-[470px] lg:row-start-1 lg:row-span-4">
                        <Card
                            number="03."
                            title={texts.whatWeDo.cardThree.title}
                            colorTitle="font-semibold text-steplix-yellow"
                            colorLine="bg-steplix-red"
                            seeMore="see More"
                            text={texts.whatWeDo.cardThree.description}
                            setisModalOpen={setisModalOpen}
                            setPositionModal={setPositionModal}
                        />
                    </div>
                </div>
                <div className="lg:text-2xl text-sm text-steplix-yellow underline decoration-2 hidden lg:block text-center mt-16">
                    <Link href="/vermas">
                        <a>Ver mas</a>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
