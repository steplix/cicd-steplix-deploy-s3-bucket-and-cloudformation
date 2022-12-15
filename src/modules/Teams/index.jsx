import React from 'react'
import SidelinedGradientTitle from '@/common/components/SidelinedGradientTitle'
import Chip from '@/common/components/TechnologyChip'

const Teams = () => {
  return (
    <div className="flex flex-col space-y-6 lg:space-y-8">
        <SidelinedGradientTitle title={"Equipos"} />
        <p className="font-poppins text-sm lg:text-base font-normal text-black">
            De la misma manera que los Sherpas acompañan a los escaladores en su viaje hacia la cima, los Digital Sherpas <span className="font-semibold">nos comprometemos plenamente con los desafíos de negocio de nuestros clientes, guiándolos y elevando sus ideas a la máxima potencia.</span>
        </p>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-16 items-center lg:justify-between">
            <h3 className="font-bold text-[24px] text-purple mx-auto lg:mx-0">
                #Digital <span className="text--outlined text--violet">Sherpas</span>
            </h3>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 items-center justify-center">
                <div className="flex flex-row space-x-3 md:space-x-6">
                    <Chip label={"QA"} name="qa" customIconClass="h-[18px] w-[18px] mt-2" />
                    <Chip label={"UI/UX"} name="uiux" customIconClass="h-[18px] w-[18px]" />
                    <Chip label={"Mobile"} name="mobile" customIconClass="h-[18px] w-[18px] text-white"/>
                </div>
                <div className="flex flex-row space-x-3 md:space-x-6">
                    <Chip label={"Front end"} name="frontend" customIconClass="h-[18px] w-[18px] mt-1" />
                    <Chip label={"Back end"} name="backend" customIconClass="h-[18px] w-[18px]" />
                </div>
            </div>
        </div>
        <div className="bg-white w-full shadow-2xl h-[333px] flex items-center justify-center">
            <h1>Carousel goes here</h1>
        </div>
    </div>
  )
}

export default Teams