/* eslint-disable @next/next/no-img-element */
import Icon from "@/common/components/Icon";
import TextField from "@/common/components/TextField";
import { useTranslation } from "@/common/lib/i18n";
import NextLink from "next/link";
import Gradient from "@/common/components/Title/Gradient";
import CardContact from "@/common/components/CardContact";
import PhotoCarousel from "@/common/components/PhotoCarousel";
import { getPathSlugs } from "@/common/utils/getPathSlugs";
import { CARD_CONTACT, PHOTO_CAROUSEL } from "@/common/utils/constants";

const icons = {
  mail: <Icon name="mail" className="w-4" fill="#3C1053" />,
  phone: <Icon name="phone" className="w-4" />,
  copy: <Icon name="copy" className="w-4" />,
  send: <Icon name="send" className="w-4" />,
};

const Contact = ({ locale }) => {
  const { t } = useTranslation(locale);

  const onClickCopyButton = (text) => {
    navigator.clipboard.writeText(text);
  };

  const onClickSocialMediaButton = (url) => {
    window.open(url, "_blank");
  };

  const onClickCalendarButton = (url) => {
    window.open(url, "_blank");
  };

  return (
    <section className="flex flex-col relative w-full mx-auto">
      <main className="container section-container">
        <Gradient
          borderPosition="left"
          content={t("CardContactSection.subtitle")}
          borderWidth="border-2"
          size="text-4xl"
          height="h-[32px]"
        />

        <div className="my-5">
          <p>{t("CardContactSection.description")}</p>
          <p className="font-bold mt-4">{t("CardContactSection.phrase")}</p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-[72px] lg:grid lg:grid-cols-2">
          {CARD_CONTACT.map((item) => (
            <CardContact
              key={item.email}
              name={item.name}
              surname={item.surname}
              imgSrc={item?.imgSrc}
              email={item.email}
              onClickCopyButton={() => onClickCopyButton(item.email)}
              onClickSocialMediaButton={() =>
                onClickSocialMediaButton(item.linkedin)
              }
              onClickCalendarButton={() => onClickCalendarButton(item.meeting)}
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
          <PhotoCarousel photoArray={PHOTO_CAROUSEL} />
        </div>
        <section className="lg:flex lg:gap-8">
          <div>
            <div className="flex justify-center w-full">
              <div className="w-full md:w-[560px] lg:w-[513px] xl:w-[739px]  mx-auto my-0">
                <NextLink href="https://g.page/steplix?share">
                  <a target="_blank">
                    <img
                      src="/assets/img/map.svg"
                      alt="map"
                      className="object-cover sm:h-[190px] w-full rounded-2xl lg:h-[280px]"
                    />
                  </a>
                </NextLink>
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
                clickEvent={() => onClickCopyButton("hello@steplix.com")}
              />
              <TextField
                text="+54 (11) 5367-4369"
                rightIcon={icons.send}
                leftIcon={icons.phone}
                clickEvent={() => onClickCopyButton("+54 (11) 5367-4369")}
              />
            </div>
          </div>
        </section>
      </main>
    </section>
  );
}

export async function getStaticPaths(...args) {
    const pathsWithLocale = getPathSlugs();
    return {
      paths: pathsWithLocale,
      fallback: false
    };
  }
  
export async function getStaticProps({ params }) {
    return {
      props: {
        ...params
      }
    };
  }

export default Contact;
