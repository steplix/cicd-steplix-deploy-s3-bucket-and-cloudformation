import parse from 'html-react-parser';

import HeadTag from '@/common/components/HeadTag';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import ChipColorFilled from '@/common/components/Chip/ChipColorFilled';
import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/common/lib/i18n';
import { PORTFOLIO_CARDS, SURA_CHIPS } from '@/common/utils/constants';
import PortfolioCard from '@/common/components/PortfolioCard';
import PortfolioCarousel from '@/common/components/PortfolioCarousel';
import { PortfolioHeader } from '@/modules/Portfolio/PortfoloHeader';
import { PortfolioHeading } from '@/modules/Portfolio/PortfolioHeading';
import { getPathSlugs } from '@/common/utils/getPathSlugs';
import { ChanllengeSection } from '@/modules/Portfolio/Challenge';
import { ApproachSection } from '@/modules/Portfolio/Approach';

export default function SuraPage({ locale }) {
  const { t } = useTranslation(locale);

  return (
    <>
      <HeadTag
        metaContent={{
          title: t('metaTags.portfolio.clients.sura.title'),
          description: t('metaTags.portfolio.clients.sura.description'),
          keywords: t('metaTags.portfolio.clients.sura.keywords'),
        }}
      />
      <TransitionWrapper className="flex flex-col relative w-full mx-auto">
        <PortfolioHeader
          alt={t('portfolio.cards.sura.imageAlt')}
          src={`/assets/img/portfolio/sura/header.svg`}
        />
        <div className="container">
          <div>
            <PortfolioHeading
              chipLabel={t('portfolio.suraClient.headingIcon')}
              iconChip="shield"
              iconName="sura"
              spanLabel={t('portfolio.suraClient.headingLabel')}
            />
            <ChanllengeSection
              imageClassname={'challenge-image-sura'}
              text={parse(t('portfolio.suraClient.challengeDescription'))}
              title={t('portfolio.challenge')}
            />
            <ApproachSection framework={SURA_CHIPS.frameWork} technology={SURA_CHIPS.technology}/>
            <section className="flex flex-col gap-4 py-4" id="what-do-we-build">
              <Title underlineFixed content="¿Qué construimos?" size="text-[26px]" />
              <div className="flex flex-col gap-6">
                <p className="font-poppins text-mobile text-black">
                  Junto al cliente diseñamos y desarrollamos una herramienta que le permite a muchos
                  productores de seguro tener{' '}
                  <span className="font-semibold">mayor agilidad y dinamismo</span> al cotizar las
                  cuotas para sus clientes.
                </p>
                <div className="flex flex-col gap-6 lg:flex-row justify-center">
                  <p className="font-poppins text-black">
                    Creamos un <span className="text-blue font-semibold">cotizador online.</span>
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-[184px]">
                      <ChipColorFilled
                        background="bg-transparent"
                        label="Web responsive"
                        outlineColor="border-purple"
                        type="slim"
                      />
                    </div>
                    <p>+</p>
                    <div className="w-[74px]">
                      <ChipColorFilled
                        background="bg-transparent"
                        label="API"
                        outlineColor="border-purple"
                        type="slim"
                      />
                    </div>
                  </div>
                </div>
                <p className="font-poppins text-mobile text-black">
                  La interfaz web y la API permiten acercar a los productores de seguros llevando a
                  sus dispositivos móviles la información que necesitan y{' '}
                  <b>reduciendo la complejidad y los tiempos requeridos</b> para realizar
                  cotizaciones.
                </p>
                <div className="h-[240px] sm:h-[240px] proyect-image" />
              </div>
            </section>
            <section className="flex flex-col pt-12 gap-4" id="what-do-we-build">
              <Title underlineFixed content="Más proyectos" size="text-[26px]" />
              <PortfolioCarousel hasArrows carouselClassName={' sm:h-[500px]'}>
                {PORTFOLIO_CARDS.map(({ name, industryIconName, iconBrandClass }) => {
                  return (
                    <div
                      key={name}
                      className="keen-slider__slide rounded-[20px] flex justify-center items-center"
                    >
                      <PortfolioCard
                        iconBrandClass={iconBrandClass}
                        industryIconName={industryIconName}
                        name={name}
                      />
                    </div>
                  );
                })}
              </PortfolioCarousel>
            </section>
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
}

// eslint-disable-next-line no-unused-vars
export async function getStaticPaths(...args) {
  const pathsWithLocale = getPathSlugs();

  return {
    paths: pathsWithLocale,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
