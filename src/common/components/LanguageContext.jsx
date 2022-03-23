import { useRouter } from "next/router";
import React, { createContext } from "react";
import translations from "../utils/lang/translations";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
    const router = useRouter();
    const locale = router.locale;
    const [texts, setTexts] = React.useState(translations[locale]);
    const handleLanguage = (e) => {
        e === "es" ? setTexts(translations.es) : setTexts(translations.en);
    };
    const data = { texts, handleLanguage };
    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext };
export default LanguageProvider;
