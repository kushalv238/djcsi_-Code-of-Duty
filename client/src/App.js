import { Routes, Route } from "react-router-dom";
import VerticalNavbar from "./components/VerticalNavbar";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import Employee from './components/Employees';
import './stylesheets/home.css'
import { useState } from "react";

function App() {
  const [page, setPage] = useState(0)

  return (
    <div>
      <main>
        <VerticalNavbar page={page} setPage={setPage} />
        <div className="main-content">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<HeroSection />} />
            <Route exact path="/employees" element={<Employee />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

export default App;
