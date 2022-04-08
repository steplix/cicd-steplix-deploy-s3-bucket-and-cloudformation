import React from "react";
import { useTranslation } from "next-export-i18n";
import Carousel from "@/common/components/Carousel";

const HappyClients = () => {
    const { t } = useTranslation();
    return (
        <div className="section-steplix text-left" id="happy-clients">
            <h3 className="mb-3.5 xl:mb-2.5">
                <span className="h3-steplix h3-steplix--filled">
                    {t("happyClients")}
                </span>
            </h3>
            <Carousel />
        </div>
    );
};

export default HappyClients;
