import React from 'react'
import stray from '../assets/imgs/fondo.jpg'
import Image from 'next/image'

import { useRouter } from 'next/router'

export default function Card({ title, link }) {
	const router = useRouter()
	const capRouter = (link) => {
		router.push(`${link}`)
	}
	return (
		<div class="w-[250px] sm:w-[350px] max-h-[600px] rounded-lg border shadow-md bg-gray-800 border-gray-700 p-5 flex-shrink-0 snap-start mb-5">
			<div className="h-[300px] rounded-[15px] overflow-hidden">
				<Image src={stray} alt="fondo" className="w-full h-full object-cover" />
			</div>
			<div class="py-5">
				<h5 class="mb-2 tracking-tight text-white">
					{title || 'Titulo del capitulo'}
				</h5>
				<button
					className="flex items-center py-2 px-3  font-[400] text-center text-white  rounded-lg bg-[#d97000] text-[16px] mt-5"
					onClick={() => capRouter(link)}
				>
					Leer mas
				</button>
			</div>
		</div>
	)
}
