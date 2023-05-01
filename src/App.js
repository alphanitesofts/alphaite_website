import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Main/Home";
import Footer from "./Components/Body/Footer";
import Contact from "./Components/Main/Contact";

import Preloader from "./Components/Body/Preloader";
import MemberProfile from "./Components/Profiles/MemberProfile";

function App() {
  return (
    <div className="top-header">
      <Router>
        {/* <Preloader /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ContactUs" element={<Contact />} />
          <Route path="ContactUs" element={<MemberProfile />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
