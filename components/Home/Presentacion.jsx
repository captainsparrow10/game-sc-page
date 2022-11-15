import Image from 'next/image'
import React from 'react'
import control from '/assets/icons/control.svg'

export default function Presentacion() {
	return (
		<div className="flex flex-col min-h-screen relative overflow-hidden lg:flex-row">
			<div className="space-y-5 z-10 overglow-hidden lg:mt-[150px]">
				<div className=" bg-[#39289F] space-y-5">
					<h1 className="text-[50px] font-bold">Juegos en Panama</h1>
					<h2 className="text-[18px] font-[400]">
						Donde los juegos dejan de ser solo juegos y se convierten parte de
						nosotros, de nuestar historias
					</h2>
				</div>
				<button className="bg-[#FA8305] w-[195px] h-[53px] rounded-[40px] text-[18px] font-[400]">
					Para mas detalles
				</button>
			</div>

			<Image
				src={control}
				alt="control"
				className="h-full w-full object-contain object-right  absolute z-0 md:h-5/6 lg:relative lg:h-[600px] xl:h-[700px]"
			/>
		</div>
	)
}
