import HeadTag from '@/common/components/HeadTag';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import Icon from '@/components/Icon';
// import Chip from '@/common/components/TechnologyChip';
import ChipColorFilled from '@/common/components/Chip/ChipColorFilled';
import Title from '@/common/components/Title/Gradient';
import ButtonCard from '@/common/components/ButtonCard';
import { useTranslation } from '@/common/lib/i18n';

// import { portfolioCards } from '@/common/utils/constants';

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
        <div className="flex items-end w-full h-[274.5px] mt-[-56px] header-gradient">
          <picture className="w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259px] mb-[-16px]">
            {/* <source media="(min-width: 1280px)" srcSet={`/assets/img/portfolio/${name}-xl.webp`} />
            <source media="(min-width: 1024px)" srcSet={`/assets/img/portfolio/${name}-md.webp`} />
            <source media="(min-width: 640px)" srcSet={`/assets/img/portfolio/${name}-md.webp`} /> */}
            <img
              alt={t(`portfolio.cards.sura.imageAlt`)}
              className="w-full"
              src={`/assets/img/portfolio/sura/header.svg`}
            />
          </picture>
        </div>
        <div className="container">
          <div className="mountain-portfolio">
            <section className="flex flex-col items-center gap-6 pt-6" id="heading">
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
              <picture className="w-full rounded-tl-[20px] rounded-tr-[20px]">
                {/* <source media="(min-width: 1280px)" srcSet={`/assets/img/portfolio/${name}-xl.webp`} />
                <source media="(min-width: 1024px)" srcSet={`/assets/img/portfolio/${name}-md.webp`} />
                <source media="(min-width: 640px)" srcSet={`/assets/img/portfolio/${name}-md.webp`} /> */}
                <img
                  alt={t(`portfolio.cards.sura.imageAlt`)}
                  className="w-full"
                  src={`/assets/img/portfolio/sura/challenge.webp`}
                />
              </picture>
            </section>
            <section className="flex flex-col gap-8 pt-4 pb-8" id="how-we-deal-with-it">
              <Title
                underlineFixed
                content="¿Cómo"
                secondContent="lo abordamos?"
                size="text-[26px]"
              />
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-1">
                  <span className="font-poppins text-mobile font-semibold">Marco de trabajo:</span>
                  <div className="flex gap-2 px-4">
                    <Icon className="icon text-blue w-[24px] h-[24px]" name="scrum" />
                    <span className="font-poppins text-xl font-semibold leading-6">Scrum</span>
                  </div>
                </div>
                <div className="flex flex-col gap-10">
                  <div className="flex flex-wrap gap-2">
                    <ChipColorFilled
                      background="bg-white"
                      iconColor="text-blue"
                      iconName="backend"
                      label="Back end"
                      type="medium"
                    />
                    <ChipColorFilled
                      background="bg-white"
                      iconColor="text-blue"
                      iconName="frontend"
                      label="Front end"
                      type="medium"
                    />
                    <ChipColorFilled
                      background="bg-white"
                      iconColor="text-blue"
                      iconName="techlead"
                      label="Tech Lead"
                      type="medium"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="font-poppins text-mobile font-semibold">Tecnología</span>
                    <div className="flex gap-6">
                      <img alt="Node Logo" className="w-16" src="/static/technologies/nodejs.svg" />
                      <img alt="Azure Logo" className="w-20" src="/static/technologies/azure.svg" />
                      <img
                        alt="Angular Logo"
                        className="w-28"
                        src="/static/technologies/angularjs.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="flex flex-col gap-4 py-6" id="what-do-we-build">
              <Title underlineFixed content="¿Qué construimos?" size="text-[26px]" />
              <div className="flex flex-col gap-6">
                <p className="font-poppins text-mobile text-black">
                  Junto al cliente diseñamos y desarrollamos una herramienta que le permite a muchos
                  productores de seguro tener{' '}
                  <span className="font-semibold">mayor agilidad y dinamismo</span> al cotizar las
                  cuotas para sus clientes.
                </p>
                <p className="font-poppins text-black">
                  Creamos un <span className="text-blue font-semibold">cotizador online.</span>
                </p>
                <div className="flex items-center gap-3">
                  <ChipColorFilled
                    background="bg-transparent"
                    label="Web responsive"
                    outlineColor="border-purple"
                    type="medium"
                  />
                  <p>+</p>
                  <ChipColorFilled
                    background="bg-transparent"
                    label="API"
                    outlineColor="border-purple"
                    type="medium"
                  />
                </div>
                <p className="font-poppins text-mobile text-black">
                  La interfaz web y la API permiten acercar a los productores de seguros llevando a
                  sus dispositivos móviles la información que necesitan y{' '}
                  <b>reduciendo la complejidad y los tiempos requeridos</b> para realizar
                  cotizaciones.
                </p>
                <picture className="w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259px]">
                  {/* <source media="(min-width: 1280px)" srcSet={`/assets/img/portfolio/${name}-xl.webp`} />
                  <source media="(min-width: 1024px)" srcSet={`/assets/img/portfolio/${name}-md.webp`} />
                  <source media="(min-width: 640px)" srcSet={`/assets/img/portfolio/${name}-md.webp`} /> */}
                  <img
                    alt={t(`portfolio.cards.sura.imageAlt`)}
                    className="w-full"
                    src={`/assets/img/portfolio/sura/product.svg`}
                  />
                </picture>
                <ButtonCard
                  ariaLabel={t('contact.scheduleAriaLabel')}
                  clickEvent={() => {}}
                  customImageClass="w-4"
                  iconName="send"
                  iconPosition="right"
                  label={t('ButtonCardContact')}
                />
              </div>
            </section>
            <section className="flex flex-col gap-4 pt-8 pb-[4.5rem]" id="what-do-we-build">
              <Title underlineFixed content="Más proyectos" size="text-[26px]" />
            </section>
          </div>
        </div>
      </TransitionWrapper>
    </>
  );
}
