import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const MissionVision = () => {
    const { t } = useTranslation();

    return (
        <div className="lg:flex lg:gap-5 lg:mt-20 mt-10">
            <div className="lg:w-[550px] w-[360px] lg:min-h-[400px]">
                <div className="lg:border-2 lg:border-gray-100 w-full h-full">
                    {" "}
                    <div className="p-5">
                        <p className="text-[42px] font-bold">01.</p>
                        <StepCard colorLine="bg-steplix-blue lg:w-12" />
                        <div className="mt-2">
                            <StepCard
                                title={t("about_us.mission.title")}
                                colorTitle="text-steplix-yellow"
                                textTwo={t("about_us.mission.description")}
                                colorLine="bg-steplix-red"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-[550px] w-[360px] lg:min-h-[400px]">
                <div className="lg:border-2 lg:border-gray-100 w-full h-full">
                    <div className="p-5">
                        <p className="text-[42px] font-bold">02.</p>
                        <StepCard colorLine="bg-steplix-blue lg:w-12" />
                        <div className="mt-2">
                            <StepCard
                                title={t("about_us.vision.title")}
                                colorTitle="text-steplix-yellow"
                                textTwo={t("about_us.vision.description")}
                                colorLine="bg-steplix-red"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MissionVision;
