import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerticalNavbar from "./components/VerticalNavbar";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
function App() {
  return (
    <div>
      <Router>
        <div className="grid grid-cols-12 h-screen bg-pr">
          <div className=" col-span-2">
            <VerticalNavbar />
          </div>
          <div className="col-span-10">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<HeroSection />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
