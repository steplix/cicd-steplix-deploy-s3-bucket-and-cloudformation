import React from "react";

const ContactIndex = () => {
    return (
        <div className="text-white">
            <h2 className="text-[54px]">Contactanos para llevar juntos esa</h2>
            <p className="text-[64px] title-empty">IDEA HACIA LA CIMA</p>
            <div>
                <form className=" rounded-lg overflow-hidden p-6 lg:p-1">
                    <div className="lg:flex">
                        <div className="relative lg:w-[440px]  border-b-2 mb-8 lg:mr-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="name"
                                placeholder="Name"
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="relative lg:w-[440px] border-b-2 mb-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="email"
                                placeholder="Email "
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>

                    <div className="lg:flex">
                        <div className="relative lg:w-[440px] border-b-2 mb-8 lg:mr-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="company"
                                placeholder="Company "
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                        <div className="relative lg:w-[440px] border-b-2 mb-12 lg:mb-8">
                            <input
                                type="text"
                                maxLength={60}
                                name="role"
                                placeholder="Role "
                                className="mb-4 block w-full appearance-none focus:outline-none bg-transparent"
                            />
                        </div>
                    </div>
                    <div className="relative lg:w-[920px] rounded-md border-2 mb-12">
                        <textarea
                            name="howCanWeHelpYou"
                            id=""
                            maxLength={1000}
                            placeholder="¿How can we help you?"
                            className="mt-5 ml-3 block w-full appearance-none focus:outline-none bg-transparent h-40"
                        ></textarea>
                    </div>
                    <button className="float-right">boton</button>
                </form>
            </div>
        </div>
    );
};

export default ContactIndex;
