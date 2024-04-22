import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LocalePortfolioPow from '../../[locale]/portfolio/pow';

export default function PortfolioSura() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/portfolio/pow');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return LocalePortfolioPow('en');
}