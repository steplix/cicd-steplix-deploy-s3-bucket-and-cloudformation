import ChipColorFilled from '../Chip/ChipColorFilled';
import Icon from '../Icon';

export const FlipCardDescriptions = ({ description, chips }) => {
  return (
    <div className="flex flex-col h-[184px] sm:h-[217px] lg:h-[184px] pt-8 px-4 pb-6 justify-between">
      <p className=" font-poppins text-[13px] leading-[16.9px] text-purple-dark text-left">
        {description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          {chips.map((chip, i) => (
            <ChipColorFilled
              key={i}
              borderWidth="1.5"
              label={chip}
              labelColor="text-purple-dark"
              outlineColor="border-purple-dark"
              type="tiny"
            />
          ))}
        </div>
        <Icon className="h-4 w-4 rotate-180" name="chevronRight" />
      </div>
    </div>
  );
};
