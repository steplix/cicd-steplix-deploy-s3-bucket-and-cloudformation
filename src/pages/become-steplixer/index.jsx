import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LocaleBecomeSteplixer from '../[locale]/become-steplixer';

export default function BecomeSteplixer() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/become-steplixer');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return LocaleBecomeSteplixer('en');
}
