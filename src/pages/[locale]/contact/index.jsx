/* eslint-disable @next/next/no-img-element */
import Icon from "@/common/components/Icon";
import TextField from "@/common/components/TextField";
import HeadTag from "@/common/components/HeadTag";
import { useTranslation } from "@/common/lib/i18n";
import NextLink from "next/link";
import Gradient from "@/common/components/Title/Gradient";
import CardContact from "@/common/components/CardContact";
import PhotoCarousel from "@/common/components/PhotoCarousel";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import { CARD_CONTACT, PHOTO_CAROUSEL } from "@/common/utils/constants";
import ButtonRaise from "@/common/components/ButtonRaise";
import {
  copyAndMailTo,
  copyToClipboard,
  openLink,
} from "@/common/utils/methods";
import TransitionWrapper from "@/common/components/TransitionWrapper";

const icons = {
  mail: <Icon name="mailTextField" className="w-4" fill="#3C1053" />,
  phone: <Icon name="phone" className="w-4" />,
  copy: <Icon name="copy" className="w-4" />,
  send: <Icon name="send" className="w-4" />,
  whatsapp: <Icon name="whatsapp" className="w-4" />,
};

const Contact = ({ locale }) => {
  const { t } = useTranslation(locale);
  const encodedText = encodeURIComponent(t("contact.whatsAppMessage"));
  const WHATSAPP_LINK = `https://wa.me/5491150105103?text=${encodedText}`;

  return (
    <>
      <HeadTag
        metaContent={{
          title: t("metaTags.contact.title"),
          description: t("metaTags.contact.description"),
          keywords: t("metaTags.contact.keywords"),
        }}
      />
      <TransitionWrapper className="flex flex-col relative w-full mx-auto">
        <main className="container section-container">
          <Gradient
            borderPosition="left"
            content={t("CardContactSection.subtitle")}
            borderWidth="border-2"
            size="text-4xl"
            height="h-[32px]"
          />

          <div className="mt-6 mb-10">
            <p>{t("CardContactSection.description")}</p>
            <p className="font-bold mt-4">{t("CardContactSection.phrase")}</p>
          </div>
          <div className="flex justify-center flex-wrap gap-4 mb-[72px] lg:grid lg:grid-cols-2 xl:mx-[76px] lg:mx-[64px]">
            {CARD_CONTACT.map((item) => (
              <CardContact
                key={item.email}
                name={item.name}
                surname={item.surname}
                imgSrc={item?.imgSrc}
                email={item.email}
                onClickCopyButton={() => copyToClipboard(item.email)}
                onClickSocialMediaButton={() => openLink(item.linkedin)}
                onClickCalendarButton={() => openLink(item.meeting)}
              />
            ))}
          </div>

          <Gradient
            borderPosition="left"
            content={t("CardContactSection.title2")}
            borderWidth="border-2"
            size="text-4xl"
            height="h-[32px]"
          />
          <div className="flex justify-center my-8">
            <PhotoCarousel photoArray={PHOTO_CAROUSEL} locale={locale} />
          </div>
          <section className="lg:flex lg:gap-8">
            <div>
              <div className="flex justify-center w-full">
                <div className="w-full md:w-[560px] lg:w-[513px] xl:w-[739px] mx-auto my-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.712679763581!2d-58.4320564841754!3d-34.58613596407618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5a870c199cd%3A0x7d236c1582f013b4!2sSteplix!5e0!3m2!1ses!2sar!4v1673455604016!5m2!1ses!2sar"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="sm:h-[190px] w-full rounded-2xl lg:h-[280px]"
                  />
                </div>
              </div>
            </div>

            <div className="lg:flex lg:flex-col lg:gap-4">
              <div className="flex gap-2 items-center justify-center mt-5 lg:order-2">
                <Icon name="mapPin" className="w-3 lg:w-5" />
                <p className="text-xs lg:text-base">
                  Costa rica 4999, Palermo, Buenos Aires. Argentina.
                </p>
              </div>

              <div className="flex gap-2 items-center justify-center mt-5 flex-wrap w-3/4 mx-auto my-0 lg:order-1 lg:m-0 lg:w-full">
                <TextField
                  text="hello@steplix.com"
                  rightIcon={icons.copy}
                  leftIcon={icons.mail}
                  clickEvent={() => copyAndMailTo("hello@steplix.com")}
                />
                <TextField
                  text="+54 9 1150105103"
                  rightIcon={icons.whatsapp}
                  leftIcon={icons.phone}
                  clickEvent={() => openLink(WHATSAPP_LINK)}
                />
              </div>
              <div className="lg:order-3 lg:self-end">
                <ButtonRaise
                  locale={locale}
                  customStyles="h-[37px] my-8"
                  i18nKeyText={"ButtonBecomeSteplixer"}
                  pathname="/become-steplixer"
                />
              </div>
            </div>
          </section>
        </main>
      </TransitionWrapper>
    </>
  );
};

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

export default Contact;
