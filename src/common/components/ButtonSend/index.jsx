import React from "react";
import { useTranslation } from "next-export-i18n";

const ButtonSend = () => {
    const { t } = useTranslation();

    return (
        <button
            className="w-[132px] h-[45px] border-2 text-red border-red font-semibold"
            type="submit"
        >
            {t("ButtonSend")}
        </button>
    );
};

export default ButtonSend;
