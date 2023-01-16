import React from "react";
import parse from 'html-react-parser';
import { useLanguageQuery } from "next-export-i18n";
import { useTranslation } from "@/common/lib/i18n";
import { useRouter } from "next/router";
import CustomNextLink from "@/common/components/CustomNextLink";
import Icon from '@/components/Icon';

const StepEnd = () => {
    const { query: { locale }, push } = useRouter();
    const [i18nQuery] = useLanguageQuery(locale);
    const { t } = useTranslation(i18nQuery?.locale);

  return (
    <div className="flex flex-col gap-y-4 justify-end items-end h-full">
        <div className="flex justify-end items-end gap-2">
            <CustomNextLink to={`/${i18nQuery?.lang}/about-us`}>
                <a>
                    <span className="text-blue text-xs font-bold">{t("MainHeader.finalTextLink")}</span>
                </a>
            </CustomNextLink>
            <Icon name="chevronRight" className="h-4 w-4" />
        </div>
        <h1 className="text-[26px] font-bold font-sofia leading-[31.2px] lg:text-5xl text-right">
            {parse(t("MainHeader.finalTitle"))}
        </h1>
        <div className="w-5 h-1 bg-purple" />
        <h2 className="text-base font-black font-sofia leading-4">
            #Digital <span className="text-outlined--purple" data-content="Sherpas">Sherpas</span>
        </h2>
    </div>
  );
};

export default StepEnd;