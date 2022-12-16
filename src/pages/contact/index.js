/* eslint-disable @next/next/no-img-element */
import { useTranslation } from "next-export-i18n";

export default function Contact() {
    const { t } = useTranslation();
    return (
        <section className="flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28 relative pt-28 pb-12 xl:pb-40">
            {/* <ScheduleContact /> */}
            <div>
                <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl xl:text-7xl">
                    Nuestro Contacto
                </h1>
            </div>

            <div className="w-80 md:w-72 lg:w-[440px] xl:w-[550px]">Card</div>
        </section>
    );
}
