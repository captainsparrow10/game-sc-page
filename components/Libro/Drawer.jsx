import React, { useState } from 'react'
import { MenuClose, MenuOpen } from '../../assets/icons/icons'

export default function Drawer() {
	const [Open, setOpen] = useState(false)
	const handleClick = () => setOpen(!Open)

	return (
		<header className="flex flex-col w-full sticky top-0 z-20 bg-[#39289F] py-[10px] md:py-[20px]">
			<div className="flex justify-between items-center ">
				<h1 className="text-2xl md:w-1/2">Logo</h1>
				<div className=" justify-between hidden md:inline-flex md:w-1/2 text-md lg:text-xl">
					<h2>Home</h2>
					<h2>Sobre nosotros</h2>
					<h2>Libro</h2>
					<h2>Contactenos</h2>
				</div>
				<div className="flex items-center md:hidden">
					{Open ? (
						<MenuOpen
							className="h-[40px] w-[40px] fill-white"
							onClick={handleClick}
						/>
					) : (
						<MenuClose
							className="h-[40px] w-[40px]  fill-white"
							onClick={handleClick}
						/>
					)}
				</div>
			</div>
			<div className="relative mt-2 md:hidden ">
				{Open && (
					<div className=" items-center text-lg bg-white text-[#39289F] font-medium flex flex-col absolute w-full rounded-[15px] overflow-hidden z-50">
						<h2 className="py-2">Capitulo 1</h2>
						<h2 className="py-2">Capitulo 2</h2>
						<h2 className="py-2">Capitulo 3</h2>
						<h2 className="py-2">Capitulo 4</h2>
						<h2 className="py-2">Capitulo 5</h2>
						<h2 className="py-2">Capitulo 6</h2>
						<h2 className="py-2">Capitulo 7</h2>
					</div>
				)}
			</div>
		</header>
	)
}
