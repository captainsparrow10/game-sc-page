import Image from 'next/image'
import React from 'react'
import logo from '../../assets/icons/logo.svg'
export default function Contactenos() {
	return (
		<div className="flex flex-col justify-between bg-[#070707] p-5 space-y-5 after:px-[15px] sm:px-[30px] md:px-[40px] lg:px-[55px]">
			<div className="flex justify-between">
				<div className="flex flex-col space-y-3">
					<Image src={logo} alt="logo" className="h-[40px] w-[40px]" />
					<h2 className="text-[14px] font-[500] text-gray-400 lg:text-[18px]">
						Gamers
					</h2>
				</div>
				<div className="flex flex-col space-y-3">
					<h1 className="text-[20px] font-[500] text-gray-300 lg:text-[28px]">
						Contactenos
					</h1>
					<h2 className="text-[14px] font-[500] text-gray-400 lg:text-[18px]">
						+50712345678
					</h2>
				</div>
			</div>

			<div className="flex items-center border-t border-solid border-white pt-4 justify-center">
				<h1 className="text-[12px] font-[500] text-gray-400 lg:text-[16px]">
					Copyright ® 2022 prodesigner All rights Recerved
				</h1>
			</div>
		</div>
	)
}
