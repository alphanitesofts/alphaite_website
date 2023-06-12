import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Main/Home";
import Footer from "./Components/Body/Footer";
import Contact from "./Components/Main/Contact";
import MemberProfile from "./Components/Profiles/MemberProfile";
import Portfolio from "./Components/Portfolio/Portfolio";
import Projectinfo from "./Components/Portfolio/Projectinfo";

function App() {

  return (
    <div className="top-header">
    
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ContactUs" element={<Contact />} />
            <Route path="Web-Portfolio" element={<Portfolio />} />
            <Route path="MemberProfile/:id" element={<MemberProfile />} />
            <Route path="Project-info/:id" element={<Projectinfo />} />
          </Routes>
          <Footer />
        </Router>
 
    </div>
  );
}
export default App;
