import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layouts/Main';
import Statistics from './Component/Statistics';
import Blog from './Component/Blog';
import Home from './Component/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
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
