import React from 'react'
import PropTypes from "prop-types";


const elements =  {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
}

const Heading = ({ type, children, ...props}) => {
    return React.createElement(
        elements[type] || elements.h1, 
        props, 
        children
    );
}

Heading.propTypes = {
    type: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };



export default Heading