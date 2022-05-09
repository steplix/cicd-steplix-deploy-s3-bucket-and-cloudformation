import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";
import ShadowCard from "@/common/components/ShadowCard";
import Fade from "react-reveal/Fade";

const MissionVision = () => {
    const { t } = useTranslation();

    return (
        <div className="container px-5 md:px-0 xl:pr-24 grid grid-cols-1 xl:grid-cols-2 gap-y-9 xl:gap-x-9 xl:gap-y-0">
            <Fade cascade>
                <ShadowCard>
                    <div className="2xl:pt-3">
                        <StepCard
                            title={t("about_us.mission.title")}
                            sizeTitle="font-medium text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl"
                            colorTitle="text-yellow"
                            textTwo={t("about_us.mission.description")}
                            colorLine="bg-blue"
                            widthTexts="xl:w-[408px] 2xl:w-[488px]"
                        />
                    </div>
                </ShadowCard>
                <ShadowCard>
                    <div className="2xl:pt-3">
                        <StepCard
                            title={t("about_us.vision.title")}
                            sizeTitle="font-medium text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl"
                            colorTitle="text-yellow"
                            textTwo={t("about_us.vision.description")}
                            colorLine="bg-red"
                            widthTexts="xl:w-[408px] 2xl:w-[488px]"
                        />
                    </div>
                </ShadowCard>
            </Fade>
        </div>
    );
};

export default MissionVision;
