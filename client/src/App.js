import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerticalNavbar from "./components/VerticalNavbar";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import './stylesheets/home.css'


function App() {
  return (
    <div>
      <Router>
        <main>
          <VerticalNavbar />
          <div className="main-content">
            <Navbar />
            <Routes>
              <Route exact path="/" element={<HeroSection />} />
            </Routes>
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
