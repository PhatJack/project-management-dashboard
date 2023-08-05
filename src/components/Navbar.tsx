import React, { useState } from 'react'
import { FcWorkflow } from 'react-icons/fc'
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsGrid } from 'react-icons/bs'
import { TbMessageDots } from 'react-icons/tb'
import { GoTasklist } from 'react-icons/go'
import { LuUsers } from 'react-icons/lu'
import { MdOutlineSettingsSuggest } from 'react-icons/md'

const Navbar = () => {

	const [click, setClick] = useState(false);
	const menu = [
		{
			icon: BsGrid,
			title: "Home"
		},
		{
			icon: TbMessageDots,
			title: "Messages"
		},
		{
			icon: GoTasklist,
			title: "Tasks"
		},
		{
			icon: LuUsers,
			title: "Members"
		},
		{
			icon: MdOutlineSettingsSuggest,
			title: "Setting"
		}
	]
	return (
		<div className='flex-[0_1_15%] h-screen'>
			<div className="flex flex-col justify-center">
				<div className="top-content p-6 border-b border-r">
					<nav className="flex flex-row items-center justify-between">
						<button className='flex gap-2 items-center text-xl font-semibold'>
							<FcWorkflow size={25} />
							Project M.
						</button>
						{
							click
								? <BsChevronDoubleLeft size={22} className="text-gray-500 cursor-pointer" onClick={() => setClick(!click)} />
								: <BsChevronDoubleRight size={22} className="text-gray-500 cursor-pointer" onClick={() => setClick(!click)} />
						}
					</nav>
				</div>
				<div className="body-content p-6 border-r border-b">
					<ul className="flex flex-col gap-5">
						{menu.map((item, index) => (
							<li className='flex items-center gap-2 text-gray-500 text-base' key={index}>
								<item.icon size={22}/>
								{item.title}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Navbar;