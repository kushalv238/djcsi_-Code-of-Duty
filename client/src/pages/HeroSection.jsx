import React from "react";
import Card from "../components/Card";
import TableRow from "../components/TableRow";
import { useState } from "react";

const HeroSection = () => {
	const [data, setData] = useState([
		{
			profile: "/images/icon1.png",
			name: "Kushal",
			contact: "9819778654",
			aadhaar: "18.55",
			workerType: "Chef",
			breakTime: "45min",
			extraHr: "(+)30min",
			status: "Late",
		},
		{
			profile: "/images/icon1.png",
			name: "Kushal",
			contact: "9819778654",
			aadhaar: "18.55",
			workerType: "Chef",
			breakTime: "45min",
			extraHr: "(+)30min",
			status: "Late",
		},
		{
			profile: "/images/icon1.png",
			name: "Kushal",
			contact: "9819778654",
			aadhaar: "18.55",
			workerType: "Chef",
			breakTime: "45min",
			extraHr: "(+)30min",
			status: "Late",
		},
		{
			profile: "/images/icon1.png",
			name: "Kushal",
			contact: "9819778654",
			aadhaar: "18.55",
			workerType: "Chef",
			breakTime: "45min",
			extraHr: "(+)30min",
			status: "Late",
		},
		{
			profile: "/images/icon1.png",
			name: "Kushal",
			contact: "9819778654",
			aadhaar: "18.55",
			workerType: "Chef",
			breakTime: "45min",
			extraHr: "(+)30min",
			status: "Late",
		},
		{
			profile: "/images/icon1.png",
			name: "Kushal",
			contact: "9819778654",
			aadhaar: "18.55",
			workerType: "Chef",
			breakTime: "45min",
			extraHr: "(+)30min",
			status: "Late",
		},
		{
			profile: "/images/icon1.png",
			name: "Kushal",
			contact: "9819778654",
			aadhaar: "18.55",
			workerType: "Chef",
			breakTime: "45min",
			extraHr: "(+)30min",
			status: "Late",
		},
	]);

	return (
		<>
			<div className="hero-wrapper">
				<div className="hero-sec">
					<div className="hero-sec-text">
						<div className="hero-title">
							Manage Employee
						</div>
						<div className="hero-sub-text">
							Check your daily tasks and schedules
						</div>
						<button>
							Manage Now
						</button>
					</div>
					<div className="hero-sec-img">
						<img src="/images/hero.png" alt="" />
					</div>
				</div>
				<div className="hero-sec">
					<div className="hero-sec-text">
						<div className="hero-title">
							Top Employee
						</div>
						<div className="hero-sub-text">
							Check your daily tasks and schedules
						</div>
						<button>
							Manage Now
						</button>
					</div>
					<div className="hero-sec-img">
						<img src="/images/cup.png" alt="" />
					</div>
				</div>
			</div>
			<div className="hero-cards-wrapper">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
			<table className="">
				<thead>
					<tr>
						<th className="flex justify-center">Profile</th>
						<th>Name of Employee</th>
						<th>Contact</th>
						<th>Aadhaar</th>
						<th>Worker Type</th>
						<th>Break Time</th>
						<th>Extra HRs</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{data.map((product, key) => (
						<TableRow
							key={key}
							_id={product._id}
							profile={product.profile}
							name={product.name}
							contact={product.contact}
							aadhaar={product.aadhaar}
							workerType={product.workerType}
							breakTime={product.breakTime}
							extraHr={product.extraHr}
							status={product.status}
						/>
					))}
				</tbody>
			</table>
		</>
	);
};

export default HeroSection;
