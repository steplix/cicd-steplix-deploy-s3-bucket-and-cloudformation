/* eslint-disable @next/next/no-img-element */
import Icon from "@/common/components/Icon";
import TextField from "@/common/components/TextField";
import { useTranslation } from "next-export-i18n";
import NextLink from "next/link";
import Inverted from "@/common/components/Title/Inverted";
import Gradient from "@/common/components/Title/Gradient";
import CardContact from "@/common/components/CardContact";
import PhotoCarousel from "@/common/components/PhotoCarousel";
import { useResponsive } from "@/common/hooks/useResponsive";

const icons = {
  mail: <Icon name="mail" className="w-4" fill="#3C1053" />,
  phone: <Icon name="phone" className="w-4" />,
  copy: <Icon name="copy" className="w-4" />,
  send: <Icon name="send" className="w-4" />,
};

const PHOTO_CAROUSEL = [
  {
    src: "assets/img/contact/contact-1.png",
  },
  {
    src: "assets/img/contact/contact-2.png",
  },
  {
    src: "assets/img/contact/contact-3.png",
  },
  {
    src: "assets/img/contact/contact-4.png",
  },
  {
    src: "assets/img/contact/contact-5.png",
  },
  {
    src: "assets/img/contact/contact-6.png",
  },
];

export default function Contact() {
  const { t } = useTranslation();
  const { width } = useResponsive();
  const BREAKPOINT_WIDTH = 1024;
  const onClickCopyButton = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section className="flex flex-col relative py-0 lg:py-10 px-0 w-full mx-auto">
      {width < BREAKPOINT_WIDTH && (
        <div className="header-gradient flex">
          <div className="container py-8 px-4">
            <Inverted
              content={t("CardContactSection.pronoun")}
              secondContent={t("CardContactSection.title")}
              size="text-5xl"
            />
          </div>
        </div>
      )}
      <main className="container px-4 py-8 ">
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
        <div className="flex justify-center flex-wrap gap-4 mb-20 lg:grid lg:grid-cols-2">
          <CardContact
            name="Kevin"
            surname="Halbinger"
            email="hello@steplix.com"
            onClickTextFieldButton={() =>
              onClickCopyButton("hello@steplix.com")
            }
            onClickButton={() => console.log("click")}
          />
          <CardContact
            name="Kevin"
            surname="Halbinger"
            email="hello@steplix.com"
            onClickTextFieldButton={() =>
              onClickCopyButton("hello@steplix.com")
            }
            onClickButton={() => console.log("click")}
          />
          <CardContact
            name="Kevin"
            surname="Halbinger"
            email="hello@steplix.com"
            onClickTextFieldButton={() =>
              onClickCopyButton("hello@steplix.com")
            }
            onClickButton={() => console.log("click")}
          />
          <CardContact
            name="Kevin"
            surname="Halbinger"
            email="hello@steplix.com"
            onClickTextFieldButton={() =>
              onClickCopyButton("hello@steplix.com")
            }
            onClickButton={() => console.log("click")}
          />
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
              <div className="w-[328px] sm:w-[560px] lg:w-[513px] xl:w-[739px]  mx-auto my-0">
                <NextLink href="https://g.page/steplix?share">
                  <a target="_blank">
                    <img
                      src="assets/img/map.svg"
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

            {/* <div className="text-center text-blue font-bold font-poppins my-8 flex gap-4 items-center justify-center lg:order-3 lg:self-end lg:bg-blue lg:text-white lg:px-4 lg:py-4 lg:rounded-3xl lg:w-4/5 lg:justify-center">
              <NextLink href="/">{t("ButtonBecomeSteplixer")}</NextLink>
              <Icon
                name="chevronRight"
                className="w-4 rotate-[270deg]"
                fill="currentColor"
              />
            </div> */}
          </div>
        </section>
      </main>
    </section>
  );
}
