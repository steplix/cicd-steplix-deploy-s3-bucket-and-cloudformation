/* eslint-disable @next/next/no-img-element */
import React from "react";
import { LanguageSwitcher } from "next-export-i18n";

import logoEn from "@/public/assets/logos/logo-en.svg";
import logoEs from "@/public/assets/logos/logo-es.svg";

const LanguageSelector = () => {
    return (
        <div className="flex gap-2">
            <div className="relative w-[34px] h-[34px]">
                <LanguageSwitcher lang="es">
                    <img src={logoEs} alt="logo" layout="fill" />
                </LanguageSwitcher>
            </div>
            <div className="relative w-[34px] h-[34px]">
                <LanguageSwitcher lang="en">
                    <img src={logoEn} alt="logo" layout="fill" />
                </LanguageSwitcher>
            </div>
        </div>
    );
};

export default LanguageSelector;
