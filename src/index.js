import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { BrowserRoute, Route, Routes} from "react-router-dom";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

            <BrowserRoute>
                  <Routes>
                        <Route path="/" element={<App />} />
                  </Routes>
            </BrowserRoute>      

      

);



