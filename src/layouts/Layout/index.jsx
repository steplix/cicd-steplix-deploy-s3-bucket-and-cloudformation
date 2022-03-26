import React from "react";
import PropTypes from "prop-types";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import LanguageProvider from "@/common/components/LanguageContext";
import Flags from "@/common/components/Flags";

const Layout = ({ children }) => {
    /* TO DO flag no toma el height-full  */
    return (
        <>
            <LanguageProvider>
                <Navbar />
                {children}
                <Flags />
                <Footer />
            </LanguageProvider>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
