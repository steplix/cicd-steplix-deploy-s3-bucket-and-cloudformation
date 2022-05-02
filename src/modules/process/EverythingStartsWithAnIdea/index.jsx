import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const EverythingStartsWithAnIdea = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 xl:px-0 pt-36">
            <h4 className="mb-5 font-semibold text-2xl md:text-3xl lg:text-5xl">
                {t("process.everythingStartsWithAnIdea.title")}
            </h4>
            <div className="paragraph xl:max-w-[728px]">
                <p>{t("process.everythingStartsWithAnIdea.descriptionOne")}</p>{" "}
                <br />
                <p>{t("process.everythingStartsWithAnIdea.descriptionTwo")}</p>
                <br />
                <p>
                    {t("process.everythingStartsWithAnIdea.descriptionThree")}
                </p>{" "}
                <br />
                <p>{t("process.everythingStartsWithAnIdea.descriptionFour")}</p>
            </div>
        </div>
    );
};

export default EverythingStartsWithAnIdea;
