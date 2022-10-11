import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Statistics from './Component/Statistics';
import Blog from './Component/Blog';
import Home from './Component/Home';
import ErrorArea from './Component/ErrorArea'
  ;

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
          path: 'statistics',
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
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
