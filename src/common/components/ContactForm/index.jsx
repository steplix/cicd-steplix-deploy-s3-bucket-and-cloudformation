import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import ButtonSend from "@/common/components/ButtonSend";
import UploadFile from "@/common/components/UploadFile";

const ContactForm = ({ texts, cv }) => {
    const handleSubmit = async (e) => {
        let data;
        data = {
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
                company: e.target.company?.value || "",
                role: e.target.role?.value || "",
                howCanWeHelpYou: e.target.howCanWeHelpYou.value,
                lastname: e.target.lastname?.value || "",
                linkedin: e.target.linkedin?.value || "",
                uploadCv: e.target.uploadCv?.value || "",
            },
        };
        const idTemplate = 5;
        e.preventDefault();

        const res = await axios(
            "http://notifications.steplix.com:8000/notifications",
            {
                type: "POST",
                data: data,
                cache: false,
                crossDomain: true,
            }
        );

        const result = await res.json();
    };
    return (
        <div className="text-white lg:w-[1230px] w-[345px]" id="contact-us">
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
                                name={cv ? "lastname" : "email"}
                                placeholder={cv ? texts.lastname : texts.email}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>

                    <div className="lg:flex justify-center">
                        <div className="relative lg:w-[440px] border-b-2 mb-8 lg:mr-8">
                            <input
                                type="text"
                                maxLength={60}
                                name={cv ? "email" : "company?"}
                                placeholder={cv ? texts.email : texts.company}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="relative lg:w-[440px] border-b-2 mb-12 lg:mb-8">
                            <input
                                type="text"
                                maxLength={60}
                                name={cv ? "linkedin" : "role"}
                                placeholder={cv ? texts.linkedin : texts.role}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    {cv && <UploadFile text={texts.uploadCv} />}

                    <div className="relative lg:w-[920px] rounded-md border-2 mx-auto">
                        <textarea
                            name="howCanWeHelpYou"
                            id="text-help-you"
                            maxLength={1000}
                            placeholder={
                                cv
                                    ? texts.weWantToKnowAboutYou
                                    : texts.howCanWeHelpYou
                            }
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
    texts: PropTypes.object.isRequired,
};

export default ContactForm;
