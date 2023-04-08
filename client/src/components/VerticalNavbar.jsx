import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineAppstore,
  AiOutlineCreditCard,
  AiFillSetting,
} from "react-icons/ai";
import { BsFillPeopleFill, BsGraphDown } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
const VerticalNavbar = () => {
  return (
    <div className="h-screen bg-blue text-white font-poppins">
      <div className="p-10 text-center w-[100%] flex flex-row">
        <div className="mr-5">
          <img src="" alt="logo" />
        </div>
        <div className="text-xl">Name</div>
      </div>
      <div>
        <ul className="my-5 ml-[30px] flex-col">
          <div className="flex flew-row m-2 items-center mb-6">
            <AiOutlineHome />
            <li className="ml-6">
              <Link to="/">Home</Link>
            </li>
          </div>
          <div className="flex flex-row m-2 items-center mb-6">
            <BsFillPeopleFill />
            <li className="ml-6">
              <Link to="/employee">Employee</Link>
            </li>
          </div>
          <div className="flex flex-row m-2 items-center mb-6">
            <AiOutlineAppstore />
            <li className="ml-6">
              <Link to="/report">Report</Link>
            </li>
          </div>
          <div className="flex flex-row m-2 items-center mb-6">
            <BsGraphDown />
            <li className="ml-6">
              <Link to="/recommend">Recommended</Link>
            </li>
          </div>
          <div className="flex flex-row m-2 items-center mb-6">
            <IoMdNotifications />
            <li className="ml-6">
              <Link to="/notifications">Notification</Link>
            </li>
          </div>
          <div className="flex flex-row m-2 items-center mb-6">
            <AiOutlineCreditCard />
            <li className="ml-6">
              <Link to="/billing">Billing</Link>
            </li>
          </div>
          <div className="flex flex-row m-2 items-center mb-6 ">
            <AiFillSetting />
            <li className="ml-6">
              <Link to="/setting">Settings</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default VerticalNavbar;
