import HeadTag from "@/common/components/HeadTag";
import { useTranslation } from "next-export-i18n";
import MissionAndVision from "@/modules/MissionAndVision";
import Teams from "@/modules/Teams";
import OurValues from "@/modules/OurValues";
import PortfolioCarousel from "@/common/components/PortfolioCarousel";
import { portfolioCards } from "@/common/utils/constants";
import PortfolioCard from "@/common/components/PortfolioCard";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <>
            <HeadTag title={t("metaTags.aboutUs.title")} description={t("metaTags.aboutUs.description")} keywords={t("metaTags.aboutUs.keywords")} />
            <div className="py-10 px-4 md:px-0 w-full container mx-auto flex-col space-y-24">
                <MissionAndVision />

                <Teams />

                <OurValues />

                <PortfolioCarousel>
                    {
                        portfolioCards.map(({name, iconBrandClass, industryIconName}) => (
                        <PortfolioCard name={name} iconBrandClass={iconBrandClass} industryIconName={industryIconName} key={name} />
                        ))
                    }
                </PortfolioCarousel>
            </div>
        </>
    );
}
