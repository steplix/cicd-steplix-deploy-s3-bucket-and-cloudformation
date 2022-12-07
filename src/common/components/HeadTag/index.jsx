import React from 'react'
import Head from "next/head";
import PropTypes from "prop-types";

const HeadTag = ({ title, keywords, description, children }) => {
  return (
    <Head>
    {/* HTML Meta Tags */}
    <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta name="robots" content={(process && process?.env?.NODE_ENV) === 'production' ? "index, follow" : "noindex"} />
    <link rel="icon" href="/favicon.png" />
    <title>{title}</title>
    <meta
        name="description"
        content={description}
    />
    <meta name="keywords" content={keywords} />
    {/* Facebook Meta Tags */}
    <meta property="og:title" content={title} />
    <meta
        property="og:description"
        content={description}
    />
    <meta property="og:url" content="https://steplix.com/" />
    <meta property="og:type" content="website" />
    <meta
        property="og:image"
        content="https://steplix.com/assets/img/logo.png"
    />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="200" />
    <meta property="og:image:height" content="54" />
    <meta property="og:image:alt" content="Steplix Logo" />
    {/* Twitter Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:domain" content="steplix.com" />
    <meta property="twitter:url" content="https://steplix.com/" />
    <meta name="twitter:title" content={title} />
    <meta
        name="twitter:description"
        content={description}
    />
    <meta
        name="twitter:image"
        content="https://steplix.com/assets/img/logo.png"
    />
    {/* Structured Data */}
    {children}
    </Head>
  )
}

HeadTag.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    children: PropTypes.node,
};

export default HeadTag