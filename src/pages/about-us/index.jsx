import LocaleContact from "../[locale]/contact";

export default function Contact() {
  return LocaleContact("en");
}

export async function getStaticProps({ params }) {
  return {
    props: {
      ...params,
    },
  };
}
