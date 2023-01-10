import Avatar from "@/common/components/Avatar";
import TextField from "@/common/components/TextField";
import ButtonCard from "@/common/components/ButtonCard";
import Icon from "../Icon";
import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";

const CardContact = ({
  email,
  name,
  surname,
  cornerIconName,
  imgSrc,
  onClickCalendarButton,
  onClickSocialMediaButton,
  onClickCopyButton,
}) => {
  const {query: { locale }} = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);
  const [isLoadingImg, setIsLoadingImg] = useState(true);

  useEffect(() => {
    const timeoutImg = setTimeout(() => {
      setIsLoadingImg(false);
    }, 2000);

    return () => {
      clearTimeout(timeoutImg);
    };
  }, []);

  return (
    <>
      <div className="w-full md:w-72 lg:w-full">
        <div className="relative bg-white card--shadow rounded-3xl p-4">
          <div className="flex justify-between px-4">
            <div className="flex gap-5 items-center mt-4">
              <Avatar
                isLoading={isLoadingImg}
                name={name}
                surname={surname}
                imgSrc={imgSrc}
              />
              <div className="flex flex-col">
                <p className="text-black text-base font-bold">{name}</p>
                <p className="text-black text-base font-bold">{surname}</p>
              </div>
            </div>
            <div
              className="bg-grey-transparent rounded-full w-8 h-8 flex items-center justify-center absolute top-0 right-0 mt-4 mr-7 cursor-pointer"
              onClick={onClickSocialMediaButton}
            >
              <Icon name={cornerIconName} className="w-4" />
            </div>
          </div>
          <div className="px-4 mb-8">
            <TextField text={email} clickEvent={onClickCopyButton} />
          </div>
          {onClickCalendarButton && (
            <div className="flex justify-center">
              <ButtonCard
                label={t("ButtonCardContact")}
                iconName="calendar"
                customImageClass="w-4"
                clickEvent={onClickCalendarButton}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

CardContact.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  cornerIconName: PropTypes.string,
  onClickCalendarButton: PropTypes.func,
  onClickSocialMediaButton: PropTypes.func,
  onClickCopyButton: PropTypes.func,
};

CardContact.defaultProps = {
  cornerIconName: "linkedinBlue",
};

export default CardContact;
