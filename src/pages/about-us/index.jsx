import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LocaleAboutUs from '../[locale]/about-us';

export default function AboutUs() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/about-us');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return LocaleAboutUs('en');
}
