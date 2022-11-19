import React from 'react'
import CardTeam from '../components/CardTeam'
import Header from '../components/Header'
import Contactenos from '../components/Home/Contactenos'
import { participantes } from '../utils/teams'

export default function about() {
	return (
		<div className="bg-[#39289F] text-white z-0  h-screen scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d97000]/80">
			<Header />
			<main className=" py-28 px-[15px] sm:px-[30px] md:px-[40px] lg:px-[55px] space-y-10">
				<h1 className="text-[50px] fond-bold">Team</h1>
				{participantes.map((participante) => (
					<div className="space-y-5" key={participante.titulo}>
						<h2 className="text-[20px] fond-bold">{participante.titulo}</h2>
						<div className="flex w-full  overflow-y-hidden overflow-x-scroll space-x-6 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#d97000]/80">
							{participante.integrantes.map((card) => (
								<CardTeam
									key={card.name}
									name={card.name}
									position={card.position}
									img={card.img}
								/>
							))}
						</div>
					</div>
				))}
			</main>
      <Contactenos />
		</div>
	)
}
