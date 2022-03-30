import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const Philosophy = () => {
    const { t } = useTranslation();

    return (
        <div className="pt-16 lg:w-[1230px] w-[345px]">
            <div className="mb-14">
                <StepCard
                    textOne={t("about_us.philosophy.description")}
                    colorTitle="title-empty"
                    title={t("about_us.philosophy.title")}
                />
            </div>
        </div>
    );
};

export default Philosophy;
