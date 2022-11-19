import React from 'react'
import Header from '../components/Header'

import Capitulos from '../components/Libro/Capitulos'
import Indice from '../components/Libro/Indice'

export default function libro() {
	return (
		<div className="bg-[#39289F] text-white z-0 h-screen overflow-y-scroll overflow-x-hidden flex justify-center scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d97000]/80">
			<Header />
			<main className="px-[20px] pt-20 sm:w-2/3 sm:px-0 lg:w-3/5 xl:2/5">
				<Indice />
				<Capitulos />
			</main>
		</div>
	)
}
