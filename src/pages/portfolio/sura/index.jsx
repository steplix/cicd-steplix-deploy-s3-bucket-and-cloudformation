import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LocalePortfolioSura from '../../[locale]/portfolio/sura';

export default function PortfolioSura() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/portfolio/sura');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return LocalePortfolioSura('en');
}
