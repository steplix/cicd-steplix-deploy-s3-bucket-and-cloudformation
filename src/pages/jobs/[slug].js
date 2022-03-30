import React, { useContext } from "react";
import { LanguageContext } from "@/common/components/LanguageContext";
import { useRouter } from "next/router";
import ContactUs from "@/modules/ContactUs";
import ItemsCard from "@/common/components/ItemsCard";

const Job = () => {
    const { texts } = useContext(LanguageContext);
    const router = useRouter();
    let nameJob = router.query.slug;

    return (
        <div className="pt-36 ">
            <div className="mb-36 flex items-center justify-center ">
                <ItemsCard item={texts.jobs[`${nameJob}`]} />
            </div>
            <div className="flex items-center justify-center mb-10">
                <ContactUs cv />
            </div>
        </div>
    );
};

export default Job;
