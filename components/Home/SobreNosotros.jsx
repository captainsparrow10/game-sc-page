import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import team from '../../assets/imgs/team.svg'
export default function SobreNosotros() {
	const router = useRouter()
	const aboutRouter = () => {
		router.push('/about')
	}
	return (
		<div className="flex flex-col min-h-screen justify-center">
			<div className="flex justify-between items-center">
				<h3>Nosotros</h3>
			</div>
			<div className="flex justify-center">
				<div className="flex flex-col space-y-5 w-full sm:w-4/5 justify-center lg:flex-row lg:justify-evenly lg:w-full">
					<div className="h-[300px] rounded-lg overflow-hidden lg:w-1/3">
						<Image src={team} alt="fondo" className="w-full h-full" />
					</div>
					<div className=" lg:w-1/3 lg:h-full space-y-5">
						<h1 className="text-2xl font-bold tracking-tight">Gamers</h1>
						<p className=" text-gray-400">
							Somos los responsable del desarrollo del libro que ha dado un poco de la historia de los videojuegos en Panamá. Si quieres conocer acerca de nosotros...
						</p>
						<button
							className="w-full h-[50px] bg-white/10 hover:bg-white/30 rounded-[10px] text-[15px] font-[400] sm:w-2/5"
							onClick={() => aboutRouter()}
						>
							Leer mas
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
