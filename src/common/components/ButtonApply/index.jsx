import React from "react";
import Link from "next/link";

const ButtonApply = ({ url, query, apply, email }) => {
    return (
        <div>
            {url && (
                <Link href={{ pathname: `/jobs/${url}`, query: query }}>
                    <a>
                        <button className="bg-steplix-red w-[110px] h-[49px] rounded-[5px] mt-16">
                            {apply}
                        </button>
                    </a>
                </Link>
            )}
            {email && (
                <Link href="mailto:rrhh@steplix.com">
                    <a>
                        <button className="bg-steplix-red w-[119px] h-[52px] rounded-[5px] mt-16">
                            {apply}
                        </button>
                    </a>
                </Link>
            )}
        </div>
    );
};

export default ButtonApply;
