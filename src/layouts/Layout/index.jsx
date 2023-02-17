import React from "react";
import { useRouter} from "next/router";
import PropTypes from "prop-types";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";

const Layout = ({ children }) => {

    const { route } = useRouter();

    return (
        <>
            <Navbar />
            <div className={`${route === '/' ? 'mt-[56px] sm:mt-[62px] ' : 'mt-[130px]'} lg:mt-0`}>
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
