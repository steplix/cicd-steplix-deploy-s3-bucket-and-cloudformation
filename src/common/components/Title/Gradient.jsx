import React from "react";
import Heading from "@/components/Heading";
import PropTypes from "prop-types";
import { useResponsive } from "@/common/hooks/useResponsive";

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
  underlineFixed,
  type
}) => {

  const { width } = useResponsive();
  const TITLE_BREAKPOINT_WIDTH = 1024;

  type = width < TITLE_BREAKPOINT_WIDTH ? "h2" : type

  return borderPosition === "bottom" ? (
    <>
      <div className={`${underlineFixed ? 'underlined-title-fixed' : 'underlined-title'} ${size} ${color} leading-none`}>
        <Heading type={type || "h2"}>
          {
            secondContent ? (
            <span>
              {content}
              <br />
              {secondContent}
            </span>
            ) : <span>{content}</span>
          }
        </Heading>
      </div>
    </>
  ) : (
    <div className={`flex ${height} items-center`}>
      <div className="w-[3px] h-full bg-blue" />
      <div className={`${color} pl-4`}>
        <Heading type={type || "h2"} className={`${size} ${leading} font-bold`}>
          {
            secondContent ? (
            <span>
              {content}
              <br />
              {secondContent}
            </span>
            ) : <span>{content}</span>
          }
        </Heading>
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
  underlineFixed: PropTypes.bool,
  type: PropTypes.string
};

export default Title;
