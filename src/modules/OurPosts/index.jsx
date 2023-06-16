import Title from '@/common/components/Title/Gradient';
import PortfolioCarousel from '@/common/components/PortfolioCarousel';
import PostCard from '@/common/components/PostCard';
import { useTranslation } from '@/common/lib/i18n';

const OurPosts = () => {
  const { t } = useTranslation();
  const posts = t('OurPostsSay.posts');
  let postNumber = 0;

  return (
    <section className="container">
      <div>
        <Title
          underlineFixed
          borderPosition="bottom"
          content={t('OurPostsSay.title')}
          size="text-[26px] leading-[26px] lg:text-[32px] lg:leading-[48px]"
        />
      </div>
      <div className="mb-[48px]">
        <PortfolioCarousel adaptiveHeightValue={48} carouselClassName={'postsCarousel'}>
          {posts.map(({ publishingAt, description, url }) => {
            postNumber++;

            return (
              <div key={`post-${postNumber}`} className="keen-slider__slide number-slide">
                <PostCard description={description} publishingAt={publishingAt} url={url} />
              </div>
            );
          })}
        </PortfolioCarousel>
      </div>
    </section>
  );
};

export default OurPosts;
