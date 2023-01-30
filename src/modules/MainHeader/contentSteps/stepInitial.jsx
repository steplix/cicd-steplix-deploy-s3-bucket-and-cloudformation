import React from "react";
import parse from 'html-react-parser';
import { useTranslation } from "next-export-i18n";

const StepInitial = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-6 justify-center h-full">
      <h1 className="font-bold font-poppins leading-[31.2px] lg:leading-[38.4px] text-[26px] lg:text-5xl">
        {parse(t("MainHeader.title"))}
      </h1>
      <div className="w-5 h-1 bg-purple" />
      <h2 className="text-xl font-medium font-poppins leading-relaxed">
        {parse(t("MainHeader.subtitle"))}
      </h2>
    </div>
  );
};

export default StepInitial;
