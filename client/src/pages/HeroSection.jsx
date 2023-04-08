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
      workingHr: "09hr 02min",
      breakTime: "45min",
      extraHr: "(+)30min",
      status: "Late",
    },
    {
      profile: "/images/icon1.png",
      name: "Kushal",
      contact: "9819778654",
      aadhaar: "18.55",
      workingHr: "09hr 02min",
      breakTime: "45min",
      extraHr: "(+)30min",
      status: "Late",
    },
    {
      profile: "/images/icon1.png",
      name: "Kushal",
      contact: "9819778654",
      aadhaar: "18.55",
      workingHr: "09hr 02min",
      breakTime: "45min",
      extraHr: "(+)30min",
      status: "Late",
    },
  ]);

  return (
    <>
      <div className="bg-lightGrey flex flex-row">
        <div className="bg-lightGrey flex justify-between w-[50%]">
          <div className="flex flex-col justify-center font-poppins ml-10">
            <div className="font-semibold text-[30  px] mb-2">
              Manage Employee
            </div>
            <div className="text-[18px] mb-2">
              Check your daily tasks and schedules
            </div>
            <button className="w-[200px] bg-blue rounded text-white p-1 px-1.5 font-normal text-[12px]">
              Manage Now
            </button>
          </div>
          <div className="mr-10 mt-16">
            <img src="/images/hero.png" alt="" />
          </div>
        </div>
        <div className="bg-lightGrey flex justify-between w-[50%]">
          <div className="flex flex-col justify-center font-poppins ml-10">
            <div className="font-semibold text-[30  px] mb-2">
              Manage Employee
            </div>
            <div className="text-[18px] mb-2">
              Check your daily tasks and schedules
            </div>
            <button className="w-[200px] bg-blue rounded text-white p-1 px-1.5 font-normal text-[12px]">
              Manage Now
            </button>
          </div>
          <div className="mr-10 mt-10">
            <img src="/images/cup.png" alt="" />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between bg-lightGrey p-4">
          <div className="ml-5 w-[1/4] rounded border-black p-2 bg-white">
            <Card />
          </div>
          <div className="w-[1/4] rounded border-black p-2 bg-white">
            <Card />
          </div>
          <div className="w-[1/4] rounded border-black p-2 bg-white">
            <Card />
          </div>
          <div className="mr-5 w-[1/4] rounded border-black p-2 bg-white">
            <Card />
          </div>
        </div>
      </div>
      <table className="m-7 w-full">
        <thead>
          <tr>
            <th className="flex justify-center">Profile</th>
            <th>Name of Employee</th>
            <th>Contact</th>
            <th>Aadhaar</th>
            <th>Working HRs</th>
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
              workingHr={product.workingHr}
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
