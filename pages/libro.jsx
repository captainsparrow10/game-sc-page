import React from 'react'
import Drawer from '../components/Libro/Drawer'

export default function libro() {
	return (
		<div className="bg-[#39289F] text-white z-0 min-h-screen">
			<main className="px-[15px] sm:px-[30px] md:px-[40px] lg:px-[55px]">
				<Drawer />
			</main>
		</div>
	)
}
