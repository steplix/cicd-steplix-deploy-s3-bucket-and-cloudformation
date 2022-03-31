import React from "react";
import PropTypes from "prop-types";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import Flags from "@/common/components/Flags";

const Layout = ({ children }) => {
    /* TO DO flag no toma el height-full  */
    return (
        <>
            <Navbar />
            {children}
            <Flags />
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
