import React from 'react'

const MissionAndVision = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row lg:space-x-8 items-center space-y-8 lg:space-y-0">
        <div className="flex flex-col space-y-4">
            <h4 className="underlined-title">Misión</h4>
            <p className="font-poppins text-sm lg:text-base font-normal text-black">
            Desarrollar soluciones innovadoras para mejorar la productividad de las empresas, la vida de nuestros clientes y aportar al desarrollo de nuestros Digital Sherpas.  
            </p>
        </div>
        <div className="flex flex-col space-y-4">
            <h4 className="underlined-title">Visión</h4>
            <p className="font-poppins text-sm lg:text-base font-normal text-black">
            Brindar soluciones de excelencia, en tiempo y precio competitivo, basados en la mejora continua de nuestros procesos internos y el talento de nuestros Digital Sherpas.  
            </p>
        </div>
    </div>
  )
}

export default MissionAndVision