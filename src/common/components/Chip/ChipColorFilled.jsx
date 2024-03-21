import PropTypes from 'prop-types';

import Icon from '../Icon';

const types = {
  slim: 'chip--slim',
  medium: 'chip--medium',
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
      <span>{label}</span>
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
};

export default ChipColorFilled;
