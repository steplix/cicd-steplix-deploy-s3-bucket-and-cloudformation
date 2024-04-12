import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LocalePortfolioX28 from '../../[locale]/portfolio/x28';

export default function PortfolioSura() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/portfolio/x28');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return LocalePortfolioX28('en');
}
