import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

import Avatar from "@/common/components/Avatar";
import TextField from "@/common/components/TextField";
import ButtonCard from "@/common/components/ButtonCard";
import Icon from "../Icon";

const CardContact = ({
  email,
  name,
  surname,
  cornerIconName,
  imgSrc,
  onClickButton,
  onClickSocialMedia,
}) => {
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
      <div className="w-80 md:w-72 lg:w-[440px] xl:w-[550px]">
        <div className="relative bg-white shadow-steplix rounded-3xl p-4">
          <div className="flex justify-between px-4">
            <div className="flex gap-5 items-center mt-4">
              <Avatar isLoading={isLoadingImg} name={name} surname={surname} imgSrc={imgSrc} />
              <div className="flex flex-col">
                <p className="text-black text-base font-bold">{name}</p>
                <p className="text-black text-base font-bold">{surname}</p>
              </div>
            </div>
            <div
              className="bg-grey-transparent rounded-full w-8 h-8 flex items-center justify-center absolute top-0 right-0 mt-4 mr-7"
              onClick={onClickSocialMedia}>
              <Icon name={cornerIconName} className="w-4" />
            </div>
          </div>
          <div className="px-4">
            <TextField email={email} />
          </div>
          <div className="flex justify-center mt-8">
            <ButtonCard
              label="Agendar Cita"
              iconName="calendar"
              customImageClass="w-4"
              clickEvent={onClickButton}
            />
          </div>
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
  onClickButton: PropTypes.func.isRequired,
  onClickSocialMedia: PropTypes.func,
};

CardContact.defaultProps = {
  email: "correo@steplix.com",
  name: "Nombre",
  surname: "Apellido",
  cornerIconName: "linkedinBlue",
  onClickButton: () => console.log("Click event is Required"),
};

export default CardContact;
