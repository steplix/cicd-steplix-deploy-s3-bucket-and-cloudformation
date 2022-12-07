import HeadTag from "@/common/components/HeadTag";
import { useTranslation } from "next-export-i18n";
import {
    DigitalSherpas,
    MissionVision,
    OurValues,
    Philosophy,
} from "@/modules/about-us";
import CollageAboutUs from "@/common/components/CollageAboutUs";
import Flags from "@/common/components/Flags";

export default function AboutUs() {
    const { t } = useTranslation();
    return (
        <>
            <HeadTag title={t("metaTags.aboutUs.title")} description={t("metaTags.aboutUs.description")} keywords={t("metaTags.aboutUs.keywords")} />
            <div className="flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28 relative pt-28 pb-12 xl:pb-40">
                <DigitalSherpas />
                <Philosophy />
                <MissionVision />
                <OurValues />
                <div className="flex xl:hidden">
                    <CollageAboutUs />
                </div>
                <Flags />
            </div>
        </>
    );
}
