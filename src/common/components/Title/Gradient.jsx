import React from "react";
import PropTypes from "prop-types";

/*
  IT'S A MUST TO PASS DIFFERENT FONT SIZES THROUGH THE DIFFERENT BREAKPOINTS
*/

const Title = ({
  content,
  secondContent,
  size,
  borderPosition = "bottom",
  height = "h-[50px]",
  leading = "leading-10",
  color = "title-gradient",
  underlineFixed
}) => {
  return borderPosition === "bottom" ? (
    <>
      <div className={`${underlineFixed ? 'underlined-title-fixed' : 'underlined-title'} ${size} ${color} leading-none`}>
        <h2>{content}</h2>
        {
          secondContent && (<h2>{secondContent}</h2>)
        }
      </div>
    </>
  ) : (
    <div className={`flex ${height} items-center`}>
      <div className="w-[3px] h-full bg-blue" />
      <div className={`${color} pl-4`}>
        <h2 className={`${size} ${leading} font-bold`}>{content}</h2>
        {secondContent && (
          <h2 className={`${size} ${leading} font-bold`}>{secondContent}</h2>
        )}
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
  size: PropTypes.string.isRequired,
  height: PropTypes.string,
  borderPosition: PropTypes.oneOf(["bottom", "left"]),
  leading: PropTypes.string,
  color: PropTypes.string,
  underlineFixed: PropTypes.bool
};

export default Title;
