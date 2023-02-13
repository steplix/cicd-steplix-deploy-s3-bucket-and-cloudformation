/* eslint-disable @next/next/no-img-element */
import React from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useLanguageQuery } from 'next-export-i18n';
import { LanguageSwitcher, useTranslation } from "@/common/lib/i18n";
import Icon from '@/components/Icon';

const LanguageSelector = ({ sm }) => {
    const router = useRouter();
    const slug = router?.query?.slug;
    const locale = router?.query?.locale;
    const [query] = useLanguageQuery(locale);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);
    const shortCurrentLang = query?.lang;
    const { t } = useTranslation(shortCurrentLang);


    const languageMap = {
        current: {
            query: shortCurrentLang,
            text: t("navbar.currentLang")
        },
        target: {
            query: t("navbar.shortTargetLang"),
            text:  t("navbar.targetLang")
        },
    }

    return (
        <div className="flex gap-2 mt-40 lg:mt-0">
            {shortCurrentLang ? (
                    <button className="flex flex-col relative cursor-pointer" onClick={() => setIsDropdownOpen(!isDropdownOpen)} tabIndex={1}>
                        <div className="flex items-center space-x-2">
                            <div className="flex items-center space-x-1">
                                <img
                                    src={`/assets/img/logo-${languageMap.current.query}.svg`}
                                    alt="logo"
                                    className="w-[18px] h-[18px]"
                                />
                                <span className="text-sm xl:text-lg font-semibold">{sm ? languageMap.current.text : languageMap.current.query.toUpperCase()}</span>
                            </div>
                            <Icon name="chevronDown" className={`dropdown-arrow text-blue ${isDropdownOpen ? 'dropdown-arrow--open' : ''}`} />
                        </div>
                        <div className={`dropdown ${isDropdownOpen ? 'dropdown--open' : ''}`}>
                            <LanguageSwitcher lang={languageMap.target.query} slug={slug}>
                                <button className="flex items-center space-x-2 w-[99px] xl:w-[70px] dropdown-option mt-1" onClick={() => setIsDropdownOpen(!isDropdownOpen)} tabIndex={1}>
                                    <div className="flex items-center space-x-1">
                                        <img
                                            src={`/assets/img/logo-${languageMap.target.query}.svg`}
                                            alt="logo"
                                            className="w-[18px] h-[18px]"
                                        />
                                        <span className="text-sm xl:text-lg">{sm ? languageMap.target.text : languageMap.target.query.toUpperCase()}</span>
                                    </div>
                                </button>
                            </LanguageSwitcher>
                        </div>
                    </button>
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
