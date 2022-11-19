import React from 'react'
import indiceCapitulos from '../../utils/IndiceCapitulos'

import Card from '../Card'
export default function Capitulos() {
	const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
	return (
		<div className="flex flex-col min-h-screen justify-center space-y-5">
			<div className="flex justify-between items-center">
				<h1 className="text-4xl font-[500]">Capitulos</h1>
				<button className="w-[80px] h-[50px] bg-white/10 hover:bg-white/30 rounded-[10px] text-[16px] font-[400]">
					Ver todo
				</button>
			</div>
			<div className="flex  overflow-hidden overflow-x-scroll space-x-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d97000]/80">
				{indiceCapitulos.map((card) => (
					<Card key={card} title={card.title} />
				))}
			</div>
		</div>
	)
}
