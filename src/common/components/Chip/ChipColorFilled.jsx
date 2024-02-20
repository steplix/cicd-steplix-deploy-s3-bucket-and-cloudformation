import PropTypes from 'prop-types';

import Icon from '../Icon';

import { chipTypes } from '@/common/utils/propTypes';

const types = {
  slim: 'chip--slim',
  medium: 'chip--medium',
  big: 'chip--big',
};

const ChipColorFilled = ({ type, background, iconName, iconColor, label, outlineColor }) => {
  return (
    <div
      className={`chip ${types[type]} ${background} ${
        outlineColor ? 'chip--outlined ' + outlineColor : ''
      }`}
    >
      {iconName && iconColor && <Icon className={`icon ${iconColor}`} name={iconName} />}
      <span>{label}</span>
    </div>
  );
};

ChipColorFilled.propTypes = {
  type: chipTypes,
  background: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  outlineColor: PropTypes.string,
};

export default ChipColorFilled;
