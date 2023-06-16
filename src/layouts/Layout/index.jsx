import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';

const Layout = ({ children }) => {
  const { route } = useRouter();

  return (
    <>
      <Navbar />
      <div className={`${route === '/' ? 'pt-[56px] sm:pt-[62px] ' : 'pt-[130px]'} lg:pt-0`}>
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
