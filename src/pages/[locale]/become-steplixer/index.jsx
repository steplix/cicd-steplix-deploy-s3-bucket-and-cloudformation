import { useTranslation } from "@/common/lib/i18n";
import { useAccordion } from "@/common/hooks/useAccordion";
import HeadTag from "@/common/components/HeadTag";
import Gradient from "@/common/components/Title/Gradient";
import BecomeCard from "@/common/components/BecomeCard";
import { BECOME_BENEFITS, OUR_VALUES } from "@/common/utils/constants";
import Accordion from "@/common/components/Accordion";
import TitleIcon from "@/common/components/Title/TitleIcon";
import CardContact from "@/common/components/CardContact";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import { copyToClipboard, openLink } from "@/common/utils/methods";

function BecomeSteplixerPage({ locale }) {
  const { t } = useTranslation(locale);
  const { ref, closeAccordion } = useAccordion();

  return (
    <>
      <HeadTag
        title={t("metaTags.becomeSteplixer.title")}
        description={t("metaTags.becomeSteplixer.description")}
        keywords={t("metaTags.becomeSteplixer.keywords")}
      />
      <section className="section-container w-full container mx-auto flex-col space-y-24">
        <Gradient
          borderPosition="left"
          content={t("BecomeSteplixerSection.title")}
          borderWidth="border-2"
          size="text-4xl"
          height="h-[32px]"
        />

        <div className="my-10 lg:grid lg:grid-cols-2 lg:gap-x-6">
          {BECOME_BENEFITS.map((item, index) => (
            <BecomeCard
              key={index + 1}
              icon={item.icon}
              benefit={item.benefit}
              locale={locale}
            />
          ))}
        </div>

        <Gradient
          borderPosition="left"
          content={t("BecomeSteplixerSection.title2")}
          borderWidth="border-2"
          size="text-[26px]"
          height="h-[32px] mt-[72px] mb-[32px]"
        />
        <Accordion chevron closeAccordion={closeAccordion} ref={ref}>
          {OUR_VALUES.map((item, index) => (
            <Accordion.Item key={index} id={index + 1}>
              <Accordion.Header>
                <TitleIcon
                  icon={item.icon}
                  title={t(`SteplixInternalValues.${item.value}.title`)}
                  spacing="gap-4"
                  titleSize="text-base"
                />
              </Accordion.Header>
              <Accordion.Body>
                <p className="mt-4">
                  {t(`SteplixInternalValues.${item.value}.description`)}
                </p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
        <div className="mt-[72px] flex flex-col gap-2">
          <p className="font-poppins font-bold text-[26px] text-center text-purple">
            {t("BecomeSteplixerSection.sendCV.title")}
          </p>

          <p className="font-poppins font-bold text-[26px] text-center text-purple">
            {t("BecomeSteplixerSection.sendCV.subtitle")}
          </p>
        </div>
        <div className="mt-8 mb-[72px] w-[328px] mx-auto my-0">
          <CardContact
            email="rrhh@steplix.com"
            name="Josefina"
            surname="Salimei"
            imgSrc={"/assets/img/become/josefina-salimei.png"}
            onClickCopyButton={() => copyToClipboard("rrhh@steplix.com")}
            onClickSocialMediaButton={() =>
              openLink(
                "https://www.linkedin.com/in/josefina-salimei-6b2b07138/"
              )
            }
          />
        </div>
      </section>
    </>
  );
}

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

export default BecomeSteplixerPage;
