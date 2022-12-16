import CardIcon from '@/common/components/CardIcon'
import SidelinedGradientTitle from '@/common/components/SidelinedGradientTitle'
import React from 'react'

const OurValues = () => {
  return (
    <div className="flex flex-col space-y-6 lg:space-y-8">
        <SidelinedGradientTitle title="Nuestros valores" />
        <p className="font-poppins text-sm lg:text-base font-normal text-black">
            Aquellos que nos definen y sobre los que hacemos foco en cada proyecto.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center justify-center">
            <div className="flex flex-row space-x-4 md:space-x-6">
                <CardIcon text="Confianza" iconName="trust" />
                <CardIcon text="Respeto mutuo" iconName="mutualRespect" />
                <CardIcon text="Éxito" iconName="success" />
            </div>
            <div className="flex flex-row space-x-4 md:space-x-6">
                <CardIcon text="Conciencia" iconName="awareness" />
                <CardIcon text="Agilidad" iconName="agility" />
            </div>
        </div>
    </div>
  )
}

export default OurValues