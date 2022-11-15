import React from 'react'

export default function Contactenos() {
	return (
		<div className="flex flex-col justify-between bg-[#070707] p-5 space-y-5 py-10">
			<div className='flex justify-between'>
				<div className="flex flex-col space-y-3">
					<h1 className="text-[20px] font-[500] text-gray-300">Logo</h1>
					<h2 className="text-[14px] font-[500] text-gray-400">
						Nombre del grupo
					</h2>
				</div>
				<div className="flex flex-col space-y-3">
					<h1 className="text-[20px] font-[500] text-gray-300">Contactenos</h1>
					<h2 className="text-[14px] font-[500] text-gray-400">+50712345678</h2>
				</div>
			</div>

			<div className="flex items-center border-t border-solid border-white pt-4">
				<h1 className="text-[12px] font-[500] text-gray-400">
					Copyright ® 2022 prodesigner All rights Rcerved
				</h1>
			</div>
		</div>
	)
}
