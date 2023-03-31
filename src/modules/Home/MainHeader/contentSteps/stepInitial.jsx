import React from "react";
import parse from 'html-react-parser';
import { useTranslation } from "next-export-i18n";

const StepInitial = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-y-4 lg:gap-2.5 justify-center h-full">
      <h2 className="font-poppins text-custom-base lg:!text-xl lg:leading-relaxed">
        {parse(t("MainHeader.slogan"))}
      </h2>
      <div className="flex flex-col gap-y-4 lg:gap-6">
        <h1 className="font-bold font-poppins leading-[31.2px] lg:leading-[38.4px] lg:tracking-[0.01em] text-[26px] lg:text-5xl">
          {parse(t("MainHeader.title"))}
        </h1>
        <div className="w-5 h-1 bg-purple" />
        <h2 className="font-poppins text-custom-base lg:!text-xl lg:leading-relaxed lg:tracking-[0.01em] font-medium ">
          <span className="block lg:hidden">{parse(t("MainHeader.subtitleMobile"))}</span>
          <span className="hidden lg:block">{parse(t("MainHeader.subtitleBase"))}</span>
        </h2>
      </div>
    </div>
  );
};

export default StepInitial;
