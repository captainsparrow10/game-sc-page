import Image from 'next/image'
import React from 'react'
import presentacion from '/assets/imgs/presentacion.svg'

export default function Presentacion() {
	return (
		<div className="flex flex-col min-h-screen lg:flex-row justify-center items-center lg:justify-evenly">
			<div className="space-y-5 z-10 overglow-hidden mt-2 lg:mt-0 lg:w-[400px]">
				<div className="space-y-5">
					<h1 className="text-[54px] font-bold">Video juegos en Panama</h1>
					<h2 className="text-[16px] font-[500] text-gray-400">
						Mas que solo juegos, una parte escencia de nosotros... es parte de
						nuestra historia
					</h2>
				</div>
				<button className="bg-[#d97000] w-[150px] h-[43px] xl:w-[195px]  xl:h-[53px] rounded-[40px] text-[20px] font-[500] hover:bg-[#b96002]">
					Let's go
				</button>
			</div>

			<Image
				src={presentacion}
				alt="fondo"
				className="h-full w-full lg:w-1/2"
			/>
		</div>
	)
}
