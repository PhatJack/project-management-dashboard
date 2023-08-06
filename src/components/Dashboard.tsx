import { BiSearch } from 'react-icons/bi'
import { BsCalendarWeek, BsBell,BsChevronDown } from 'react-icons/bs'
import { TbMessageQuestion } from 'react-icons/tb'
import Avatar from '../assets/avt.jpg'
const Dashboard = () => {
	return (
		<div className="w-[85%]">
			<div className='flex flex-col'>
				<header className="px-10 py-4 border-b w-full">
					<div className=" flex justify-between items-center">
						<div className="flex relative flex-[0_0_1]">
							<input type="text" name="" id="" placeholder="Search for something" className="text-sm focus:outline-none px-12 py-3 bg-gray-200 rounded-md" />
							<BiSearch size={28} className="absolute left-3 top-1/4 text-gray-400" />
						</div>
						<div className="flex gap-20">
							<ul className='flex justify-between items-center gap-5'>
								<li>
									<BsCalendarWeek size={22} className="text-gray-400 hover:text-[#5030E5] transition-all cursor-pointer" />
								</li>
								<li>
									<TbMessageQuestion size={22} className="text-gray-400 hover:text-[#5030E5] transition-all cursor-pointer" />
								</li>
								<li>
									<BsBell size={22} className="text-gray-400 hover:text-[#5030E5] transition-all cursor-pointer" />
								</li>
							</ul>
							<div className="flex items-center gap-2">
								<section className='flex flex-col justify-end items-end mr-2'>
									<span className="block">Jack Phat</span>
									<span className="block text-[12px] text-gray-400">HCM City,Viet Nam</span>
								</section>
								<div className="w-10 h-10 overflow-hidden rounded-full">
									<img src={Avatar} alt="" className='w-full h-auto object-center object-cover rounded-full' />
								</div>
								<BsChevronDown size={16} />
							</div>
						</div>
					</div>
				</header>
				<div className="w-full">
					<div className="px-10 pt-4">
						<div className="top-content">
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard;