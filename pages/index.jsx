import React from 'react'
import Header from '../components/Header'
import Presentacion from '../components/Home/Presentacion'
import Capitulos from '../components/Home/Capitulos'
import SobreNosotros from '../components/Home/SobreNosotros'
import Contactenos from '../components/Home/Contactenos'

export default function index() {
	return (
		<div className="bg-[#39289F] text-white z-0  h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d97000]/80">
			<Header />
			<main className="px-[15px] sm:px-[30px] md:px-[40px] lg:px-[55px]">
				<Presentacion />
				<Capitulos />
				<SobreNosotros />
			</main>
			<Contactenos />
		</div>
	)
}
