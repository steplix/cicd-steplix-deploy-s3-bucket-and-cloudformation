import PropTypes from 'prop-types';

import Icon from '@/common/components/Icon';

const TitleIcon = ({ icon, title }) => {
  return (
    <div className={`flex gap-2`}>
      <Icon className="w-6" name={icon} />
      <h3 className={`text-purple font-semibold text-base xl:text-xl`}>{title}</h3>
    </div>
  );
};

TitleIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TitleIcon;
