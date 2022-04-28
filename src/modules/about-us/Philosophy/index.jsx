import React from "react";
import { useTranslation } from "next-export-i18n";
import CollageAboutUs from "@/common/components/CollageAboutUs";
import Fade from "react-reveal/Fade";

const Philosophy = () => {
    const { t } = useTranslation();

    return (
        <div className="section-steplix">
            <Fade cascade>
                <div className="mb-0 xl:mb-14">
                    <h2 className="mb-6 xl:mb-14">
                        <span className="h2-steplix h2-steplix--filled">
                            {t("about_us.philosophy.titleOne")}{" "}
                        </span>
                        <span className="h2-steplix h2-steplix--outlined">
                            {t("about_us.philosophy.titleTwo")}
                        </span>
                    </h2>
                    <p className="p-steplix">
                        {t("about_us.philosophy.description")}
                    </p>
                </div>
            </Fade>

            <CollageAboutUs lg />
        </div>
    );
};

export default Philosophy;
