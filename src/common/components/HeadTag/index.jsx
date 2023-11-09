import Head from 'next/head';
import PropTypes from 'prop-types';

// TODO: Make robots tag content dynamic

const HeadTag = ({ metaContent, children }) => {
  const { title, keywords, description } = metaContent;
  const robots_index = process.env.ROBOTS;

  return (
    <Head>
      {/* HTML Meta Tags */}
      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />
      <meta content={robots_index} name="robots" />
      <link href="/favicon.png" rel="icon" />
      <title>{title}</title>
      <meta content={description} name="description" />
      <meta content={keywords} name="keywords" />
      {/* Facebook Meta Tags */}
      <meta content={title} property="og:title" />
      <meta content={description} property="og:description" />
      <meta content="https://steplix.com/" property="og:url" />
      <meta content="website" property="og:type" />
      <meta content="https://steplix.com/assets/img/logo.png" property="og:image" />
      <meta content="image/png" property="og:image:type" />
      <meta content="200" property="og:image:width" />
      <meta content="54" property="og:image:height" />
      <meta content="Steplix Logo" property="og:image:alt" />
      {/* Twitter Meta Tags */}
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="steplix.com" property="twitter:domain" />
      <meta content="https://steplix.com/" property="twitter:url" />
      <meta content={title} name="twitter:title" />
      <meta content={description} name="twitter:description" />
      <meta content="https://steplix.com/assets/img/logo.png" name="twitter:image" />
      {/* Structured Data */}
      {children}
    </Head>
  );
};

HeadTag.propTypes = {
  metaContent: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    keywords: PropTypes.string.isRequired,
    noIndex: PropTypes.bool,
  }),
  children: PropTypes.node,
};

export default HeadTag;
