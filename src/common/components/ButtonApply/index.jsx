import React from "react";
import Link from "next/link";
import CustomNextLink from "@/common/components/CustomNextLink";

const ButtonApply = ({ url, apply, email }) => {
    return (
        <div>
            {url && (
                <CustomNextLink
                    to={url}
                    asPath={`/jobs/${url}`}
                >
                    <a>
                        <button className="bg-red w-[110px] h-[49px] rounded-[5px] mt-16">
                            {apply}
                        </button>
                    </a>
                </CustomNextLink>
            )}
            {email && (
                <Link href="mailto:rrhh@steplix.com">
                    <a>
                        <button className="bg-red w-[119px] h-[52px] rounded-[5px] mt-16">
                            {apply}
                        </button>
                    </a>
                </Link>
            )}
        </div>
    );
};

export default ButtonApply;
