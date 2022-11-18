import Image from 'next/image'
import React, { useState } from 'react'
import { MenuClose, MenuOpen } from '../assets/icons/icons'
import logo from '../assets/icons/logo.svg'
export default function Header() {
	const [Open, setOpen] = useState(false)
	const handleClick = () => setOpen(!Open)

	return (
		<header className="flex flex-col w-full sticky top-0 z-20 bg-[#39289F] py-[10px] md:py-[20px]">
			<div className="flex justify-between items-center ">
				<div className="text-2xl md:w-1/2 flex space-x-3">
					<Image src={logo} alt="logo" className="h-[40px] w-[40px]" />
					<h1 className="hidden sm:inline-flex">Gamers</h1>
				</div>
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
