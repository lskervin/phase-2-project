import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About"
import Contact from "./components/Contact"
import GameList from './components/GameList.jsx';

const Main = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/home",
          element: <GameList />,
        },
        {
          path: "/",
          element: <GameList />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/contact",
          element: <Contact />
        }
      ],
    },
    // {
    //   path: "*", add error component for error messages
    //   element: <h1>Error</h1>
    // }
  ]);

return (
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
};

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);
