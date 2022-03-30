import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import JobCard from "@/common/components/JobCard";

const BecomeASteplixer = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <div className="pt-44 mb-20 lg:w-[1230px] w-[345px]">
            <h1 className="text-5xl font-black">
                <spam className="title-empty">{texts.jobs.title}</spam>{" "}
                Steplixer
            </h1>
            <div className="mt-14 lg:grid lg:grid-cols-2 lg:gap-y-12 lg:gap-x-7 space-y-10 lg:space-y-0 lg:w-[960px] ">
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={texts.jobs.jobOne.title}
                        country={texts.jobs.jobOne.country}
                        apply={texts.jobs.applyButton}
                    />
                </div>
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={texts.jobs.jobTwo.title}
                        country={texts.jobs.jobTwo.country}
                        apply={texts.jobs.applyButton}
                    />
                </div>
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={texts.jobs.jobThree.title}
                        country={texts.jobs.jobThree.country}
                        apply={texts.jobs.applyButton}
                    />
                </div>
                <div className="w-[346px] h-[123px] lg:w-[450px] lg:h-[140px]">
                    <JobCard
                        title={texts.jobs.jobFour.title}
                        country={texts.jobs.jobFour.country}
                        apply={texts.jobs.applyButton}
                    />
                </div>
            </div>
        </div>
    );
};

export default BecomeASteplixer;
