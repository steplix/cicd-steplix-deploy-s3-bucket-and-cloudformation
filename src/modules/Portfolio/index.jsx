import Banner from '../Home/Banner';

import TechnologiesSlider from '@/common/components/TechnologiesSlider';
import { repeatImageLogos } from '@/common/utils/methods';
import { clientsLogos, SPACE_BETWEEN_CARDS } from '@/common/utils/constants';

const Portfolio = () => {
  return (
    <section className="mb-[72px] lg:mt-0">
      <>
        <Banner />

        <div className="container mt-[72px]">
          <TechnologiesSlider
            images={repeatImageLogos(clientsLogos, 20)}
            imgClass="w-24"
            slides={8}
            spacingBeetWeenSlides={SPACE_BETWEEN_CARDS}
          />
        </div>
      </>
    </section>
  );
};

export default Portfolio;
