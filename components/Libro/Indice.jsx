import React from 'react'
import indiceCapitulos from '../../utils/IndiceCapitulos'

export default function Indice() {
	return (
		<div className="flex flex-col min-h-screen ">
			<div className="space-y-5 z-10 overglow-hidden mt-2 lg:mt-0 lg:w-[400px]">
				<h1 className="text-[40px] font-bold">Video juegos en Panama</h1>
				<div className="space-y-5">
					<h1 className="text-[30px] font-bold">Indice</h1>
					{indiceCapitulos.map((card) => (
						<h2
							className="text-[16px] font-[500] text-gray-400 hover:text-white"
							key={card.title}
						>
							{card.title}
						</h2>
					))}
				</div>
			</div>
		</div>
	)
}
