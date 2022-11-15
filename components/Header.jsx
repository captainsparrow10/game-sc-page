import React, { useState } from 'react'
import { MenuClose, MenuOpen } from '../assets/icons/icons'

export default function Header() {
	const [Open, setOpen] = useState(false)
	const handleClick = () => setOpen(!Open)

	return (
		<header className="flex flex-col w-full px-[30px] md:px-[55px] sticky top-0 z-20 bg-[#39289F] py-[10px] md:pt-[40px]">
			<div className="flex justify-between items-center ">
				<h1 className="text-2xl">Logo</h1>
				<div className="flex items-center">
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
			<div className="relative mt-2 ">
				{Open && (
					<div className=" items-center text-lg bg-white text-[#39289F] font-medium flex flex-col absolute w-full rounded-[15px] overflow-hidden z-50">
						<h2 className="py-2">Home</h2>
						<h2 className="py-2">Sobre nosotros</h2>
						<h2 className="py-2">Libro</h2>
						<h2 className="py-2">Contactenos</h2>
					</div>
				)}
			</div>
		</header>
	)
}
