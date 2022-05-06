import React from "react";
import { useTranslation } from "next-export-i18n";
import StepCard from "@/common/components/StepCard";

const EverythingStartsWithAnIdea = () => {
    const { t } = useTranslation();

    return (
        <section className="bg--process">
            <div className="container px-5 md:px-0 pt-36 md:pt-28 lg:pt-24 xl:pt-64 2xl:pt-52">
                <h3 className="mb-5 font-semibold leading-tight text-2xl md:text-3xl lg:text-5xl">
                    {t("process.everythingStartsWithAnIdea.title")}
                </h3>
                <div className="paragraph xl:max-w-[728px] 2xl:max-w-full">
                    <p>
                        {t("process.everythingStartsWithAnIdea.descriptionOne")}
                    </p>{" "}
                    <br />
                    <p>
                        {t("process.everythingStartsWithAnIdea.descriptionTwo")}
                    </p>
                    <br />
                    <p>
                        {t(
                            "process.everythingStartsWithAnIdea.descriptionThree"
                        )}
                    </p>{" "}
                    <br />
                    <p>
                        {t(
                            "process.everythingStartsWithAnIdea.descriptionFour"
                        )}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default EverythingStartsWithAnIdea;
