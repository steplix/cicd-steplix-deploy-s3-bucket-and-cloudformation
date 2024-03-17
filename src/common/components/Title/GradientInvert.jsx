import PropTypes from 'prop-types';

import Heading from '@/components/Heading';
import { useResponsive } from '@/common/hooks/useResponsive';

/*
  IT'S A MUST TO PASS DIFFERENT FONT SIZES THROUGH THE DIFFERENT BREAKPOINTS
*/

const Title = ({
  content,
  secondContent,
  size,
  leading = 'leading-6',
  color = 'title-gradientInverted',
  type,
}) => {
  const { width } = useResponsive();
  const TITLE_BREAKPOINT_WIDTH = 1024;

  type = width < TITLE_BREAKPOINT_WIDTH ? 'h2' : type;

  return (
    <div className={`flex items-center`}>
      <div className={`${color}`}>
        <Heading className={`${size} ${leading} font-bold font-poppins `} type={type || 'h2'}>
          {secondContent ? (
            <span>
              {content}
              <br />
              {secondContent}
            </span>
          ) : (
            <span>{content}</span>
          )}
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
  borderPosition: PropTypes.oneOf(['bottom', 'left']),
  leading: PropTypes.string,
  color: PropTypes.string,
  underlineFixed: PropTypes.bool,
  type: PropTypes.string,
};

export default Title;
