import AboutUs from "./pages/AboutUs";

// import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes} from "react-router-dom";
import OurWorks from './pages/OurWorks';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';

//Animation
import { AnimatePresence } from "framer-motion";








function App() {




  return (
  

    <AnimatePresence>
      <BrowserRouter>
        <Routes>
              <Route path="/" exact element={<AboutUs />} />
              <Route path="/works" exact element={<OurWorks />} />
              <Route path="/works/:id" element={<MovieDetail />} />
              <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>  
    </AnimatePresence> 
    );
}

export default App;
