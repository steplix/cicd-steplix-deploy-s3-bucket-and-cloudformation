import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import ContactForm from "@/common/components/ContactForm";

const ContactUs = ({ cv, title, subtitle, description }) => {
    const { texts } = useContext(LanguageContext);

    return (
        <ContactForm
            cv={cv && cv}
            texts={texts.contactUs}
            title={title}
            subtitle={subtitle}
            description={description}
        />
    );
};

export default ContactUs;
