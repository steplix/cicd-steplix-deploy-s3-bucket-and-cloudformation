import Home from '../[locale]/index';

export default function Stack() {
  return Home('en');
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
