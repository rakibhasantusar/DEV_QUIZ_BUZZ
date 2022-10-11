import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Statistics = () => {
	const data = useLoaderData().data
	console.log(data);

	return (
		<section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900 mx-auto sm:py-12 lg:py-24 lg:flex-row'>
			<div className='container w-full h-full flex flex-col items-center justify-center px-5 mx-auto my-8'>
				<div className='m-9'>
					<h1 className='text-4xl'>Chart for total quiz</h1>
				</div>
				<ResponsiveContainer>
					<LineChart
						data={data}
					>
						<XAxis dataKey="name" />
						<YAxis />
						<Legend />
						<Tooltip />
						<Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
						<Line type="monotone" dataKey="id" stroke="#82ca9d" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		</section>
	);
}

export default Statistics;
