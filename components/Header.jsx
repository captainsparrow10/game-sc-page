import Image from 'next/image'
import Link from 'next/link'
import logo from '../assets/icons/logo.svg'
export default function Header() {
	return (
		<header className="flex flex-col w-full fixed top-0 z-20 bg-[#39289F] p-3 px-[15px] sm:px-[30px] md:px-[40px] lg:px-[55px]">
			<div className="flex justify-between items-center ">
				<div className="text-2xl md:w-1/2 ">
					<Link className="flex space-x-3 w-max " href="/">
						<Image src={logo} alt="logo" className="h-[40px] w-[40px]" />
						<h1 className="hidden sm:inline-flex">Gamers</h1>
					</Link>
				</div>
				<div className=" justify-evenly hidden md:inline-flex md:w-1/3 text-md lg:text-xl">
					<Link className="flex  w-max " href="/libro">
						<h2>Libro</h2>
					</Link>
					<Link className="flex  w-max " href="/about">
						<h2>Sobre nosotros</h2>
					</Link>
				</div>
			</div>
		</header>
	)
}
