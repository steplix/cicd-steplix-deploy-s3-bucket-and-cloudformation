import React from "react";

const ItemsCard = ({ item }) => {
    return (
        <div className="pl-5 lg:pl-12 w-[340px] lg:w-[1300px]">
            <div className="mb-20">
                <h1 className="lg:text-6xl text-lg title-empty mb-4 font-black">
                    {item?.title}
                </h1>
                <p className="lg:text-xl text-base">{item?.description}</p>
            </div>
            <div>
                <p className="text-2xl font-black mb-10 ">
                    {item?.responsibilities?.title}
                </p>
                <ul className="list-disc mb-14">
                    {item?.responsibilities?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="text-2xl font-black mb-10 ">
                    {item?.requirements?.title}
                </p>
                <ul className="list-disc mb-14">
                    {item?.requirements?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
            <div>
                <p className="text-2xl font-black mb-10 ">
                    {item?.workModality?.title}
                </p>
                <ul className="list-disc mb-14">
                    {item?.workModality?.items.map((element, index) => (
                        <li key={index}>{element}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ItemsCard;
