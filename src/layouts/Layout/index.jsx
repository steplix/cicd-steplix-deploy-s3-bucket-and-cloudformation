import React from "react";
import PropTypes from "prop-types";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import { LanguageProvider } from "@/common/components/LanguageContext";

const Layout = ({ children }) => {
    return (
        <>
            <LanguageProvider>
                <Navbar />
                {children}
                <Footer />
            </LanguageProvider>
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
