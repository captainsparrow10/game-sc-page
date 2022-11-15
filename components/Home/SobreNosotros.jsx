import Image from 'next/image'
import React from 'react'
import stray from '../../assets/imgs/fondo.jpg'
export default function SobreNosotros() {
	return (
		<div className="flex flex-col min-h-screen space-y-10 ">
			<div className="flex justify-between items-center">
				<h1 className="text-[24px] font-[500]">Nosotros</h1>
			</div>
			<div className='flex flex-col space-y-5'>
				<div className="h-[300px] rounded-lg overflow-hidden">
					<Image src={stray} alt="fondo" className="w-full h-full" />
				</div>
        <h1 className='text-2xl font-bold tracking-tight'>Nombre del team</h1>
        <p className='text-[15px] font-[400] text-gray-400'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae nam error velit modi ducimus quos accusantium. Eos omnis facere illo velit sint repellat, expedita nihil quas quod sed, laborum consequatur.
        </p>
        <button className="w-full h-[50px] bg-white/10 hover:bg-white/30 rounded-[10px] text-[16px] font-[400]">
					Leer sobre nosotros
				</button>
			</div>
		</div>
	)
}