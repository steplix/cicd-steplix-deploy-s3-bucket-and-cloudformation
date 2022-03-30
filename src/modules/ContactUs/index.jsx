import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import ContactForm from "@/common/components/ContactForm";

const ContactUs = ({ cv }) => {
    const { texts } = useContext(LanguageContext);

    return <ContactForm cv={cv && cv} texts={texts.contactUs} />;
};

export default ContactUs;
