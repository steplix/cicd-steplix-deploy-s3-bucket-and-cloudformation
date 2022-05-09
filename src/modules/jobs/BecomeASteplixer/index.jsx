import React from "react";
import { useTranslation } from "next-export-i18n";
import JobCard from "@/common/components/JobCard";
import Fade from "react-reveal/Fade";

const BecomeASteplixer = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 md:px-0 pt-28 xl:mb-20 my-2">
            <Fade>
                <h1 className="font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                    {t("jobs.title")}{" "}
                    <span className="text--outlined">
                        {" "}
                        {t("jobs.titleEmpty")}
                    </span>
                </h1>
                <div className="w-full xl:max-w-[1070px] 2xl:max-w-[1400px] mt-14 xl:grid xl:grid-cols-2 xl:gap-y-12 2xl:gap-x-16 space-y-10 xl:space-y-0">
                    <div className="w-full h-[169px] xl:w-[490px] xl:h-[140px] 2xl:w-full 2xl:h-[200px]">
                        <JobCard
                            title={t("jobs.UI_UXDesigner.title")}
                            country={t("jobs.UI_UXDesigner.country")}
                            apply={t("jobs.applyButton")}
                            url={t("jobs.UI_UXDesigner.url")}
                        />
                    </div>
                    <div className="w-full h-[169px] xl:w-[490px] xl:h-[140px] 2xl:w-full 2xl:h-[200px]">
                        <JobCard
                            title={t("jobs.BACKENDSSR.title")}
                            country={t("jobs.BACKENDSSR.country")}
                            apply={t("jobs.applyButton")}
                            url={t("jobs.BACKENDSSR.url")}
                        />
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default BecomeASteplixer;
