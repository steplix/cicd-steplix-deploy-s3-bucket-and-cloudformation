import React from "react";
import { useTranslation } from "next-export-i18n";
import Carousel from "@/common/components/Carousel";
import Fade from "react-reveal/Fade";

const HappyClients = () => {
    const { t } = useTranslation();
    return (
        <Fade cascade>
            <div className="container px-5 xl:px-0" id="happy-clients">
                <h3 className="mb-3.5 lg:mb-[75px] font-semibold text-4xl md:text-8xl lg:text-9xl xl:text-8xl 2xl:text-9xl">
                    {" "}
                    {t("happyClients.title")}
                    <span className="text--outlined">
                        {t("happyClients.titleEmpty")}
                    </span>
                </h3>
                <Carousel />
            </div>
        </Fade>
    );
};

export default HappyClients;
