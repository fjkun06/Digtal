import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './i18n/i18n';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/en">
              <Route path="home" element={<Home />} />
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
            <Route path="home" element={<Home />} />

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
            <Route path="home" element={<Home />} />

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
