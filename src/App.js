import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWorks from "./pages/OurWorks";
import {Switch, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      <Routes>
      <Route path="/">
        <AboutUs />
      </Route>
      <Route path="/contact">    
        <ContactUs />
      </Route>  
      <Route path="/works">
        <OurWorks />
      </Route>
      </Routes>
    </div>
  );
}

export default App;
