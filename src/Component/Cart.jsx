import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({ data }) => {
    const { id, name, logo, total } = data
    return (
        <div className="flex flex-col transition duration-300 bg-gray-800 rounded shadow-sm hover:shadow">
            <div className="relative w-full h-48">
                <img
                    src={logo}
                    className="object-cover-fill  w-full h-full "
                    alt="Plan"
                />
            </div>
            <div className="flex flex-col justify-between flex-grow p-8 border border-t-0 rounded-b">
                <div>
                    <div className="text-2xl text-white font-semibold">{name}</div>
                    <div className="mt-1 mb-4 mr-1 text-white text-lg  sm:text-lg">
                        Total quiz:<span className='dark:dark:text-yellow-400 font-bold'> {total}</span>
                    </div>
                </div>
                <Link
                    to={`/${id}`}
                    className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                >
                    <button>
                        Start Quiz
                    </button>

                </Link>
            </div>
        </div>
    );
};

export default Cart;