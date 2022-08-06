import AboutUs from "./pages/AboutUs";

// import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Route, Routes} from "react-router-dom";
import OurWorks from './pages/OurWorks';
import ContactUs from './pages/ContactUs';
import MovieDetail from './pages/MovieDetail';







function App() {
  return (


    <BrowserRouter>
      <Routes>
            <Route path="/" exact element={<App />} />
            <Route path="/works" exact element={<OurWorks />} />
            <Route path="/works/:id" element={<MovieDetail />} />
            <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>   
    );
}

export default App;
