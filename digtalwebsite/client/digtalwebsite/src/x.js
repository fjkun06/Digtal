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
               <Route path="mobile-development" element={<MobileDevelopment />} />
            </Route>
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<FourOFour />} />
         </Route>
      </Route>

      <Route path="/de" element={<App />}>
         {/* <Route path="/de" element={<App />}> */}
         <Route path="home" element={<Home />} />

         <Route path="enterprise" element={<Enterprise />} />
         <Route path="services" element={<Services />}>
            <Route index element={<Consulting />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="mobile-development" element={<MobileDevelopment />} />
         </Route>
         <Route path="contact" element={<Contact />} />
         <Route path="*" element={<FourOFour />} />
         {/* </Route> */}
      </Route>

      <Route path="/fr" element={<App />}>
         {/* <Route path="/de" element={<App />}> */}
         <Route path="home" element={<Home />} />

         <Route path="enterprise" element={<Enterprise />} />
         <Route path="services" element={<Services />}>
            <Route index element={<Consulting />} />
            <Route path="web-development" element={<WebDevelopment />} />
            <Route path="mobile-development" element={<MobileDevelopment />} />
         </Route>
         <Route path="contact" element={<Contact />} />
         <Route path="*" element={<FourOFour />} />
         {/* </Route> */}
      </Route>
   </Routes>
</BrowserRouter>;
