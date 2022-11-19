import React from 'react'
import Capitulo1 from './Capitulo1'
import Capitulo2 from './Capitulo2'
import Capitulo3 from './Capitulo3'
import Capitulo4 from './Capitulo4'
import Capitulo5 from './Capitulo5'
import Capitulo6 from './Capitulo6'
import Capitulo7 from './Capitulo7'
export default function Capitulos() {
	return (
		<div className="space-y-10 md:w-4/6 xl:w-5/6 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d97000]/80 md:px-5 lg:px-10 xl:px-20">
			<h1 className="text-[50px] font-bold pt-16">
				Historia de los video juegos en Panama
			</h1>
			<Capitulo1 />
			<Capitulo2 />
			<Capitulo3 />
			<Capitulo4 />
			<Capitulo5 />
			<Capitulo6 />
			<Capitulo7 />
		</div>
	)
}
