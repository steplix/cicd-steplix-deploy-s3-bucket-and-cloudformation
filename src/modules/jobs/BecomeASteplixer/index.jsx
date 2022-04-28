import React from "react";
import { useTranslation } from "next-export-i18n";
import JobCard from "@/common/components/JobCard";

const BecomeASteplixer = () => {
    const { t } = useTranslation();
        
    return (
        <div className="xl:pt-44 xl:mb-20 my-2">
            <h1 className="h2-steplix font-black">
                {t("jobs.title")}{" "}
                <span className="title-empty"> {t("jobs.titleEmpty")}</span>
            </h1>
            <div className="mt-14 xl:grid xl:grid-cols-2 xl:gap-y-12 xl:gap-x-16 space-y-10 xl:space-y-0 xl:w-[960px] ">
                <div className="w-[333px] h-[169px] xl:w-[490px] xl:h-[140px]">
                    <JobCard
                        title={t("jobs.UI_UXDesigner.title")}
                        country={t("jobs.UI_UXDesigner.country")}
                        apply={t("jobs.applyButton")}
                        url={'UI_UXDesigner'}
                    />
                </div>
                <div className="w-[333px] h-[169px] xl:w-[490px] xl:h-[140px]">
                    <JobCard
                        title={t("jobs.BACKENDSSR.title")}
                        country={t("jobs.BACKENDSSR.country")}
                        apply={t("jobs.applyButton")}
                        url={'BACKENDSSR'}
                    />
                </div>
            </div>
        </div>
    );
};

export default BecomeASteplixer;
