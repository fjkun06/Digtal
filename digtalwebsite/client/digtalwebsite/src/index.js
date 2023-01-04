import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./i18n/i18n";
// import "./index.scss";
import Enterprise from "./components/enterprise/Enterprise";
import TermsAndConditions from "./components/terms&conditions/TermsAndConditions";
import MobileApp from "./components/services/mobile_app/MobileApp";
import UIUX from "./components/services/uiux/UIUX";
import Consulting from "./components/services/consulting/Consulting";
import WebDevelopment from "./components/services/web_development/WebDevelopment";
import DigitalMarketing from "./components/services/digital_marketing/DigitalMarketing";
import FourOFour from "./components/errorpage/FourOFour";
import CookiePloicy from "./components/cookie_policy/CookiePolicy";
import CookieSettings from "./components/cookie_settings/CookieSettings";
import Career from "./components/career/Career";
import Contact from "./pages/ContactForm";
import Blog from "./components/blog/Blog";
import PrivacyPolicy from "./components/privacy_policy/PrivacyPolicy";
import Home from "./pages/Home";
import SoftwareDevelopment from "./pages/SoftwareDevelopment";

const AboutUs = React.lazy(() => import("@pages/AboutUs.js"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const majorRoutes = ["/en", "/fr", "de"];
root.render(
  <React.Suspense>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<App />}>
          {majorRoutes.map((route, index) => (
            <Route path={route} key={index}>
              <Route index exact element={<Home />} />
              {/* <Route path="home" element={<Home />} /> */}
              <Route path="enterprise" element={<Enterprise />} />
              <Route path="services">
                <Route index element={<App />} />
                <Route path="consulting" element={<Consulting />} />
                <Route path="web-development" element={<WebDevelopment />} />
                <Route path="mobile-app-development" element={<MobileApp />} />
                <Route
                  path="digital-marketing"
                  element={<DigitalMarketing />}
                />
                <Route path="ui-ux-design" element={<UIUX />} />
              </Route>
              <Route path="contact-us" element={<Contact />} />
              {/* <Route
                path="about-us"
                element={() => import("./routes/footer/AboutUs.js")}
              /> */}
              <Route path="about-us" element={<AboutUs />} />
              <Route
                path="software-development"
                element={<SoftwareDevelopment />}
              />
              <Route path="blog" element={<Blog />} />
              <Route path="career" element={<Career />} />
              <Route
                path="terms_and_conditions"
                element={<TermsAndConditions />}
              />
              <Route path="cookie-policy" element={<CookiePloicy />} />
              <Route path="cookie-settings" element={<CookieSettings />} />
              <Route path="privacy-policy" element={<PrivacyPolicy />} />
              <Route path="*" element={<FourOFour />} />
            </Route>
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.Suspense>
);
