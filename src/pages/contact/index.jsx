import LocaleAboutUs from '../[locale]/about-us';

export default function AboutUs() {
  return LocaleAboutUs('en');
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
