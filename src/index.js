import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Home from "./sites/Home"
import Gallery from "./sites/Gallery"
import Shop from './sites/Shop';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Home />}/>
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/shop" element={<Shop />} />
  </Route>
))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);