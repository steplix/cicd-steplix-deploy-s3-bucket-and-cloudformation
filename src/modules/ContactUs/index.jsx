import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import ButtonSend from "@/common/components/ButtonSend";
import axios from "axios";

const ContactUs = () => {
    const { texts } = useContext(LanguageContext);
    const handleSubmit = async (e) => {
        const idTemplate = 5;
        e.preventDefault();

        const res = await axios(
            "http://notifications.steplix.com:8000/notifications",
            {
                type: "POST",
                data: {
                    idTemplate,
                    idChannel: /* email */ 2,
                    metadata: {
                        subject:
                            idTemplate === 5
                                ? "Contact | Steplix | Web Site"
                                : "Postulation | Steplix | Web Site",
                        to: "lsainz@steplix.com",
                        name: e.target.name.value,
                        nemailame: e.target.email.value,
                        company: e.target.company.value,
                        role: e.target.role.value,
                        howCanWeHelpYou: e.target.howCanWeHelpYou.value,
                    },
                },
                cache: false,
                crossDomain: true,
            }
        );

        const result = await res.json();
    };
    return (
        <div className="text-white" id="contact-us">
            <h2 className="lg:text-[54px] text-[24px] w-[270px] lg:w-[1570px]">
                {texts.contactUs.title}
            </h2>
            <p className="lg:text-[64px] text-[37px] title-empty w-[230px] lg:w-[1570px] mb-10">
                {texts.contactUs.subtitle}
            </p>
            <div>
                <form
                    className="rounded-lg overflow-hidden p-6 lg:p-1 space-y-4"
                    onSubmit={(e) => handleSubmit(e)}
                >
                    <div className="lg:flex justify-center">
                        <div className="relative lg:w-[440px] border-b-2 mb-8 lg:mr-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="name"
                                placeholder={texts.contactUs.name}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="relative lg:w-[440px] border-b-2 mb-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="email"
                                placeholder={texts.contactUs.email}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>

                    <div className="lg:flex justify-center">
                        <div className="relative lg:w-[440px] border-b-2 mb-8 lg:mr-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="company"
                                placeholder={texts.contactUs.company}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="relative lg:w-[440px] border-b-2 mb-12 lg:mb-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="role"
                                placeholder={texts.contactUs.role}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    <div className="relative lg:w-[920px] rounded-md border-2 mx-auto">
                        <textarea
                            name="howCanWeHelpYou"
                            id="text-help-you"
                            maxLength={1000}
                            placeholder={texts.contactUs.howCanWeHelpYou}
                            className="mt-5 ml-3 block w-full appearance-none focus:outline-none bg-transparent h-40"
                        ></textarea>
                        <div className="float-right mt-10">
                            <ButtonSend />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;