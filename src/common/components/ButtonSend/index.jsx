import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";

const ButtonSend = () => {
    const { texts } = useContext(LanguageContext);

    return (
        <button
            className="w-[132px] h-[45px] border-2 text-steplix-red border-steplix-red font-semibold"
            type="submit"
        >
            {texts.ButtonSend}
        </button>
    );
};

export default ButtonSend;
