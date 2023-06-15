import { LOCALE_SLUGS } from './constants';

export const getPathSlugs = () => {
  return LOCALE_SLUGS.map((locale) => ({
    params: {
      locale,
    },
  }));
};
