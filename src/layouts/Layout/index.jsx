import React from "react";
import PropTypes from "prop-types";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="mt-[56px] sm:mt-[62px] lg:mt-0">
                {children}
            </div>
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
