import React from 'react';
import Title from '@/common/components/Title/Gradient';
import { useTranslation } from "next-export-i18n";

const OurPosts = () => {
    const { t } = useTranslation();

    return (
        <section>
            <Title content={t("OurPostsSay.title")} borderPosition="bottom" underlineFixed size="text-[26px] leading-[26px] lg:text-[32px] lg:leading-[48px]"/>
        </section>
    )
}

export default OurPosts;