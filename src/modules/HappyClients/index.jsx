import React from "react";
import { useTranslation } from "@/common/lib/i18n";
import Carousel from "@/common/components/Carousel";

const HappyClients = () => {
    const { t } = useTranslation();
    return (
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
    );
};

export default HappyClients;
