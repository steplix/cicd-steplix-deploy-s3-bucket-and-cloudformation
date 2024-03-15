import ChipColorFilled from '../Chip/ChipColorFilled';

export const WhatWeDoCard = () => {
  return (
    <div class="w-full pl-8 pr-4 pt-6 pb-4 bg-white rounded-[20px] shadow flex-col justify-start items-end gap-6 inline-flex">
      <ChipColorFilled
        background="bg-transparent"
        label="MVP-42k"
        outlineColor="border-purple"
        type="slim"
      />
    </div>
  );
};
