import React from 'react';
import Link from "next/link";
import { useLanguageQuery } from "next-export-i18n";
import propTypes from "prop-types";


const CustomNextLink = ({ children, to, asPath }) => {
    let [query] = useLanguageQuery();

    return (
    <Link href={{ pathname: to, query }} as={!asPath ? to : asPath} passHref>
        {children}
    </Link>
    )
}

CustomNextLink.propTypes = {
    children: propTypes.node.isRequired,
    to: propTypes.string.isRequired,
    asPath: propTypes.string
  };

export default CustomNextLink