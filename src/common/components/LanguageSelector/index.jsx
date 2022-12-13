/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useLanguageQuery, useTranslation } from 'next-export-i18n';
import { LanguageSwitcher } from "@/common/lib/i18n";
import Icon from '@/components/Icon';

const LanguageSelector = ({ sm }) => {
    const [query] = useLanguageQuery();
    const { t } = useTranslation();
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const { query: { slug } } = useRouter();

    const languageMap = {
        current: {
            query: query?.lang,
            text: "navbar.currentLang"
        },
        target: {
            query: query?.lang === 'es' ? 'en' : 'es',
            text:  "navbar.targetLang"
        },
    }

    return (
        <div className="flex gap-2 mt-40 xl:mt-0">
            {languageMap?.current?.query ? (
                    <div className="flex flex-col relative cursor-pointer">
                        <div className="flex items-center space-x-2" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                            <div className="flex items-center space-x-1">
                                <img
                                    src={`/assets/img/logo-${languageMap.current.query}.svg`}
                                    alt="logo"
                                    className="w-[18px] h-[18px]"
                                />
                                <span className="text-sm xl:text-lg font-semibold">{sm ? t(languageMap.current.text) : languageMap.current.query.toUpperCase()}</span>
                            </div>
                            <Icon name="chevronDown" className={`dropdown-arrow ${isDropdownOpen ? 'dropdown-arrow--open' : ''}`} />
                        </div>
                        <div className={`dropdown ${isDropdownOpen ? 'dropdown--open' : ''}`}>
                            <LanguageSwitcher lang={languageMap.target.query} slug={slug}>
                                <div className="flex items-center space-x-2 w-[99px] xl:w-[70px] dropdown-option px-1 mt-1" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                                    <div className="flex items-center space-x-1">
                                        <img
                                            src={`/assets/img/logo-${languageMap.target.query}.svg`}
                                            alt="logo"
                                            className="w-[18px] h-[18px]"
                                        />
                                        <span className="text-sm xl:text-lg">{sm ? t(languageMap.target.text) : languageMap.target.query.toUpperCase()}</span>
                                    </div>
                                </div>
                            </LanguageSwitcher>
                        </div>
                    </div>
            ) : null}
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
