import propTypes from "prop-types";
import Icon from "@/components/Icon";

const Service = ({ name, description, iconName }) => (
  <div className="flex flex-col items-center gap-4 lg:gap-6 w-[218px] lg:w-[272px] xl:w-[346.67px] min-h-[152.59px]">
    <Icon name={iconName} className="w-[72px] h-auto" />
    <div className="flex flex-col items-center gap-2">
      <h4 className="font-sofia font-semibold text-white text-xl leading-6">
        {name}
      </h4>
      <p className="font-poppins font-normal text-white text-center w-[211px] text-base leading-[1.3rem]">
        {description}
      </p>
    </div>
  </div>
);

Service.propTypes = {
  name: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  iconName: propTypes.string.isRequired,
};

export default Service;
