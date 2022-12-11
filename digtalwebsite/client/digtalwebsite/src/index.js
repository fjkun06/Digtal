import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./i18n/i18n";
import "./index.css";
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
import HomeSkeleton from "./routes/skeletons/HomeSkeleton";
import ServiceSection from "./components/home/services/main";

const root = ReactDOM.createRoot(document.getElementById("root"));
const majorRoutes = ["/en", "/fr", "de"];
root.render(
  <React.Suspense fallback={<HomeSkeleton />}>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />}>
          {majorRoutes.map((route, index) => (
            <Route path={route} key={index}>
              <Route index exact element={<ServiceSection />} />
              {/* <Route path="home" element={<Home />} /> */}
              <Route path="enterprise" element={<Enterprise />} />
              <Route path="services">
                <Route index element={<Services />} />
                <Route path="consulting" element={<Consulting />} />
                <Route
                  path="software-development"
                  element={<WebDevelopment />}
                />
                <Route
                  path="digital-marketing"
                  element={<DigitalMarketing />}
                />
                <Route path="ui-ux-design" element={<DigitalMarketing />} />
              </Route>
              <Route path="contact-us" element={<Contact />} />
              <Route
                path="about-us"
                element={() => import("./routes/footer/AboutUs")}
              />
              <Route path="news" element={<News />} />
              <Route path="legal-notice" element={<LegalPolicy />} />
              <Route path="terms-of-use" element={<TermsOfUse />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<FourOFour />} />
            </Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Suspense>
);
