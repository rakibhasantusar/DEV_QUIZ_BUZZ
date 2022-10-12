import React from 'react';

const Blog = () => {
    return (
        <div>
            <section>
                <div className="container mx-auto shadow-2xl   dark:bg-yellow-400">
                    <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-32 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Blog Area</h1>
                    </div>
                </div>
            </section>
            <section>
                <div className=" dark:dark:text-gray-100 m-5 mt-10">
                    <div className="container mt-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold">1.what is the purpose of react router?</h2>
                            <p className="mt-3">ReactJS Router is mainly used for developing Single Page Web Applications. React Router is used to define multiple routes in the application. When a user types a specific URL into the browser, and if this URL path matches any 'route' inside the router file, the user will be redirected to that particular route. React Router is a standard library system built on top of the React and used to create routing in the React application using React Router Package. It provides the synchronous URL on the browser with data that will be displayed on the web page. It maintains the standard structure and behavior of the application and mainly used for developing single page web applications.</p>
                        </div>
                    </div>
                    <div className="container mt-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold">2.How does context Api work?</h2>
                            <p className="mt-3">The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.React.createContext() is all you need. It returns a consumer and a provider. Provider is a component that as it's names suggests provides the state to its children. It will hold the "store" and be the parent of all the components that might need that store. </p>
                        </div>
                    </div>
                    <div className="container mt-4 max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:dark:bg-gray-900">
                        <div className="mt-3">
                            <h2 rel="noopener noreferrer" className="text-3xl font-bold">3.Detail about useRef() Hook</h2>
                            <p className="mt-3">The useRef hook is the new addition in React 16.8.The useRef is a hook that allows to directly create a reference to the DOM element in the functional component. Syntax:
                                <span className='dark:bg-slate-500 p-[2px] m-2 rounded-md text-yellow-100'>  const refContainer = useRef(initialValue);</span>
                                The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;