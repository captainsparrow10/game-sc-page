import Link from 'next/link'
import React from 'react'
import indiceCapitulos from '../../utils/IndiceCapitulos'

export default function Indice() {
	return (
		<div
			className=" pt-16 md:w-2/6 xl:w-1/6"
			id="indice"
		>
			<div className="space-y-5">
				<h1 className="text-[40px] font-bold">Indice</h1>
				<div className="space-y-5 flex flex-col">
					{indiceCapitulos.map((card) => (
						<Link href={`/libro/#${card.link}`} key={card.title}>
							<h2 className="text-[16px]  font-[500] text-gray-400 hover:text-white">
								{card.title}
							</h2>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}
