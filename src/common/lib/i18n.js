import React from 'react';
import router from 'next/router';
import { useLanguageQuery, useLanguageSwitcherIsActive } from 'next-export-i18n';

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

const React__default = _interopDefaultLegacy(React);

export const LanguageSwitcher = ({ lang, children, shallow = false, slug }) => {
    // state indicating if this component's target language matches the currently selected
    const { isActive: languageSwitcherIsActive } = useLanguageSwitcherIsActive(lang);
    // necessary for updating the router's query parameter inside the click handler
    const router$1 = router.useRouter();
    const [query] = useLanguageQuery(lang);
    const queryObject = {...query};

    if (slug) {
        queryObject.slug = slug
    } else {
        delete queryObject.slug;
    }

    const updateRouter = () => {
        router$1.push({
            pathname: router$1.pathname,
            query: queryObject,
        }, undefined, { shallow: shallow });
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

