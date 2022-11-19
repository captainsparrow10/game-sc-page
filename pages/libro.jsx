import React from 'react'
import Header from '../components/Header'

import Capitulos from '../components/Libro/Capitulos'
import Indice from '../components/Libro/Indice'

export default function libro() {
	return (
		<div className="bg-[#39289F] text-white z-0 h-screen overflow-x-hidden flex justify-center md:overflow-y-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d97000]/80">
			<Header />
			<main className="pt-20  md:flex justify-between px-[15px] sm:px-[30px] md:px-[40px] lg:px-[55px]">
				<Indice />
				<Capitulos />
			</main>
		</div>
	)
}
