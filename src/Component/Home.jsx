import React from 'react';
import { useLoaderData } from 'react-router-dom';
import img from "../assets/Business_SVG.svg";
import Cart from './Cart';

const Home = () => {
	const datas = useLoaderData().data
	return (
		<div>
			<section className="dark:dark:bg-gray-800 dark:dark:text-gray-100 mt-2">
				<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
					<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
						<h1 className="text-5xl font-bold leading-none sm:text-6xl">A full
							<span className="dark:dark:text-yellow-400"> Quiz </span> For web developer
						</h1>
						<p className="mt-6 mb-8 text-lg sm:mb-12">This quiz on Frontend Developer Interview Questions will
							<br className="hidden md:inline lg:hidden" /> help you crack your next interview
						</p>
					</div>
					<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
						<img src={img} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
					</div>
				</div>
			</section>
			<section className='m-6' >
				<div className="grid my-11 max-w-md gap-10  lg:max-w-screen-lg sm:gap-10 lg:grid-cols-3 xl:max-w-screen-lg md:mx-auto sm:mx-auto ">
					{
						datas.map(data => <Cart
							key={data.id}
							data={data}
						></Cart>)
					}
				</div>
			</section>
		</div>
	);
};

export default Home;
