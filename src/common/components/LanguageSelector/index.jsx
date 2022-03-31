/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LanguageSwitcher, useLanguageQuery } from "next-export-i18n";

const LanguageSelector = () => {
    const [query] = useLanguageQuery();

    console.log(query?.lang);
    return (
        <div className="flex gap-2">
            {query?.lang === "en" ? (
                <div className="relative w-[34px] h-[34px]">
                    <LanguageSwitcher lang="es">
                        <img
                            src="/assets/logos/logo-es.svg"
                            alt="logo"
                            layout="fill"
                        />
                    </LanguageSwitcher>
                </div>
            ) : (
                <div className="relative w-[34px] h-[34px]">
                    <LanguageSwitcher lang="en">
                        <img
                            src="/assets/logos/logo-en.svg"
                            alt="logo"
                            layout="fill"
                        />
                    </LanguageSwitcher>
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
