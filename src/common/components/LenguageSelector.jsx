import React, { useContext } from "react";
import { useRouter } from "next/router";
import { LanguageContext } from "./LanguageContext";
import logoEn from "@/public/assets/logos/logo-en.svg";
import logoEs from "@/public/assets/logos/logo-es.svg";
import Image from "next/image";

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
    }, [router.locale]);

    return (
        <>
            {router.locale === "es" ? (
                <div className="logo-desktop relative w-[34px] h-[34px]  ">
                    <button onClick={() => changeLang("en")}>
                        <Image src={logoEn} alt="logo" layout="fill" />
                    </button>
                </div>
            ) : (
                <div className="logo-desktop relative w-[34px] h-[34px]  ">
                    <button onClick={() => changeLang("es")}>
                        <Image src={logoEs} alt="logo" layout="fill" />
                    </button>
                </div>
            )}
        </>
    );
};

export default LenguageSelector;
