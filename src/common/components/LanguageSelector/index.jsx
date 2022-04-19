/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import { LanguageSwitcher, useLanguageQuery } from "next-export-i18n";

const LanguageSelector = ({ sm }) => {
    const [query] = useLanguageQuery();

    return (
        <div className="flex gap-2">
            {query?.lang === "en" ? (
                <LanguageSwitcher lang="es">
                    <div className="flex">
                        <div className="relative w-[34px] h-[34px]">
                            <img
                                src="/assets/img/logo-es.svg"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        {sm && (
                            <p className="my-auto ml-3">Versión en español</p>
                        )}
                    </div>
                </LanguageSwitcher>
            ) : (
                <LanguageSwitcher lang="en">
                    <div className="flex">
                        <div className="relative w-[34px] h-[34px]">
                            <img
                                src="/assets/img/logo-en.svg"
                                alt="logo"
                                layout="fill"
                            />
                        </div>
                        {sm && <p className="my-auto ml-3">English version</p>}
                    </div>
                </LanguageSwitcher>
            )}
        </div>
    );
};

//
//PropsTypes
//
LanguageSelector.propTypes = {
    sm: PropTypes.bool,
};
export default LanguageSelector;
