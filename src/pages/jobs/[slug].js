import React from "react";
import { useTranslation } from "next-export-i18n";
import { useRouter } from "next/router";
import ContactUs from "@/modules/ContactUs";
import JobItemCard from "@/common/components/JobItemCard";

const Job = () => {
    const { t } = useTranslation();
    const router = useRouter();
    let nameJob = router.query.slug;
    return (
        <div className="bg--job">
            <div className="container-steplix section-steplix ">
                <JobItemCard item={t(`jobs.${nameJob}`)} />
            </div>
        </div>
    );
};

export default Job;
