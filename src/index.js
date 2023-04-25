import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckOut from "./components/CheckOut/CheckOut";
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>     
      <BrowserRouter>
        <Routes>
          <Route index path={'/'} element={<App/>}></Route>         
          <Route path={'checkout'} element={<CheckOut/>}></Route>            
        </Routes>
       </BrowserRouter>
        
  </React.StrictMode>
);


