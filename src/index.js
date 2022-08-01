import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes} from "react-router-dom";
import OurWorks from './pages/OurWorks';
import ContactUs from './pages/ContactUs';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

            <BrowserRouter>
                  <Routes>
                        <Route path="/" element={<App />} />
                        <Route path="/works" element={<OurWorks />} />
                        <Route path="/contact" element={<ContactUs />} />
                  </Routes>
            </BrowserRouter>      

      

);



