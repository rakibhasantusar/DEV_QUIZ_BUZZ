import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Statistics from './Component/Statistics';
import Blog from './Component/Blog';
import Home from './Component/Home';
import ErrorArea from './Component/ErrorArea';
import Quiz from './Component/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorArea />,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/home',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: 'statistics',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
        }
      ]
    }
  ])
  return (
    < div className="App" >
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
