import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Components/Main/Home";
import Footer from "./Components/Body/Footer";
import Contact from "./Components/Main/Contact";
import MemberProfile from "./Components/Profiles/MemberProfile";

function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("load", () => {
      setAssetsLoaded(true);
    });
  }, []);
  return (
    <div className="top-header">
      {!assetsLoaded ? (
        <div>
          <div className="loader-icon fa fa-spin colored-border" />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="ContactUs" element={<Contact />} />
            <Route path="MemberProfile/:id" element={<MemberProfile />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </div>
  );
}
export default App;
