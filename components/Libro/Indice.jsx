import Link from 'next/link'
import React from 'react'
import indiceCapitulos from '../../utils/IndiceCapitulos'

export default function Indice() {
	return (
		<div
			className="pt-16 md:w-2/6 xl:w-1/6 md:scroll"
			id="indice"
		>
			<div className="space-y-5">
				<h3>Indice</h3>
				<div className="space-y-5 flex flex-col">
					{indiceCapitulos.map((card) => (
						<Link href={`/libro/#${card.link}`} key={card.title}>
							<p className="text-gray-400 hover:text-white">
								{card.title}
							</p>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
