import React from "react";
import PropTypes from "prop-types";

import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
