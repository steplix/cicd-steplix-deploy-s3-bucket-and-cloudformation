import React from "react";
import TechnologiesSlider from "@/common/components/TechnologiesSlider";
import { repeatImageLogos } from "@/common/utils/methods";
import { clientsLogos, SPACE_BETWEEN_CARDS } from "@/common/utils/constants";
import Banner from "../Banner";

const Portfolio = () => {

  return (
    <section className="mb-[72px] lg:mt-[-196px]">
      <>
        <Banner />

        <div className="container mt-[72px]">
          <TechnologiesSlider
              images={repeatImageLogos(clientsLogos, 20)}
              slides={8}
              imgClass="w-24"
              spacingBeetWeenSlides={SPACE_BETWEEN_CARDS}
            />
        </div>
      </>
    </section>
  );
};

export default Portfolio;
