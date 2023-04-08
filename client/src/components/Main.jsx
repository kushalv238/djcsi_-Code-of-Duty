import VerticalNavbar from "./VerticalNavbar"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom/dist"
import HeroSection from "../pages/HeroSection"
import Employee from "./Employee"
import { useState, useEffect } from "react"

import getData from '../getInfo/getEmployees'


import jwtDecode from "jwt-decode"

const Main = () => {
    const [page, setPage] = useState(0)
	const [data, setData] = useState([])


    useEffect(() => {
        const token = localStorage.getItem('token')
        const decode = jwtDecode(token);
        const userId = decode._id;

        // console.log(userId)

        async function fetchdata(userId) {
            const newData = await getData({ _id: userId });
            setData(newData);
        }

        fetchdata(userId);
    }, []);

    return (
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
    )
}

export default Main