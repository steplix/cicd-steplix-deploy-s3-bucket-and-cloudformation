import React from "react";
import Link from "next/link";

const ButtonApply = ({ url, query, apply }) => {
    return (
        <div>
            <Link href={{ pathname: `jobs/${url}`, query: query }}>
                <button className="bg-steplix-red w-[85px] h-[40px] rounded-[5px] mt-16">
                    {apply}
                </button>
            </Link>
        </div>
    );
};

export default ButtonApply;
