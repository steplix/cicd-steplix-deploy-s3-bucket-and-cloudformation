import PropTypes from 'prop-types';

import Icon from '../Icon';

const types = {
  tiny: 'chip--tiny',
  slim: 'chip--slim',
  medium: 'chip--medium',
  mediumBigText: 'chip--medium-big-text',
  big: 'chip--big',
};

const ChipColorFilled = ({
  type,
  background,
  iconName,
  iconColor,
  label,
  outlineColor,
  borderWidth,
  labelColor,
}) => {
  const chipStyle = {
    borderWidth: borderWidth ? `${borderWidth}px` : '',
  };

  return (
    <div
      className={`chip ${types[type]} ${background} ${
        outlineColor ? 'chip--outlined ' + outlineColor : ''
      }`}
      style={chipStyle}
    >
      {iconName && iconColor && <Icon className={`icon ${iconColor}`} name={iconName} />}
      <span className={`${labelColor}`}>{label}</span>
    </div>
  );
};

ChipColorFilled.propTypes = {
  type: PropTypes.string,
  background: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  iconColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  outlineColor: PropTypes.string,
  borderWidth: PropTypes.number,
  labelColor: PropTypes.string,
};

export default ChipColorFilled;
