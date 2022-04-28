import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const EverythingStartsWithAnIdea = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-44 lg:w-[1330px] w-[345px]">
            <StepCard
                title={t("process.everythingStartsWithAnIdea.title")}
                colorTitle="font-bold text-white"
                textOne={t("process.everythingStartsWithAnIdea.descriptionOne")}
                textTwo={t("process.everythingStartsWithAnIdea.descriptionTwo")}
                textThree={t(
                    "process.everythingStartsWithAnIdea.descriptionThree"
                )}
                textFour={t(
                    "process.everythingStartsWithAnIdea.descriptionFour"
                )}
            />
        </div>
    );
};

export default EverythingStartsWithAnIdea;
