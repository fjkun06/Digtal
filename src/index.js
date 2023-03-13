import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./i18n/i18n";

const App = React.lazy(() => import("./App"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Enterprise = React.lazy(() =>
  import("./components/enterprise/Enterprise")
);
const TermsAndConditions = React.lazy(() =>
  import("./components/terms&conditions/TermsAndConditions")
);
// const MobileApp = React.lazy(() =>
//   import("./components/services/mobile_app/MobileApp")
// );
const UIUX = React.lazy(() => import("./pages/services/UIUX"));
const Consulting = React.lazy(() =>
  import("./components/services/consulting/Consulting")
);
const WebDevelopment = React.lazy(() =>
  import("./components/services/web_development/WebDevelopment")
);
const DigitalMarketing = React.lazy(() =>
  import("./pages/services/digital-marketing")
);
const FourOFour = React.lazy(() => import("./components/errorpage/FourOFour"));
const CookiePloicy = React.lazy(() =>
  import("./components/cookie_policy/CookiePolicy")
);
const CookieSettings = React.lazy(() =>
  import("./components/cookie_settings/CookieSettings")
);
const Career = React.lazy(() => import("./components/career/Career"));
const Contact = React.lazy(() => import("./pages/ContactForm"));
const Blog = React.lazy(() => import("./components/blog/Blog"));
const PrivacyPolicy = React.lazy(() =>
  import("./components/privacy_policy/PrivacyPolicy")
);
const Home = React.lazy(() => import("./pages/Home"));
const SoftwareDevelopment = React.lazy(() =>
  import("./pages/SoftwareDevelopment")
);

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
                <Route
                  path="software-development"
                  element={<SoftwareDevelopment />}
                />
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
              {/* <Route
                path="software-development"
                element={<SoftwareDevelopment />}
              /> */}
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
