import React from 'react';
import Title from '@/common/components/Title/Gradient';
import PortfolioCarousel from "@/common/components/PortfolioCarousel";
import PostCard from "@/common/components/PostCard";
import { useTranslation } from "@/common/lib/i18n";

const OurPosts = () => {
    const { t } = useTranslation();
    const posts = t("OurPostsSay.posts");
    let postNumber = 0;

    return (
        <section className="container">
            <div>
                <Title content={t("OurPostsSay.title")} borderPosition="bottom" underlineFixed size="text-[26px] leading-[26px] lg:text-[32px] lg:leading-[48px]"/>
            </div>
            <div className="mb-[48px]">
                <PortfolioCarousel carouselClassName={"postsCarousel"} adaptiveHeightValue={48}>
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