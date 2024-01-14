import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AboutUs from './components/AboutUs';
import Error from './components/Error';
import Contact from './components/Contact';
import Body from './components/Body';
import RestaurantMenu from './components/RestaurantMenu';
import Login from './components/Login';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';


// Chunking
// Lazy Loading
// Code Splitting
// Dynamic Bundling
// On Demand Loading
// Dynamic Import
/*
  All the above terminologies represent the same, i.e Lazy loading --> bundling different components differently...
*/


// Code for lazy loading...
const Instamart = lazy(() => import("./components/Instamart"));

// Upon on demand loading --> upon render --> React suspends loading.
// Hence we use Suspense from React to render on-demand-loading.

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <AboutUs />,
        children: [
          {
            path: "profile",
            element: <Profile />
          }
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />
      },
      {
        path: "/instamart",
        element:
          <Suspense fallback={<Shimmer/>}>
            <Instamart />
          </Suspense>
      },
      {
        path: "/login",
        element: <Login />
      }
    ]
  },
  // {
  //   path: "/about",
  //   element: <AboutUs />
  // }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
