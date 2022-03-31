import React from "react";
import ContactForm from "@/common/components/ContactForm";
import { useTranslation } from "next-export-i18n";

const ContactUs = ({ cv, title, subtitle, description }) => {
    const { texts } = useContext(LanguageContext);
    const { t } = useTranslation();

    return (
        <ContactForm
            cv={cv && cv}
            texts={t("contactUs")}
            title={title}
            subtitle={subtitle}
            description={description}
        />
    );
};

export default ContactUs;
