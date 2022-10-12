import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
	const data = useLoaderData().data

	return (
		<section className='flex items-center h-screen p-5 bg-gray-100 text-gray-900 mx-auto sm:py-5 lg:py-5 lg:flex-row'>
			<div className='container w-[80%] h-[80%] flex flex-col items-center justify-center px-2 mx-auto my-1'>
				<div className='m-5'>
					<h1 className='lg:text-4xl md:text-2xl sm:text-xl font-bold bg-slate-800 text-white p-3 rounded'>Chart for total quiz</h1>
				</div>
				<ResponsiveContainer>
					<LineChart
						data={data}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<Legend />
						<Tooltip />
						<CartesianGrid strokeDasharray="5 5" />
						<Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 10 }} strokeWidth={2} />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
}

export default Statistics;
