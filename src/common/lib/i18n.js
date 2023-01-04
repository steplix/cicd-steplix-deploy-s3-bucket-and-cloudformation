import React from 'react';
import router from 'next/router';
import { useLanguageQuery, useLanguageSwitcherIsActive, useSelectedLanguage } from 'next-export-i18n';
var Mustache = require('mustache');
import I18N from '../../../i18n'

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const React__default = _interopDefaultLegacy(React);

export const LanguageSwitcher = ({ lang, children, shallow = true, slug }) => {
    // state indicating if this component's target language matches the currently selected
    const { isActive: languageSwitcherIsActive } = useLanguageSwitcherIsActive(lang);
    // necessary for updating the router's query parameter inside the click handler
    const router$1 = router.useRouter();
    const [query] = useLanguageQuery(lang);
    const queryObject = {...query};

    if (slug?.length) {
        slug = [slug[0], lang]
        queryObject.slug = slug
    } else {
        delete queryObject.slug;
    }


    const updateRouter = () => {
        router$1.push({
            pathname: router$1.pathname,
            query: queryObject,
        }, router$1.asPath, { shallow: shallow });
    };
    // use React.cloneElement to manipulate properties
    if (React__default["default"].isValidElement(children)) {
        return React__default["default"].cloneElement(children, {
            onClick: () => {
                if (children &&
                    children.props &&
                    typeof children.props.onClick === 'function') {
                    children.props.onClick();
                }
                // set the language
                updateRouter();
            },
            "data-language-switcher": "true",
            // set the current status
            "data-is-current": languageSwitcherIsActive,
            "role": "button",
            "aria-label": `set language to ${lang}`
        });
    }
    else {
        return (React__default["default"].createElement("span", { role: "button", "aria-label": `set language to ${lang}`, "data-language-switcher": "true", "data-is-current": languageSwitcherIsActive, onClick: () => {
                // set the language
                updateRouter();
            } }, children));
    }
};

const getDefaultLanguage = (userI18n) => {
    let browserLang = "";
    if (userI18n.useBrowserDefault &&
        typeof window !== "undefined" &&
        window &&
        window.navigator &&
        (window.navigator.languages || window.navigator.language)) {
        browserLang = ((window.navigator.languages && window.navigator.languages[0]) ||
            window.navigator.language)
            .split("-")[0]
            .toLowerCase();
    }
    if (userI18n.useBrowserDefault &&
        browserLang &&
        userI18n.translations[browserLang]) {
        return browserLang;
    }
    return userI18n.defaultLang;
};

const i18n = () => {
    // cast to be typsafe
    const userI18n = I18N;
    if (Object.keys(userI18n.translations).length < 1) {
        throw new Error(`Missing translations. Did you import and add the tranlations in 'i18n/index.js'?`);
    }
    if (userI18n.defaultLang.length === 0) {
        throw new Error(`Missing default language. Did you set 'defaultLang' in 'i18n/index.js'?`);
    }
    if (!userI18n.translations[userI18n.defaultLang]) {
        throw new Error(`Invalid default language '${userI18n.defaultLang}'. Check your 'defaultLang' in 'i18n/index.js'?`);
    }
    userI18n.defaultLang = getDefaultLanguage(userI18n);
    return userI18n;
};

export const useTranslation = (forcedLang) => {
    router.useRouter();
    let i18nObj;
    i18nObj = i18n();
    const translations = i18nObj.translations;
    i18nObj.defaultLang;
    const { lang: queryLang } = useSelectedLanguage();
    // const [lang] = useSelectedLanguage();
    return {
        /**
         * Returns the value stored for this given key (e.g. "i18n.ui.headline")  in the translation file.
         * The return value can be a string, a number, an array or an object.
         * In case there is no entry for this key, it returns the key.
         * @param key the key for looking up the translation
         * @param view the mustache view for interpolating the template string
         * @returns the value stored for this key, could be a string, a number, an array or an object
         */
        t: (key, view) => {
            let lang = forcedLang || queryLang;
            let value = key.split('.').reduce((previous, current) => (previous && previous[current]) || null, translations[lang]);
            let translation = value || key;
            try {
                return Mustache__default["default"].render(translation, view);
            }
            catch (e) {
                return translation;
            }
        },
    };
};

