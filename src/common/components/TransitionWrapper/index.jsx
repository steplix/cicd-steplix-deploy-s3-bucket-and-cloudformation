import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

import { pageTransition } from '@/common/lib/animation';

const TransitionWrapper = ({ className, children }) => {
  return (
    <motion.main
      animate="show"
      className={className}
      exit="hide"
      initial="hidden"
      variants={pageTransition}
    >
      {children}
    </motion.main>
  );
};

TransitionWrapper.propTypes = {
  className: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TransitionWrapper;
