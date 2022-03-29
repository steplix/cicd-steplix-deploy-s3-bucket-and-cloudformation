import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import ContactForm from "@/common/components/ContactForm";

const ContactUs = () => {
    const { texts } = useContext(LanguageContext);

    return <ContactForm texts={texts.contactUs} />;
};

export default ContactUs;
