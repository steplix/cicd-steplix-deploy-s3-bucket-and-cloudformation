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
        <div className="pt-48 ">
            <div className="mb-36 flex items-center justify-center ">
                <JobItemCard item={t(`jobs.${nameJob}`)} />
            </div>
        </div>
    );
};

export default Job;
