import HeadTag from "@/common/components/HeadTag";
import { useTranslation } from "next-export-i18n";
import MissionAndVision from "@/modules/MissionAndVision";
import Teams from "@/modules/Teams";
import OurValues from "@/modules/OurValues";
import PortfolioCarousel from "@/common/components/PortfolioCarousel";
import { portfolioCards, clientsCards } from "@/common/utils/constants";
import PortfolioCard from "@/common/components/PortfolioCard";
import TestimonialCard from "@/common/components/TestimonialCard";
import PostCard from "@/common/components/PostCard";

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <>
            <HeadTag title={t("metaTags.aboutUs.title")} description={t("metaTags.aboutUs.description")} keywords={t("metaTags.aboutUs.keywords")} />
            <div className="py-10 px-4 md:px-0 w-full container mx-auto flex-col space-y-24">
                <MissionAndVision />

                <Teams />

                <OurValues />

                <PortfolioCarousel carouselClassName={"portfolioCarousel"}>
                    {
                        portfolioCards.map(({name, iconBrandClass, industryIconName}) => (
                        <PortfolioCard name={name} iconBrandClass={iconBrandClass} industryIconName={industryIconName} key={name} />
                        ))
                    }
                </PortfolioCarousel>

                <PortfolioCarousel carouselClassName={"clientsCarousel"}>
                {clientsCards.map((element) => (
                    <div key={element.companyName} className="keen-slider__slide number-slide">
                        <TestimonialCard
                            clientImageUrl={element?.image}
                            imageAlt={`${element?.companyName} logo`}
                            clientFirstName={element?.name}
                            clientLastName={element?.lastName}
                            clientOpinion={element?.text}
                            clientCompany={element?.companyName}
                            textColor="text-yellow"
                        />
                    </div>
              ))}
                </PortfolioCarousel>

                <PortfolioCarousel carouselClassName={"postsCarousel"}>
                    <div className="keen-slider__slide number-slide">
                        <PostCard
                            publishingAt="3 de febrero de 2022"
                            description="Lacus amet, laoreet viverra id faucibus nisi cras est sit pellentesque amet in auctor ac sapien enim nulla tellus risus ornare lobortis commodo in proin in fermentum morbi at sem facilisi orci magna in sagittis, tortor ac maecenas eget etiam ullamcorper magna eu risus ipsum nec nibh lacus, suspendisse."
                            url="http://steplix.com"
                        />
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <PostCard
                            publishingAt="3 de febrero de 2022"
                            description="Lacus amet, laoreet viverra id faucibus nisi cras est sit pellentesque amet in auctor ac sapien enim nulla tellus risus ornare lobortis commodo in proin in fermentum morbi at sem facilisi orci magna in sagittis, tortor ac maecenas eget etiam ullamcorper magna eu risus ipsum nec nibh lacus, suspendisse."
                            url="http://steplix.com"
                        />
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <PostCard
                            publishingAt="3 de febrero de 2022"
                            description="Lacus amet, laoreet viverra id faucibus nisi cras est sit pellentesque amet in auctor ac sapien enim nulla tellus risus ornare lobortis commodo in proin in fermentum morbi at sem facilisi orci magna in sagittis, tortor ac maecenas eget etiam ullamcorper magna eu risus ipsum nec nibh lacus, suspendisse."
                            url="http://steplix.com"
                        />
                    </div>
                    <div className="keen-slider__slide number-slide">
                        <PostCard
                            publishingAt="3 de febrero de 2022"
                            description="Lacus amet, laoreet viverra id faucibus nisi cras est sit pellentesque amet in auctor ac sapien enim nulla tellus risus ornare lobortis commodo in proin in fermentum morbi at sem facilisi orci magna in sagittis, tortor ac maecenas eget etiam ullamcorper magna eu risus ipsum nec nibh lacus, suspendisse."
                            url="http://steplix.com"
                        />
                    </div>
                </PortfolioCarousel>
            </div>
        </>
    );
}
