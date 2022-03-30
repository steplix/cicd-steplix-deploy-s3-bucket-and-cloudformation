/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from "./LanguageContext";
import logoEn from "@/public/assets/logos/logo-en.svg";
import logoEs from "@/public/assets/logos/logo-es.svg";

const LenguageSelector = () => {
    const router = useRouter();
    const { handleLanguage } = useContext(LanguageContext);

    const changeLang = (e) => {
        router.push(router.pathname, router.pathname, {
            locale: e,
        });
    };

    React.useEffect(() => {
        handleLanguage(router.locale);
    }, [handleLanguage, router.locale]);

    return (
        <>
            {router.locale === "es" ? (
                <div className="relative w-[34px] h-[34px]">
                    <button onClick={() => changeLang("en")}>
                        <img src={logoEn} alt="logo" layout="fill" />
                    </button>
                </div>
            ) : (
                <div className="relative w-[34px] h-[34px]">
                    <button onClick={() => changeLang("es")}>
                        <img src={logoEs} alt="logo" layout="fill" />
                    </button>
                </div>
            )}
        </>
    );
};

export default LenguageSelector;
