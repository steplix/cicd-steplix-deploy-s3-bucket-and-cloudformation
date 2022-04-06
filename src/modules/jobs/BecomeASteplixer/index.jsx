import React from "react";
import { useTranslation } from "next-export-i18n";
import JobCard from "@/common/components/JobCard";

const BecomeASteplixer = () => {
    const { t } = useTranslation();
    return (
        <div className="pt-44 mb-20 lg:w-[1230px] w-[345px]">
            <h1 className="text-5xl font-black">
                <span className="title-empty">{t("jobs.title")}</span> Steplixer
            </h1>
            <div className="mt-14 lg:grid lg:grid-cols-2 lg:gap-y-12 lg:gap-x-7 space-y-10 lg:space-y-0 lg:w-[960px] ">
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={t("jobs.UI_UXDesigner.title")}
                        country={t("jobs.UI_UXDesigner.country")}
                        apply={t("jobs.applyButton")}
                        url={t("jobs.UI_UXDesigner.url")}
                    />
                </div>
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={t("jobs.FUNCTIONALANALYST.title")}
                        country={t("jobs.FUNCTIONALANALYST.country")}
                        apply={t("jobs.applyButton")}
                        url={t("jobs.FUNCTIONALANALYST.url")}
                    />
                </div>
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={t("jobs.GROWTHMARKETING.title")}
                        country={t("jobs.GROWTHMARKETING.country")}
                        apply={t("jobs.applyButton")}
                        url={t("jobs.GROWTHMARKETING.url")}
                    />
                </div>
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={t("jobs.BACKENDSSR.title")}
                        country={t("jobs.BACKENDSSR.country")}
                        apply={t("jobs.applyButton")}
                        url={t("jobs.BACKENDSSR.url")}
                    />
                </div>
            </div>
        </div>
    );
};

export default BecomeASteplixer;
