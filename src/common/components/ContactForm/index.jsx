import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ButtonSend from "@/common/components/ButtonSend";

const ContactForm = ({ texts }) => {
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
        <div className="text-white w-[330px] lg:w-[1390px]" id="contact-us">
            <h2 className="lg:text-[54px] text-[24px] w-[270px] lg:w-[1570px]">
                {texts.title}
            </h2>
            <p className="lg:text-[64px] text-[37px] title-empty w-[230px] lg:w-[1570px] mb-10">
                {texts.subtitle}
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
                                placeholder={texts.name}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="relative lg:w-[440px] border-b-2 mb-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="email"
                                placeholder={texts.email}
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
                                placeholder={texts.company}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="relative lg:w-[440px] border-b-2 mb-12 lg:mb-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="role"
                                placeholder={texts.role}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    <div className="relative lg:w-[920px] rounded-md border-2 mx-auto">
                        <textarea
                            name="howCanWeHelpYou"
                            id="text-help-you"
                            maxLength={1000}
                            placeholder={texts.howCanWeHelpYou}
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
//
//PropsTypes
//
ContactForm.propTypes = {
    texts: PropTypes.string.isRequired,
};

export default ContactForm;
