import { useRouter } from 'next/router'
import React from 'react'
import indiceCapitulos from '../../utils/IndiceCapitulos'

import Card from '../Card'
export default function Capitulos() {
	const router = useRouter()
	const verIndice = () => {
		router.push(
			'https://drive.google.com/file/d/1_iDx_jU2uK6lKlNjEkLayG5pLQey4o7P/view?usp=sharing'
		)
	}
	return (
		<div
			className="flex flex-col min-h-screen justify-center space-y-5"
			id="capitulos"
		>
			<div className="flex justify-between items-center">
				<h3>Capitulos</h3>
				<button
					className="w-[80px] h-[50px] bg-white/10 hover:bg-white/30 rounded-[10px] text-[16px] font-[400]"
					onClick={() => verIndice()}
				>
					Ver todo
				</button>
			</div>
			<div className="flex  overflow-y-hidden overflow-x-scroll space-x-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d97000]/80">
				{indiceCapitulos.map((card) => (
					<Card key={card} title={card.title} link={card.link} />
				))}
			</div>
		</div>
	)
}
