import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ content, secondContent, size, borderPosition = 'bottom', borderWidth, height = '50px', leading = 'leading-10', color = 'title-gradient' }) => {
  return borderPosition === 'bottom' ? (
    <>
      <div className="title-gradient pb-[8px]">
        <h2 className={`${size} ${leading} font-bold`}>{content}</h2>
        {secondContent && <h2 className={`${size} ${leading} font-bold`}>{secondContent}</h2>}
      </div>
      <div className={`${borderWidth} h-[2px] bg-[#00A7E1]`} />
    </>
  ) : (
    <div className={`flex ${height} items-center`}>
      <div className="w-[3px] h-full bg-[#00A7E1]" />
      <div className={`${color} pl-4`}>
        <h2 className={`${size} ${leading} font-bold`}>{content}</h2>
        {secondContent && <h2 className={`${size} ${leading} font-bold`}>{secondContent}</h2>}
      </div>
    </div>
  );
};

//
// PropTypes
//
Title.propTypes = {
  content: PropTypes.string.isRequired,
  secondContent: PropTypes.string,
  size: PropTypes.string,
  height: PropTypes.string,
  borderPosition: PropTypes.oneOf(['bottom', 'left']),
  borderWidth: PropTypes.string.isRequired,
  leading: PropTypes.string,
  color: PropTypes.string,
};

export default Title;
