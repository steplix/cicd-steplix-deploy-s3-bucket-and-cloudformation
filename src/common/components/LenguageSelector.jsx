/* eslint-disable @next/next/no-img-element */
import React, { useContext } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from "./LanguageContext";

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
                        <img
                            src="/assets/logos/logo-en.svg"
                            alt="logo"
                            layout="fill"
                        />
                    </button>
                </div>
            ) : (
                <div className="relative w-[34px] h-[34px]">
                    <button onClick={() => changeLang("es")}>
                        <img
                            src="/assets/logos/logo-es.svg"
                            alt="logo"
                            layout="fill"
                        />
                    </button>
                </div>
            )}
        </>
    );
};

export default LenguageSelector;
