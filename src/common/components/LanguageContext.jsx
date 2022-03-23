import { useRouter } from "next/router";
import React, { createContext } from "react";
import translations from "../utils/lang/translations";
import PropTypes from "prop-types";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    //
    //Handlers
    //
    const handleLanguage = (e) => {
        e === "es" ? setTexts(translations.es) : setTexts(translations.en);
    };

    //
    //Const
    //
    const router = useRouter();
    const locale = router.locale;
    const [texts, setTexts] = React.useState(translations[locale]);
    const data = { texts, handleLanguage };

    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
};

//
//PropsTypes
//
LanguageProvider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export { LanguageContext };
export default LanguageProvider;
