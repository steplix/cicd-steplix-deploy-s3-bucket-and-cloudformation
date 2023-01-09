import React from "react";
import { useTranslation } from "next-export-i18n";
import Title from "@/common/components/Title/Gradient";
import Icon from "@/common/components/Icon";

const MissionAndVision = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full flex flex-col lg:flex-row lg:space-x-8 items-center space-y-8 lg:space-y-0">
      <div className="flex flex-col space-y-4">
        <Title content={t("about_us.mission.title")} size="text-[26px]" />
        <p className="font-poppins text-sm lg:text-base font-normal text-black">
          {t("about_us.mission.description")}
        </p>
      </div>
      <div className="flex flex-col space-y-4">
        <div className="flex gap-4">
          <Title content={t("about_us.vision.title")} size="text-[26px]" />
          <Icon name="mission" className="w-6 h-6" />
        </div>
        <p className="font-poppins text-sm lg:text-base font-normal text-black">
          {t("about_us.vision.description")}
        </p>
      </div>
    </section>
  );
};

export default MissionAndVision;
