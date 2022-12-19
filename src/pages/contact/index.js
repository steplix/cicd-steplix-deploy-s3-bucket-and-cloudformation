/* eslint-disable @next/next/no-img-element */
import Icon from "@/common/components/Icon";
import TextField from "@/common/components/TextField";
import { useTranslation } from "next-export-i18n";
import NextLink from "next/link";
import Inverted from "@/common/components/Title/Inverted";
import Gradient from "@/common/components/Title/Gradient";

const icons = {
    mail: <Icon name="mail" className="w-4" />,
    phone: <Icon name="phone" className="w-4" />,
    copy: <Icon name="copy" className="w-4" />,
    send: <Icon name="send" className="w-4" />,
};

export default function Contact() {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28 relative pt-16 pb-12 xl:pb-40">
            <div className="header-gradient flex p-8">
                <Inverted content="Nuestro" secondContent="Contacto" size="text-5xl" />
            </div>
            <div className="container px-2">
                <Gradient
                    borderPosition="left"
                    content="Cómo nos contactas"
                    borderWidth="border-2"
                    size="text-4xl"
                    height="h-[32px]"
                />

                <div className="my-5">
                    <p>Agenda una llamada o comunícate por mail con nuestro equipo comercial.</p>
                    <p className="font-bold mt-4">¡Queremos escuchar tus ideas!</p>
                </div>
                <div className="flex justify-center flex-wrap gap-4 mb-20">
                    <div className="w-80 md:w-72 lg:w-[440px] xl:w-[550px] h-40 border-2 grid place-content-center rounded-2xl">
                        Card
                    </div>

                    <div className="w-80 md:w-72 lg:w-[440px] xl:w-[550px] h-40 border-2 grid place-content-center rounded-2xl">
                        Card
                    </div>

                    <div className="w-80 md:w-72 lg:w-[440px] xl:w-[550px] h-40 border-2 grid place-content-center rounded-2xl">
                        Card
                    </div>

                    <div className="w-80 md:w-72 lg:w-[440px] xl:w-[550px] h-40 border-2 grid place-content-center rounded-2xl">
                        Card
                    </div>
                </div>

                <Gradient
                    borderPosition="left"
                    content="Nuestra oficina"
                    borderWidth="border-2"
                    size="text-4xl"
                    height="h-[32px]"
                />
                <div className="flex justify-center my-8">
                    <div className="w-80 md:w-72 lg:w-[440px] xl:w-[550px] h-40 border-2 grid place-content-center rounded-2xl">
                        Carrousel
                    </div>
                </div>
                <div className="flex justify-center w-80 md:w-72 lg:w-[440px] xl:w-[550px] border-2 rounded-2xl mx-auto my-0">
                    <NextLink href="https://g.page/steplix?share">
                        <a target="_blank">
                            <img src="assets/img/map.svg" alt="map" />
                        </a>
                    </NextLink>
                </div>
                <div className="flex gap-2 items-center justify-center mt-5">
                    <Icon name="mapPin" className="w-3" />
                    <p className="text-xs">Costa rica 4999, Palermo, Buenos Aires. Argentina.</p>
                </div>

                <div className="flex gap-2 items-center justify-center mt-5 flex-wrap">
                    <TextField
                        email="hello@steplix.com"
                        rightIcon={icons.copy}
                        leftIcon={icons.mail}
                    />
                    <TextField
                        email="+54 (11) 5367-4369"
                        rightIcon={icons.send}
                        leftIcon={icons.phone}
                    />
                </div>

                <div className="text-center text-blue font-bold mt-8 flex gap-4 items-center justify-center">
                    <NextLink href="/">Conviertete en Steplixer</NextLink>
                    <Icon name="chevronDown" className="w-4 rotate-[270deg]" />
                </div>
            </div>
        </section>
    );
}
