import React from "react";

const Flags = () => {
    return (
        <div className="hidden lg:block">
            <div className="bg-steplix-blue absolute h-full z-40 top-0 bottom-0 w-[30px] right-[90px]" />
            <div className="bg-steplix-red absolute h-full z-40 top-0 bottom-0 w-[30px] right-[50px]" />
            <div className="bg-steplix-yellow absolute h-full z-40 top-0 bottom-0 w-[30px] right-[10px]" />
        </div>
    );
};

export default Flags;
