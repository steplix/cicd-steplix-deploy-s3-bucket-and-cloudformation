import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import JobCard from "@/common/components/JobCard";

const BecomeASteplixer = () => {
    const { texts } = useContext(LanguageContext);
    console.log(texts.jobs.UI_UXDesigner.url);
    return (
        <div className="pt-44 mb-20 lg:w-[1230px] w-[345px]">
            <h1 className="text-5xl font-black">
                <spam className="title-empty">{texts.jobs.title}</spam>{" "}
                Steplixer
            </h1>
            <div className="mt-14 lg:grid lg:grid-cols-2 lg:gap-y-12 lg:gap-x-7 space-y-10 lg:space-y-0 lg:w-[960px] ">
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={texts.jobs.UI_UXDesigner.title}
                        country={texts.jobs.UI_UXDesigner.country}
                        apply={texts.jobs.applyButton}
                        url={texts.jobs.UI_UXDesigner.url}
                    />
                </div>
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={texts.jobs.FUNCTIONALANALYST.title}
                        country={texts.jobs.FUNCTIONALANALYST.country}
                        apply={texts.jobs.applyButton}
                        url={texts.jobs.FUNCTIONALANALYST.url}
                    />
                </div>
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={texts.jobs.GROWTHMARKETING.title}
                        country={texts.jobs.GROWTHMARKETING.country}
                        apply={texts.jobs.applyButton}
                        url={texts.jobs.GROWTHMARKETING.url}
                    />
                </div>
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={texts.jobs.BACKENDSSR.title}
                        country={texts.jobs.BACKENDSSR.country}
                        apply={texts.jobs.applyButton}
                        url={texts.jobs.BACKENDSSR.url}
                    />
                </div>
            </div>
        </div>
    );
};

export default BecomeASteplixer;
