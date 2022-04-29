/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useLanguageQuery } from 'next-export-i18n';
import { LanguageSwitcher } from "@/common/lib/i18n";

const LanguageSelector = ({ sm }) => {
    const [query] = useLanguageQuery();
    const { query: { slug } } = useRouter();

    return (
        <div className="flex gap-2">
            {query?.lang === "en" ? (
                <LanguageSwitcher lang="es" slug={slug}>
                    <div className="flex">
                        <div className="w-[34px] h-[34px]">
                            <img
                                src="/assets/img/logo-es.svg"
                                alt="logo"
                                className="w-[34px] h-[34px]"
                            />
                        </div>
                        {sm && (
                            <p className="my-auto ml-3">Versión en español</p>
                        )}
                    </div>
                </LanguageSwitcher>
            ) : (
                <LanguageSwitcher lang="en" slug={slug}>
                    <div className="flex">
                        <div className="w-[34px] h-[34px]">
                            <img
                                src="/assets/img/logo-en.svg"
                                alt="logo"
                                className="w-[34px] h-[34px]"
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
