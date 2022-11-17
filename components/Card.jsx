import React from 'react'
import stray from '../assets/imgs/fondo.jpg'
import Image from 'next/image'

export default function Card({ title, description }) {
	return (
		<div class="w-[250px] sm:w-[350px] rounded-lg border shadow-md bg-gray-800 border-gray-700 p-5 flex-shrink-0 snap-start mt-2">
			<div className="h-[300px] rounded-[15px] overflow-hidden">
				<Image src={stray} alt="fondo" className="w-full h-full object-cover" />
			</div>
			<div class="py-5">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
					{title || 'Titulo del capitulo'}
				</h5>
				<p class="mb-3 font-normal text-gray-400 hidden md:inline-flex">
					{description ||
						'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order'}
				</p>
				<button className="flex items-center py-2 px-3 text-sm font-[400] text-center text-white  rounded-lg bg-[#d97000] text-[16px]">
					Leer mas
				</button>
			</div>
		</div>
	)
}
