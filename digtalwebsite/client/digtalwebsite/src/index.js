import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./i18n/i18n";
import Enterprise from "./routes/Enterprise";
import Services from "./routes/services/Services";
import Consulting from "./routes/services/Consulting";
import WebDevelopment from "./routes/services/WebDevelopment";
import DigitalMarketing from "./routes/services/DigitalMarketing";
import FourOFour from "./routes/FourOFour";
import Home from "./routes/Home";
import AboutUs from "./routes/footer/AboutUs";
import LegalPolicy from "./routes/footer/LegalPolicy";
import News from "./routes/footer/News";
import Contact from "./components/ContactForm";
import TermsOfUse from "./routes/footer/TermsOfUse";
import PrivacyPolicy from "./routes/footer/PrivacyPolicy";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<App />}>
            <Route path="/en">
              <Route index exact element={<Home />} />
              {/* <Route path="home" element={<Home />} /> */}
              <Route path="enterprise" element={<Enterprise />} />
              <Route path="services">
                <Route index element={<Services />} />
                <Route path="consulting" element={<Consulting />} />
                <Route path="web-development" element={<WebDevelopment />} />
                <Route path="digital-marketing" element={<DigitalMarketing />} />
              </Route>
              <Route path="contact" element={<Contact />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="news" element={<News />} />
              <Route path="legal-notice" element={<LegalPolicy />} />
              <Route path="terms-of-use" element={<TermsOfUse />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<FourOFour />} />
            </Route>
          </Route>

          <Route path="/de" element={<App />}>
            {/* <Route path="/de" element={<App />}> */}
            <Route index exact element={<Home />} />

            <Route path="enterprise" element={<Enterprise />} />
            <Route path="services">
              <Route index element={<Services />} />
              <Route path="consulting" element={<Consulting />} />
              <Route path="web-development" element={<WebDevelopment />} />
              <Route path="digital-marketing" element={<DigitalMarketing />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="news" element={<News />} />
            <Route path="legal-notice" element={<LegalPolicy />} />
            <Route path="terms-of-use" element={<TermsOfUse />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<FourOFour />} />
            {/* </Route> */}
          </Route>

          <Route path="/fr" element={<App />}>
            {/* <Route path="/de" element={<App />}> */}
            <Route index exact element={<Home />} />

            <Route path="enterprise" element={<Enterprise />} />
            <Route path="services">
              <Route index element={<Services />} />
              <Route path="consulting" element={<Consulting />} />
              <Route path="web-development" element={<WebDevelopment />} />
              <Route path="digital-marketing" element={<DigitalMarketing />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="news" element={<News />} />
            <Route path="legal-notice" element={<LegalPolicy />} />
            <Route path="terms-of-use" element={<TermsOfUse />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />

            <Route path="*" element={<FourOFour />} />
            {/* </Route> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  </React.StrictMode>
);
