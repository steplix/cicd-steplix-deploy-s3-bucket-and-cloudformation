import React from 'react'
import { useTranslation } from 'next-export-i18n'
import Title from '@/common/components/Title/Gradient';

const MissionAndVision = () => {
  const { t } = useTranslation();


  return (
    <section className="w-full flex flex-col lg:flex-row lg:space-x-8 items-center space-y-8 lg:space-y-0">
        <div className="flex flex-col space-y-4">
            <Title content={t("about_us.mission.title")} />
            <p className="font-poppins text-sm lg:text-base font-normal text-black">
              {t("about_us.mission.description")}  
            </p>
        </div>
        <div className="flex flex-col space-y-4">
            <Title content={t("about_us.vision.title")} />
            <p className="font-poppins text-sm lg:text-base font-normal text-black">
              {t("about_us.vision.description")}  
            </p>
        </div>
    </section>
  )
}

export default MissionAndVision