import Image from 'next/image'
import React from 'react'
import control from '/assets/icons/control.svg'

export default function Presentacion() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="space-y-5">
      <h1 className="text-[50px] font-bold">Juegos en Panama</h1>
      <h2 className="text-[18px] font-[400]">
        Donde los juegos dejan de ser solo juegos y se convierten parte de
        nosotros, de nuestar historias
      </h2>
      <button className="bg-[#FA8305] w-[195px] h-[53px] rounded-[40px] text-[18px] font-[400]">
        Para mas detalles
      </button>
    </div>
    <div className="">
      <Image src={control} alt="control" className="h-full w-full" />
    </div>
  </div>
  )
}
