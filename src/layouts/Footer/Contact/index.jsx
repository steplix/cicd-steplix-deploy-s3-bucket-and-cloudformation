import { useTranslation } from "@/common/lib/i18n";
import { useLanguageQuery } from "next-export-i18n";
import { useRouter } from "next/router";
import Link from "next/link";
import Icon from "@/common/components/Icon";

const Contact = () => {
  const {
    query: { locale },
  } = useRouter();
  const [i18nQuery] = useLanguageQuery(locale);
  const { t } = useTranslation(i18nQuery?.locale);

  return (
    <div className="flex justify-center sm:justify-start gap-3 sm:gap-4">
      <a
        className="rounded-full h-8 w-8 flex items-center justify-center bg-icon"
        href="https://www.instagram.com/steplixsoftware/"
        rel="noreferrer"
        target="_blank"
        aria-label={t("footer.instagramAriaLabel")}
      >
        <Icon name="instagram" className="h-4 w-4 text-white" />
      </a>
      <a
        className="rounded-full h-8 w-8 flex items-center justify-center bg-icon"
        href="https://www.linkedin.com/company/steplix"
        rel="noreferrer"
        target="_blank"
        aria-label={t("footer.linkedInAriaLabel")}
      >
        <Icon name="linkedIn" className="h-4 w-4 text-white" />
      </a>
      <div className="flex gap-[5px] font-poppins text-white items-center text-mobile">
        <Icon
          name="mail"
          className="h-[19px] w-[19px] text-white"
          fill="white"
        />
        <Link href="mailto:hello@steplix.com">
          <a aria-label={t("footer.emailAriaLabel")}>hello@steplix.com</a>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
