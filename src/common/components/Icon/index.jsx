import PropTypes from 'prop-types';

import * as Icons from './icons/index.js';

import { propTypeIconName } from '@/common/utils/propTypes';

const Icon = ({ className, name, ...props }) => {
  const SelectedIcon = Icons[name];

  return <SelectedIcon className={className} {...props} />;
};

Icon.propTypes = {
  className: PropTypes.string.isRequired,
  name: propTypeIconName.isRequired,
};

export default Icon;
