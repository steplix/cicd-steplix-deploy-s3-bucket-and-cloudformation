import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import Navbar from '@/layouts/Navbar';
import Footer from '@/layouts/Footer';

const Layout = ({ children }) => {
  const { route } = useRouter();

  return (
    <div className="relative">
      <Navbar />
      <div
        className={`${
          route === '/' || route.includes('/portfolio/') ? 'pt-[56px] sm:pt-[62px] ' : 'pt-[130px]'
        } lg:pt-0`}
      >
        {children}
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
