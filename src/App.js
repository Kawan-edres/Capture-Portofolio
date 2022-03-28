import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./Components/GlobalStyle";
// Import Pages
import Nav from "./Components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";

//Router
import { Route, Routes, useLocation, Navigate } from "react-router-dom";

//Animations   la har kwe route akani lebw lawe am propertya import bka bo page transition
import { AnimatePresence } from "framer-motion";

//Scroll fixer
import ScrollTop from "./Components/ScrollTop";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <ScrollTop />
      <Nav />

      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/work" element={<OurWork />} />
          <Route path="/work/:id" element={<MovieDetail />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
