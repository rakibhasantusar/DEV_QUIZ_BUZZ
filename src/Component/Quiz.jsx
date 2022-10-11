import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizTest from './QuizTest';

const Quiz = () => {
    const quiz = useLoaderData().data.questions
    const quizing = useLoaderData().data
    // console.log(quizing);
    return (
        <div>
            <section>
                <img
                    src={quizing.logo}
                    className="object-cover-fill  w-16 h-16 bg-gray-800 mx-auto  "
                    alt="Plan"
                />
                <h2 className='text-gray-800 text-4xl font-semibold mt-5'> Quiz Of : <span className='font-bold'>{quizing.name}</span> </h2>
            </section>
            <section>
                {
                    quiz.map(quizes => <QuizTest
                        key={quizes.id}
                        quizes={quizes}
                    ></QuizTest>)
                }
            </section>
        </div>
    );
};

export default Quiz;