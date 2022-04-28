import React from "react";
import { useTranslation } from "next-export-i18n";
import Carousel from "@/common/components/Carousel";
import Fade from "react-reveal/Fade";

const HappyClients = () => {
    const { t } = useTranslation();
    return (
        <Fade cascade>
            <div className="section-steplix text-left " id="happy-clients">
                <h3 className="mb-3.5 xl:mb-[75px] h3-steplix h3-steplix--filled">
                    {" "}
                    {t("happyClients.title")}
                    <span className="title-empty">
                        {t("happyClients.titleEmpty")}
                    </span>
                </h3>
                <Carousel />
            </div>
        </Fade>
    );
};

export default HappyClients;
