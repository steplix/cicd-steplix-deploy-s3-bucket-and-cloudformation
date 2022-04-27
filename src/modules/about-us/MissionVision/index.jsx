import React from "react";
import { useTranslation } from "@/common/lib/i18n";
import StepCard from "@/common/components/StepCard";
import ShadowCard from "@/common/components/ShadowCard";

const MissionVision = () => {
    const { t } = useTranslation();

    return (
        <div className="section-steplix grid grid-cols-1 xl:grid-cols-2 gap-y-9 xl:gap-x-9 xl:gap-y-0">
            <ShadowCard>
                <StepCard
                    title={t("about_us.mission.title")}
                    colorTitle="text-steplix-yellow"
                    textTwo={t("about_us.mission.description")}
                    colorLine="bg-steplix-blue"
                />
            </ShadowCard>
            <ShadowCard>
                <StepCard
                    title={t("about_us.vision.title")}
                    colorTitle="text-steplix-yellow"
                    textTwo={t("about_us.vision.description")}
                    colorLine="bg-steplix-red"
                />
            </ShadowCard>
        </div>
    );
};

export default MissionVision;
