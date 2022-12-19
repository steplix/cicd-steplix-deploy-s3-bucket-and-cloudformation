import React from "react";
import PropTypes from "prop-types";

import { propTypeIconName } from "@/common/utils/propTypes";

import * as Icons from "./icons";

const Icon = ({ className, name, ...props }) => {
    const SelectedIcon = Icons[name];

    return <SelectedIcon className={className} {...props} />;
};

Icon.propTypes = {
    className: PropTypes.string.isRequired,
    name: propTypeIconName.isRequired,
};

export default Icon;
