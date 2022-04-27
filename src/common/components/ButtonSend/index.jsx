import React from "react";
import { useTranslation } from "@/common/lib/i18n";

const ButtonSend = () => {
    const { t } = useTranslation();

    return (
        <button
            className="w-[132px] h-[45px] border-2 text-steplix-red border-steplix-red font-semibold"
            type="submit"
        >
            {t("ButtonSend")}
        </button>
    );
};

export default ButtonSend;
