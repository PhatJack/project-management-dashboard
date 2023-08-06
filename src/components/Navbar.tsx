import React, { useState } from 'react'
import { FcWorkflow, FcIdea } from 'react-icons/fc'
import { BsChevronDoubleLeft, BsChevronDoubleRight, BsGrid } from 'react-icons/bs'
import { TbMessageDots } from 'react-icons/tb'
import { GoTasklist } from 'react-icons/go'
import { LuUsers } from 'react-icons/lu'
import { MdOutlineSettingsSuggest } from 'react-icons/md'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
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

	const projectsMenu = [
		{
			color: "bg-green-400",
			name: "Mobile App",
		},
		{
			color: "bg-orange-400",
			name: "Website Redesign",
		},
		{
			color: "bg-purple-400",
			name: "Design System",
		},
		{
			color: "bg-yellow-400",
			name: "Vercel",
		}
	]
	return (
		<div className={`w-[15%]`}>
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
							<li className='flex items-center align-baseline gap-2 text-gray-500 text-sm font-medium' key={index}>
								<item.icon size={21} />
								{item.title}
							</li>
						))}
					</ul>
				</div>
				<div className="bottom-content p-6 border-r border-b flex flex-col justify-between gap-14">
					<div className="flex flex-col gap-3">
						<div className="flex justify-between items-center mb-4">
							<span className="block uppercase text-sm">my projects</span>
							<button className='w-5 h-5 border border-gray-300 rounded-md flex items-center justify-center text-gray-400'>+</button>
						</div>
						<div className="flex flex-col gap-2">
							{projectsMenu.map((item, index) => (
								<div className={`flex justify-between items-center p-3 rounded-md ${index == 0 ? 'bg-[#5030E5]/10' : ''}`} key={index}>
									<div className="flex gap-3 items-center">
										<span className={`w-3 h-3 ${item.color} rounded-full`}></span>
										<span className={`block ${index == 0 ? 'text-black' : 'text-gray-500'} text-sm font-medium transition-all hover:text-black cursor-pointer`}>{item.name}</span>
									</div>
									<button>
										<BiDotsHorizontalRounded size={20} className="hidden" />
									</button>
								</div>
							))}
						</div>
					</div>
					<div className="p-3 bg-gray-200 flex-[0_0_1] z-10 relative rounded-3xl">
						<div className="flex justify-center items-center flex-col my-8 px-3">
							<span className="block absolute -top-10 -z-10 rounded-full bg-gray-200 p-8">
								{/* <FcIdea size={20} className="bg-transparent light-shadow" /> */}
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='light-shadow'>
									<path d="M19.21 6.36C18.17 4.26 16.16 2.71 13.83 2.2C11.39 1.66 8.88997 2.24 6.97997 3.78C5.05997 5.31 3.96997 7.6 3.96997 10.05C3.96997 12.64 5.51997 15.35 7.85997 16.92V17.75C7.84997 18.03 7.83997 18.46 8.17997 18.81C8.52997 19.17 9.04997 19.21 9.45997 19.21H14.59C15.13 19.21 15.54 19.06 15.82 18.78C16.2 18.39 16.19 17.89 16.18 17.62V16.92C19.28 14.83 21.23 10.42 19.21 6.36Z" fill="#FBCB18" />
									<path d="M15.26 22C15.2 22 15.13 21.99 15.07 21.97C13.06 21.4 10.95 21.4 8.93997 21.97C8.56997 22.07 8.17997 21.86 8.07997 21.49C7.96997 21.12 8.18997 20.73 8.55997 20.63C10.82 19.99 13.2 19.99 15.46 20.63C15.83 20.74 16.05 21.12 15.94 21.49C15.84 21.8 15.56 22 15.26 22Z" fill="#FBCB18" />
								</svg>
							</span>
							<span className="block mb-3">Thoughts Time</span>
							<p className='text-gray-400 text-sm text-center'>We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
							<button className='p-3 bg-white text-black rounded-lg mt-3'>Write a message</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar;