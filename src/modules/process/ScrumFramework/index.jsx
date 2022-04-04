import React from "react";
import { useTranslation } from "next-export-i18n";

const ScrumFramework = () => {
    const { t } = useTranslation();

    return (
        <div className="w-[340px] lg:w-[1300px] text-2xl lg:text-4xl font-black lg:block hidden">
            <div>
                <h2 className="">
                    {t("process.scrumFramework.titleOne")}
                    <span className="title-empty">
                        {t("process.scrumFramework.titleTwo")}
                    </span>
                </h2>
            </div>
            <div className="mt-[100px]">
                <img
                    src="/assets/images/process/ScrumFrameworkEs.svg"
                    alt="Scrum Framework"
                />
            </div>
        </div>
    );
};

export default ScrumFramework;