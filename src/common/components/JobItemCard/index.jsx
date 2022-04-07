import React from "react";
import ButtonApply from "../ButtonApply";
import { useLanguageQuery } from "next-export-i18n";
import { useTranslation } from "next-export-i18n";

const JobItemCard = ({ item }) => {
    const [query] = useLanguageQuery();
    const { t } = useTranslation();
    return (
        <div className="my-20 ">
            <div className="mb-20">
                <h1 className="lg:text-[100px] text-lg mb-4 font-black">
                    {item?.title}{" "}
                    <span className="title-empty"> {item?.titleEmpty} </span>
                </h1>
            </div>
            <div className="mx-auto flex justify-center">
                <ButtonApply
                    apply={t("jobs.applyButton")}
                    url="rrhh@steplix.com"
                    query={query}
                />
            </div>
            <div>
                <p className="lg:text-xl text-base">{item?.description}</p>
            </div>
            <div>
                <p>{item?.values?.title}</p>

                <p>{item?.values?.textOne}</p>
                <p>{item?.values?.textTwo}</p>
            </div>
            <div>
                <p className="text-2xl font-black my-10 ">
                    {item?.responsibilities?.title}
                </p>
                <ul className="list-disc mb-14">
                    {item?.responsibilities?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="text-2xl font-black mb-10 ">
                    {item?.requirements?.title}
                </p>
                <ul className="list-disc mb-14">
                    {item?.requirements?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="text-2xl font-black mb-10 ">
                    {item?.workModality?.title}
                </p>
                <ul className="list-disc mb-14">
                    {item?.workModality?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div className="mb-20">
                <h1 className="lg:text-6xl text-lg title-empty mb-4 font-black">
                    {item?.title}
                </h1>
                <p className="lg:text-xl text-base">{item?.description}</p>
            </div>
        </div>
    );
};

export default JobItemCard;
