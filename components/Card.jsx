import React from 'react'
import stray from '../assets/imgs/fondo.jpg'
import Image from 'next/image'

export default function Card() {
	return (
		<div class="w-full rounded-lg border shadow-md bg-gray-800 border-gray-700 p-5 py-3 flex-shrink-0 snap-start">
			<div className="h-[300px] rounded-[15px] overflow-hidden">
				<Image src={stray} alt="fondo" className="w-full h-full" />
			</div>
			<div class="py-5">
				<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">
					Noteworthy technology acquisitions 2021
				</h5>
				<p class="mb-3 font-normal text-gray-400">
					Here are the biggest enterprise technology acquisitions of 2021 so
					far, in reverse chronological order.
				</p>
				<button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white  rounded-lg bg-[#ed871a] ">
					Leer mas
					<svg
						aria-hidden="true"
						class="ml-2 -mr-1 w-4 h-4"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</button>
			</div>
		</div>
	)
}