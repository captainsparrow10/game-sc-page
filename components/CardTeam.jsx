import Image from 'next/image'
import React from 'react'
import icono from '../assets/imgs/profile.svg'
export default function CardTeam({ img, name, position }) {
	return (
		<div class="w-[250px] sm:w-[350px] h-[400px] flex flex-col justify-center items-center  rounded-[50px] border shadow-md bg-gray-800 border-gray-700 flex-shrink-0 snap-start mb-5">
			<div className="h-[200px] rounded-full overflow-hidden">
				<Image
					src={img || icono}
					alt="fondo"
					className="w-full h-full object-cover bg-white"
				/>
			</div>
			<div class="py-5 flex flex-col items-center">
				<h5 class="mb-2 text-[18px] font-bold tracking-tight text-white">
					{name || 'Titulo del capitulo'}
				</h5>
				<p class="font-normal text-gray-400 text-[16px]">
					{position || ':3'}
				</p>
			</div>
		</div>
	)
}
