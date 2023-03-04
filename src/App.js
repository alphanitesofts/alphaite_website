import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Main/Home";
import Footer from "./Components/Body/Footer";
import Intro from './Components/Body/Info'
import Navbar from "./Components/Body/Navbar";
import Preloader from "./Components/Body/Preloader";
import Contact from "./Components/Main/Contact";

function App() {
  return (
    <div className="top-header">
      <Router>
        <Preloader />
        {/* <Intro/> */}
        <Navbar />
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
