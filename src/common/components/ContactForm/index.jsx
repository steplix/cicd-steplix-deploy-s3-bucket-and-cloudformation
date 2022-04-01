import React from "react";
import axios from "axios";
import { useTranslation } from "next-export-i18n";
import ButtonSend from "@/common/components/ButtonSend";
import UploadFile from "@/common/components/UploadFile";
import PropTypes from "prop-types";

const ContactForm = ({ texts, cv, title, subtitle, description }) => {
    const { t } = useTranslation();

    //
    // Handlers
    //
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
            {title ? (
                <div>
                    <div className="lg:text-[54px] text-[24px] w-[270px] lg:w-[1230px]">
                        {subtitle}
                    </div>
                    <div className="lg:text-[64px] text-[37px] title-empty w-[230px] lg:w-[1230px] mb-10">
                        {title}
                    </div>
                    <div className="mb-10">{description}</div>
                </div>
            ) : (
                <div>
                    {" "}
                    <h2 className="lg:text-[54px] text-[24px] w-[270px] lg:w-[1230px]">
                        {t("contactUs.title")}
                    </h2>
                    <p className="lg:text-[64px] text-[37px] title-empty w-[230px] lg:w-[1230px] mb-10">
                        {t("contactUs.subtitle")}
                    </p>
                </div>
            )}

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
                                placeholder={t("contactUs.name")}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="relative lg:w-[440px] border-b-2 mb-8">
                            <input
                                type="text"
                                maxLength={60}
                                name={cv ? "lastname" : "email"}
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                                placeholder={
                                    cv
                                        ? t("contactUs.lastname")
                                        : t("contactUs.email")
                                }
                            />
                        </div>
                    </div>

                    <div className="lg:flex justify-center">
                        <div className="relative lg:w-[440px] border-b-2 mb-8 lg:mr-8">
                            <input
                                type="text"
                                maxLength={60}
                                name={cv ? "email" : "company?"}
                                placeholder={
                                    cv
                                        ? t("contactUs.email")
                                        : t("contactUs.company")
                                }
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="relative lg:w-[440px] border-b-2 mb-12 lg:mb-8">
                            <input
                                type="text"
                                maxLength={60}
                                name={cv ? "linkedin" : "role"}
                                placeholder={
                                    cv
                                        ? t("contactUs.linkedin")
                                        : t("contactUs.role")
                                }
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    {cv && <UploadFile text={t("uploadCv")} />}

                    <div className="relative lg:w-[920px] rounded-md border-2 mx-auto">
                        <textarea
                            name="howCanWeHelpYou"
                            id="text-help-you"
                            maxLength={1000}
                            placeholder={
                                cv
                                    ? t("contactUs.weWantToKnowAboutYou")
                                    : t("contactUs.howCanWeHelpYou")
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
    texts: PropTypes.object,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string,
};

export default ContactForm;
