import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MenuClose, MenuOpen } from '../assets/icons/icons'
import logo from '../assets/icons/logo.svg'
export default function Header() {
	const [Open, setOpen] = useState(false)
	const handleClick = () => setOpen(!Open)

	return (
		<header className="flex flex-col w-full fixed top-0 z-20 bg-[#39289F] p-3 px-[15px] sm:px-[30px] md:px-[40px] lg:px-[55px]">
			<div className="flex justify-between items-center ">
				<div className="text-2xl md:w-1/2 ">
					<Link className="flex space-x-3 w-max " href="/">
						<Image src={logo} alt="logo" className="h-[40px] w-[40px]" />
						<h1 className="hidden sm:inline-flex">Gamers</h1>
					</Link>
				</div>
				<div className=" justify-evenly hidden md:inline-flex md:w-1/2 text-md lg:text-xl">
					<h2>Sobre nosotros</h2>
					<Link className="flex  w-max " href="/libro">
						<h2>Libro</h2>
					</Link>
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
						<h2 className="py-2">Sobre nosotros</h2>
						<Link className="flex w-max " href="/libro">
							<h2 className="py-2">Libro</h2>
						</Link>
						<h2 className="py-2">Contactenos</h2>
					</div>
				)}
			</div>
		</header>
	)
}
