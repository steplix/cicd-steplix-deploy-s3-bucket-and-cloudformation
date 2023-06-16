import WhatWeDo from '../[locale]/what-we-do';

export default function Process() {
  return WhatWeDo('en');
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
