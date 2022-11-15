import React from 'react'
import Header from '../components/Header'
import Presentacion from '../components/Home/Presentacion'
import Capitulos from '../components/Home/Capitulos'
import SobreNosotros from '../components/Home/SobreNosotros'
import Contactenos from '../components/Home/Contactenos'

export default function index() {
	return (
		<div className="bg-[#39289F] text-white z-0">
			<Header />
			<main className="px-[30px] mt-[60px] overflow-y-flow">
				<Presentacion />
				<Capitulos />
				<SobreNosotros />
			</main>
			<Contactenos />
		</div>
	)
}
