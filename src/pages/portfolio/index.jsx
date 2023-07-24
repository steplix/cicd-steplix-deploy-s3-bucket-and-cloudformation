import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LocalePortfolio from '../[locale]/portfolio';

export default function Portfolio() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/portfolio');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return LocalePortfolio('en');
}
