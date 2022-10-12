import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const QuizTest = ({ quizes }) => {
    const { correctAnswer, options, question, } = quizes
    console.log(quizes);
    const handleCorrect = (answer) => {
        if (answer === correctAnswer) {
            toast.success('your answer is correct', { autoClose: 2000 })
        } else {
            toast.error('your answer is wrong', { autoClose: 2000 })
        }
    }

    return (
        <div className='m-10'>
            <div className="rounded-lg px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 dark:dark:bg-gray-800 dark:dark:text-gray-100">
                <div className='relative' >
                    <div className='absolute left-[95%] bottom-full'>
                        <button onClick={() => toast.success(`Correct answer: ${correctAnswer}`, { autoClose: 2000 })} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                    <div className="md:text-xl sm:text-xl mb-8 lg:text-2xl font-bold leading-none text-center" dangerouslySetInnerHTML={{ __html: question }}></div>
                </div>
                <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                    <button onClick={() => handleCorrect(options[0])}><li className="bg-gray-600 rounded-md p-2">{options[0]}</li></button>
                    <button onClick={() => handleCorrect(options[1])}><li className="bg-gray-600 rounded-md p-2">{options[1]}</li></button>
                    <button onClick={() => handleCorrect(options[2])}><li className="bg-gray-600 rounded-md p-2">{options[2]}</li></button>
                    <button onClick={() => handleCorrect(options[3])}><li className="bg-gray-600 rounded-md p-2">{options[3] || 'amar banano'}</li></button>
                </ul>
            </div>
            <ToastContainer></ToastContainer>
        </div >
    );
};

export default QuizTest;