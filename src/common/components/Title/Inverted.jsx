import React from 'react';
import PropTypes from 'prop-types';

// TODO ubicar los titulos en cada seccion

const Title = ({ content, secondContent, size, leading = 'leading-10' }) => {
  return (
    <div className="flex">
      <p className={`${size} ${leading} font-bold pr-3 text-white`}>{content}</p>
      {secondContent && <p className={`${size} ${leading} font-bold text--outlined`}>{secondContent}</p>}
    </div>
  );
};

//
// PropTypes
//
Title.propTypes = {
  content: PropTypes.string.isRequired,
  secondContent: PropTypes.string,
  size: PropTypes.string.isRequired,
  leading: PropTypes.string,
};

export default Title;
