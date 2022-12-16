import React from 'react'
import PropTypes from "prop-types";


const SidelinedGradientTitle = ({ title }) => {
  return (
    <h3 className="sidelined-title">
        <div className="bg-blue w-[3px] h-9" />
        <span>{title}</span>
    </h3>
  )
}

SidelinedGradientTitle.propTypes = {
    title: PropTypes.string.isRequired,
  };

export default SidelinedGradientTitle