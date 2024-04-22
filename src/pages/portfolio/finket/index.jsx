import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LocalePortfolioFinket from '../../[locale]/portfolio/finket';

export default function PortfolioSura() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/portfolio/finket');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return LocalePortfolioFinket('en');
}