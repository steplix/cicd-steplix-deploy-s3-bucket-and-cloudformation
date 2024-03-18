import HeadTag from '@/common/components/HeadTag';
import TransitionWrapper from '@/common/components/TransitionWrapper';
import Icon from '@/components/Icon';
// import Chip from '@/common/components/TechnologyChip';
import ChipColorFilled from '@/common/components/Chip/ChipColorFilled';
import Title from '@/common/components/Title/Gradient';
import { useTranslation } from '@/pages/lib/i18n';

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
        <section className="container pt-[35px]" id="heading">
          <div className="flex flex-col items-center gap-6 ">
            <Icon className="w-[158px] h-[56px]" name="sura" />
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
          </div>
        </section>
        <section className="container flex flex-col gap-4 pt-[32px]" id="challenge">
          <Title underlineFixed content="¿Cuál fue el desafío?" size="text-[26px]" />
          <p className="font-poppins text-mobile text-black">
            Las personas productoras de seguros necesitaban utilizar una herramienta digital que
            <b> facilite y ayude en la tarea de cotización.</b>
          </p>
          <picture className="w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259px]">
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
        <section
          className="container flex flex-col gap-4 pt-[32px] pb-[72px] mountain-portfolio"
          id="how-we-deal-with-it"
        >
          <Title underlineFixed content="¿Cómo lo abordamos?" size="text-[26px]" />
          <div className="flex flex-col gap-6 pt-4 pb-4">
            <div className="flex justify-between items-center">
              <span className="font-poppins text-mobile font-semibold">Marco de trabajo</span>
              <div className="flex px-4 justify-center">
                <ChipColorFilled
                  background="bg-white"
                  iconColor="text-purple"
                  iconName="scrum"
                  label="Scrum"
                  type="big"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-poppins text-mobile font-semibold">Equipo</span>
              <div className="flex gap-2 justify-center">
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
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-poppins text-mobile font-semibold">Tecnología</span>
              <div className="flex gap-2 justify-center">
                <span>A</span>
                <span>B</span>
                <span>C</span>
              </div>
            </div>
          </div>
        </section>
        <section className="container flex flex-col gap-4 pt-[40px]" id="what-do-we-build">
          <Title underlineFixed content="¿Qué construimos?" size="text-[26px]" />
          <p className="font-poppins text-mobile text-black">
            Junto al cliente diseñamos y desarrollamos una herramienta que le permite a muchos
            productores de seguro tener mayor agilidad y dinamismo al cotizar las cuotas para sus
            clientes.
          </p>
          <picture className="w-full rounded-tl-[20px] rounded-tr-[20px] max-h-[259px]">
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
      </TransitionWrapper>
    </>
  );
}
