import PropTypes from 'prop-types';

const Svg = ({ className, children, offsetX, offsetY, originalSize, originalWidth, originalHeight }) => {
    
    if (originalSize) {
        originalWidth = originalSize;
        originalHeight = originalSize;
    }

    return (
        <svg
            className={`fill-current ${className}`}
            viewBox={`${offsetX} ${offsetY} ${originalWidth} ${originalHeight}`}
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    );
};

//
// PropsTypes
//
Svg.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    originalSize: PropTypes.number,
    originalWidth: PropTypes.number,
    originalHeight: PropTypes.number,
};

//
// Default values
//
Svg.defaultProps = {
    offsetX: 0,
    offsetY: 0,
    originalWidth: 20,
    originalHeight: 20,
};

export default Svg;