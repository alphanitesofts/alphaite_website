import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Main/Home";
import Footer from "./Components/Body/Footer";
import Contact from "./Components/Main/Contact";

function App() {
  return (
    <div className="top-header">
      <Router>
        {/* <Preloader /> */}
        {/* <Intro/> */}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ContactUs" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
