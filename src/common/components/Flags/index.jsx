import React from "react";

const Flags = () => {
    return (
        <div className="hidden xl:block">
            <div className="bg-yellow  absolute h-full z-40 top-0 bottom-0 w-[30px] right-[80px]" />
            <div className="bg-red absolute h-full z-40 top-0 bottom-0 w-[30px] right-[40px]" />
            <div className="bg-blue absolute h-full z-40 top-0 bottom-0 w-[30px] right-0" />
        </div>
    );
};

export default Flags;
