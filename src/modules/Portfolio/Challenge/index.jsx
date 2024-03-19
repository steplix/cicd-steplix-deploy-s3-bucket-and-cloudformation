import { PropTypes } from 'prop-types';

import Title from '@/common/components/Title/Gradient';

export const ChanllengeSection = ({ title, text, imageClassname }) => {
  return (
    <section className="flex flex-col gap-4 pt-8 pb-6" id="challenge">
      <Title underlineFixed content={title} size="text-[26px]" />
      <p className="font-poppins text-mobile text-black">{text}</p>
      <div className={`w-full h-[275px] ${imageClassname}`} />
    </section>
  );
};

ChanllengeSection.prototype = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageClassname: PropTypes.string.isRequired,
};
