import PropTypes from 'prop-types';

import Icon from '../Icon';

import { chipTypes } from '@/common/utils/propTypes';

const types = {
  slim: 'chip--slim',
  medium: 'chip--medium',
  big: 'chip--big',
};

const ChipColorFilled = ({ type, background, iconName, iconColor, label }) => {
  return (
    <div className={`chip ${types[type]} ${background}`}>
      <Icon className={`icon ${iconColor}`} name={iconName} />
      <span>{label}</span>
    </div>
  );
};

ChipColorFilled.propTypes = {
  type: chipTypes,
  background: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default ChipColorFilled;
