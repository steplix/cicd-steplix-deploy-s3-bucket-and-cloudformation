import BecomeSteplixer from '../[locale]/become-steplixer';

export default function Jobs() {
  return BecomeSteplixer('en');
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
