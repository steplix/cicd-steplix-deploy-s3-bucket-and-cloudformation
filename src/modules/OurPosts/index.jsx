import React from 'react';
import Title from '@/common/components/Title/Gradient';
import PortfolioCarousel from "@/common/components/PortfolioCarousel";
import PostCard from "@/common/components/PostCard";
import { useTranslation } from "next-export-i18n";

const OurPosts = () => {
    const { t } = useTranslation();
    const posts = t("OurPostsSay.posts");
    let postNumber = 0;

    return (
        <section className="container px-4 md:px-0">
            <div className="mb-6">
                <Title content={t("OurPostsSay.title")} borderPosition="bottom" underlineFixed size="text-[26px] leading-[26px] lg:text-[32px] lg:leading-[48px]"/>
            </div>
            <div className="mb-[72px] lg:mb-[78px] xl:mb-[72px]">
                <PortfolioCarousel carouselClassName={"postsCarousel"}>
                    {
                        posts.map(({publishingAt, description, url}) => {
                            postNumber++;
                            return(
                                <div className="keen-slider__slide number-slide" key={`post-${postNumber}`}>
                                    <PostCard
                                        publishingAt={publishingAt}
                                        description={description}
                                        url={url}
                                    />
                                </div>
                            );
                        })
                    }
                </PortfolioCarousel>
            </div>
        </section>
    )
}

export default OurPosts;