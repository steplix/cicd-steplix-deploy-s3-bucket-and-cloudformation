import HeadTag from '@/common/components/HeadTag';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import Icon from '@/components/Icon';
import ChipColorFilled from '@/common/components/Chip/ChipColorFilled';
import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/common/lib/i18n';
import { PORTFOLIO_CARDS } from '@/common/utils/constants';
import PortfolioCard from '@/common/components/PortfolioCard';
import PortfolioCarousel from '@/common/components/PortfolioCarousel';

export default function Client({ locale }) {
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
        <div className="flex items-end h-[272px] md:h-[290px] lg:h-[412px] mt-[-56px] md:mt-[-62px] lg:mt-[-100px] header-gradient justify-center">
          <picture className="rounded-tl-[20px] rounded-tr-[20px] h-[197px] md:h-[230px] lg:h-[321px] mb-[-16px]">
            <img
              alt={t(`portfolio.cards.sura.imageAlt`)}
              className="w-full h-full"
              src={`/assets/img/portfolio/sura/header.svg`}
            />
          </picture>
        </div>
        <div className="container">
          <div>
            <section
              className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12 pt-6 lg:justify-center"
              id="heading"
            >
              <Icon className="w-[9.86rem] h-14" name="sura" />
              <div className="flex items-center gap-4">
                <ChipColorFilled
                  background="bg-blue-light"
                  iconColor="text-blue"
                  iconName="shield"
                  label="Insurance"
                  type="slim"
                />
                <span className="font-poppins text-mobile font-semibold">Cotizador online</span>
              </div>
            </section>
            <section className="flex flex-col gap-4 pt-8 pb-6" id="challenge">
              <Title underlineFixed content="¿Cuál fue el desafío?" size="text-[26px]" />
              <p className="font-poppins text-mobile text-black">
                Las personas productoras de seguros necesitaban utilizar una herramienta digital que
                <span className="font-semibold"> facilite y ayude en la tarea de cotización.</span>
              </p>
              <div className="w-full h-[275px] challenge-image-sura" />
            </section>
            <section
              className="flex flex-col gap-6 py-4 mountain-portfolio"
              id="how-we-deal-with-it"
            >
              <Title underlineFixed content="¿Cómo lo abordamos?" size="text-[26px]" />
              <div className="flex flex-col xl:flex-row gap-6 xl:gap-12 pb-10">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Icon className="icon text-blue w-[16px] h-[16px]" name="backend" />
                    <span className="font-poppins text-mobile font-normal text-purple">
                      Marco de trabajo:
                    </span>
                  </div>
                  <div className="w-16">
                    <ChipColorFilled
                      background="bg-transparent"
                      borderWidth="2"
                      label="Scrum"
                      outlineColor="border-purple"
                      type="slim"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Icon className="icon text-blue w-[16px] h-[16px]" name="diversity" />
                    <span className="font-poppins text-mobile font-normal text-purple">
                      Equipo:
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <ChipColorFilled
                        background="bg-transparent"
                        borderWidth="2"
                        label="Back end"
                        outlineColor="border-purple"
                        type="slim"
                      />
                    </div>
                    <div>
                      <ChipColorFilled
                        background="bg-transparent"
                        borderWidth="2"
                        label="Front end"
                        outlineColor="border-purple"
                        type="slim"
                      />
                    </div>
                    <div>
                      <ChipColorFilled
                        background="bg-transparent"
                        borderWidth="2"
                        label="Tech Lead"
                        outlineColor="border-purple"
                        type="slim"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <Icon className="text-blue w-[16px] h-[17px]" name="technology" />
                    <span className="font-poppins text-mobile font-normal text-purple">
                      Tecnología:
                    </span>
                  </div>
                  <div className="flex gap-3">
                    <div>
                      <ChipColorFilled
                        background="bg-transparent"
                        borderWidth="2"
                        label="Angular"
                        outlineColor="border-purple"
                        type="slim"
                      />
                    </div>
                    <div>
                      <ChipColorFilled
                        background="bg-transparent"
                        borderWidth="2"
                        label="NodeJS"
                        outlineColor="border-purple"
                        type="slim"
                      />
                    </div>
                    <div>
                      <ChipColorFilled
                        background="bg-transparent"
                        borderWidth="2"
                        label="Azure"
                        outlineColor="border-purple"
                        type="slim"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
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
