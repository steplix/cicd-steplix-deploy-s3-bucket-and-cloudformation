import { useEffect } from 'react';
import { useRouter } from 'next/router';

import LocaleContact from '../[locale]/contact';

export default function Contact() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/en/contact');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return LocaleContact('en');
}
