import Avatar from "@/common/components/Avatar";
import TextField from "@/common/components/TextField";
import ButtonCard from "@/common/components/ButtonCard";
import Icon from "../Icon";
import { PropTypes } from "prop-types";
import { useRouter } from "next/router";
import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";

const CardContact = ({
  email,
  name,
  surname,
  cornerIconName,
  imgSrc,
  imgAlt,
  onClickCalendarButton,
  onClickSocialMediaButton,
  onClickCopyButton,
}) => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <>
      <div className="w-full">
        <div className="relative bg-white card--shadow rounded-3xl card--padding">
          <div className="flex justify-between px-4">
            <div className="flex gap-5 items-center mt-4">
              <Avatar
                name={name}
                surname={surname}
                imgSrc={imgSrc}
                imgAlt={imgAlt}
              />
              <div className="flex flex-col">
                <p className="text-black text-base font-bold">{name}</p>
                <p className="text-black text-base font-bold">{surname}</p>
              </div>
            </div>
            <button
              className="bg-grey-transparent rounded-full w-8 h-8 flex items-center justify-center absolute top-0 right-0 mt-4 mr-7 cursor-pointer"
              onClick={onClickSocialMediaButton}
              aria-label={t("contact.socialMediaAriaLabel")}
            >
              <Icon name={cornerIconName} className="w-4 h-3" />
            </button>
          </div>
          <div className="px-4 mb-8">
            <TextField text={email} clickEvent={onClickCopyButton} toastMessage={t("contact.copyButton")} />
          </div>
          {onClickCalendarButton && (
            <div className="flex justify-center">
              <ButtonCard
                label={t("ButtonCardContact")}
                iconName="calendar"
                customImageClass="w-4"
                clickEvent={onClickCalendarButton}
                ariaLabel={t("contact.scheduleAriaLabel")}
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
  imgAlt: PropTypes.string,
  cornerIconName: PropTypes.string,
  onClickCalendarButton: PropTypes.func,
  onClickSocialMediaButton: PropTypes.func,
  onClickCopyButton: PropTypes.func,
};

CardContact.defaultProps = {
  cornerIconName: "linkedinBlue",
};

export default CardContact;
