import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import './i18n/i18n';
import Enterprise from './routes/Enterprise';
import Services from './routes/Services';
import Consulting from './routes/Consulting';
import WebDevelopment from './routes/WebDevelopment';
import MobileDevelopment from './routes/MobileDevelopment';
import Contact from './routes/Contact';
import FourOFour from './routes/FourOFour';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<App />}>
               <Route path="en">
                  <Route path="enterprise" element={<Enterprise />} />
                  <Route path="services" element={<Services />}>
                     <Route index element={<Consulting />} />
                     <Route path="web-development" element={<WebDevelopment />} />
                     <Route path="mobile-development" element={<MobileDevelopment />} />
                  </Route>
                  <Route path="contact" element={<Contact />} />
                  <Route path="*" element={<FourOFour />} />
               </Route>
            </Route>
         </Routes>
      </BrowserRouter>
   </React.StrictMode>
);
