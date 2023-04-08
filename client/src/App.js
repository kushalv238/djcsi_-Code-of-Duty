import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import VerticalNavbar from "./components/VerticalNavbar";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import Employee from './components/Employees';
import Signup from "./components/Singup";
import './stylesheets/home.css'
import { useState } from "react";
import Login from "./components/Login";

function App() {
	const [page, setPage] = useState(0)
	const user = localStorage.getItem("token");
	const navigate = useNavigate();

	if (!user) {
		// window.location ='signup'
		// navigate('/signup')
		return (
			<Routes>
				<Route path="/" element={<Navigate replace to="/signup" />} />
				<Route exact path = "/signup" element={<Signup />} />
				<Route exact path = "/login" element={<Login />} />
			</Routes>
		)
	}

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
