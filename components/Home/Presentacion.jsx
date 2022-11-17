import Image from 'next/image'
import React from 'react'
import presentacion from '/assets/imgs/presentacion.svg'

export default function Presentacion() {
	return (
		<div className="flex flex-col min-h-screen lg:flex-row space-y-10">
			<div className="space-y-5 z-10 overglow-hidden lg:mt-[150px] mt-2">
				<div className="space-y-5">
					<h1 className="text-[54px] font-bold">Video juegos en Panama</h1>
					<h2 className="text-[16px] font-[500] text-gray-400">
						Mas que solo juegos, una parte escencia de nosotros... es parte de
						nuestra historia
					</h2>
				</div>
				<button className="bg-[#d97000] w-[150px] h-[53px] md:w-[195px] md:h-[53px] rounded-[40px] text-[20px] font-[500] hover:bg-[#b96002]">
					Leer mas
				</button>
			</div>

			<Image src={presentacion} alt="fondo" className="h-full w-full" />
		</div>
	)
}
