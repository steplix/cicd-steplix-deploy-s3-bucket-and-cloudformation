import { useTranslation } from "next-export-i18n";
import Flags from "@/common/components/Flags";
import EverythingStartsWithAnIdea from "@/modules/process/EverythingStartsWithAnIdea";
import HoDoWeDoIt from "@/modules/process/HowDoWEDoIt";
import ScrumFramework from "@/modules/process/ScrumFramework";
import StepsToTheTop from "@/modules/process/StepsToTheTop";
import HeadTag from "@/common/components/HeadTag";

export default function Process() {
    const { t } = useTranslation();
    return (
        <>
            <HeadTag title={t("metaTags.process.title")} description={t("metaTags.process.description")} keywords={t("metaTags.process.keywords")} />
            <div className="flex flex-col space-y-14 md:space-y-8 lg:space-y-12 xl:space-y-28 relative">
                <EverythingStartsWithAnIdea />
                <StepsToTheTop />
                <HoDoWeDoIt />
                <ScrumFramework data={t("process.scrumFramework")} />
                <Flags />
            </div>
        </>
    );
}
