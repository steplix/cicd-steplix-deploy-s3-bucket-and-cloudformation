import { useEffect } from 'react';
import { useRouter } from 'next/router';

import WhatWeDo from '../[locale]/what-we-do';

export default function Process() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/what-we-do');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return WhatWeDo('en');
}
