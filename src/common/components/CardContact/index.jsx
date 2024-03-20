import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useLanguageQuery } from 'next-export-i18n';

import Icon from '../Icon';

import { useTranslation } from '@/common/lib/i18n';
import Avatar from '@/common/components/Avatar';
import TextField from '@/common/components/TextField';
import ButtonCard from '@/common/components/ButtonCard';

const CardContact = ({
  email,
  name,
  surname,
  title,
  cornerIconName,
  imgSrc,
  imgAlt,
  onClickCalendarButton,
  onClickSocialMediaButton,
  onClickCopyButton,
  socialMediaAriaLabel,
  gtagEventName,
}) => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  const handleSocialMediaClick = () => {
    onClickSocialMediaButton();
    window.gtag('event', `click_linkedin_${gtagEventName}`);
  };

  const handleCalendarClick = () => {
    onClickCalendarButton();
    window.gtag('event', `cita_hubspot_${gtagEventName}`);
  };

  return (
    <div className="relative bg-white card--shadow rounded-3xl w-full p-6">
      <div className="flex flex-col gap-[3.375rem]">
        <div className="flex flex-col gap-6">
          <div className="relative">
            <div className="flex gap-2 items-center">
              <Avatar imgAlt={imgAlt} imgSrc={imgSrc} name={name} surname={surname} />
              <div className="flex flex-col gap-2.5">
                <div className="flex flex-col">
                  <p className="font-sofia font-medium text-black text-xl leading-6">{name}</p>
                  <p className="font-sofia font-medium text-black text-xl leading-6">{surname}</p>
                </div>
                <div>
                  <p className="text-grey-neutro text-mobile tracking-[0.03em] font-normal">
                    {title}
                  </p>
                </div>
              </div>
            </div>
            <button
              aria-label={socialMediaAriaLabel}
              className="absolute top-0 right-0 bg-grey-transparent rounded-full w-8 h-8 flex items-center justify-center cursor-pointer"
              onClick={handleSocialMediaClick}
            >
              <Icon className="w-4 h-3" name={cornerIconName} />
            </button>
          </div>
          <div>
            <TextField
              clickEvent={onClickCopyButton}
              text={email}
              toastMessage={t('contact.copyButton')}
            />
          </div>
        </div>
        {onClickCalendarButton && (
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <Icon className="w-6 h-6" name="peopleSpeak" />
              <img alt="logo" className="w-[20px] h-[20px]" src={`/assets/img/logo-es.svg`} />
              <img alt="logo" className="w-[20px] h-[20px]" src={`/assets/img/logo-en.svg`} />
            </div>
            <div className="">
              <ButtonCard
                ariaLabel={t('contact.scheduleAriaLabel')}
                clickEvent={handleCalendarClick}
                customImageClass="w-4"
                iconName="calendar"
                label={t('ButtonCardContact')}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

CardContact.propTypes = {
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  imgAlt: PropTypes.string,
  cornerIconName: PropTypes.string,
  onClickCalendarButton: PropTypes.func,
  onClickSocialMediaButton: PropTypes.func,
  onClickCopyButton: PropTypes.func,
  socialMediaAriaLabel: PropTypes.string,
  gtagEventName: PropTypes.string,
};

CardContact.defaultProps = {
  cornerIconName: 'linkedinBlue',
};

export default CardContact;
