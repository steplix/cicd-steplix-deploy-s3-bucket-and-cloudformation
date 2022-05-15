import React from "react";
import { useTranslation } from "next-export-i18n";
import FeatureCard from "@/common/components/FeatureCard";
import ShadowCard from "@/common/components/ShadowCard";
import Fade from "react-reveal/Fade";

const MissionVision = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 md:px-0 xl:pr-24 grid grid-cols-1 xl:grid-cols-2 gap-y-9 xl:gap-x-9 xl:gap-y-0">
            <Fade cascade>
                <ShadowCard>
                    <FeatureCard
                        title={t("about_us.mission.title")}
                        description={t("about_us.mission.description")}
                        divideColor="bg-blue"
                        isMainTitle
                    />
                </ShadowCard>
                <ShadowCard>
                    <FeatureCard
                        title={t("about_us.vision.title")}
                        description={t("about_us.vision.description")}
                        divideColor="bg-red"
                        isMainTitle
                    />
                </ShadowCard>
            </Fade>
        </div>
    );
};

export default MissionVision;
