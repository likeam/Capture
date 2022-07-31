import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWorks from "./pages/OurWorks";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";





function App() {
  return (

  <div>
    <Nav />
    <GlobalStyle />
    <AboutUs />
  </div>
  );
}

export default App;
