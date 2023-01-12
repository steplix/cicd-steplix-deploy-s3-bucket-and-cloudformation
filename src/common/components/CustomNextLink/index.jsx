import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';
import { useLanguageQuery } from "next-export-i18n";
import propTypes from "prop-types";


const CustomNextLink = ({ children, to, asPath }) => {
    const router = useRouter();
    const [query] = useLanguageQuery(router?.query?.locale);
    
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