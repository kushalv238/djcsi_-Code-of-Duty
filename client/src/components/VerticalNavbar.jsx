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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPeopleGroup, faCube, faChartBar } from "@fortawesome/free-solid-svg-icons";

import "../stylesheets/sidebar.css";

const VerticalNavbar = () => {
  return (
    <div id="sidebar">
      <div className="logo">
        <div className="logo-img">
          <img src="" alt="logo" />
        </div>
        <div className="logo-title">
          <p>Name</p>
        </div>
      </div>
      <div>
        <ul className="list">
          <div className="list-item">
            <FontAwesomeIcon icon={faHome} />
            <li className="list-item-title">
              <Link to="/">Home</Link>
            </li>
          </div>
          <div className="list-item">
            <BsFillPeopleFill />
            <li className="list-item-title">
              <Link to="/employee">Employee</Link>
            </li>
          </div>
          <div className="list-item">
            <AiOutlineAppstore />
            <li className="list-item-title">
              <Link to="/report">Report</Link>
            </li>
          </div>
          <div className="list-item">
            <BsGraphDown />
            <li className="list-item-title">
              <Link to="/recommend">Recommended</Link>
            </li>
          </div>
          <div className="list-item">
            <IoMdNotifications />
            <li className="list-item-title">
              <Link to="/notifications">Notification</Link>
            </li>
          </div>
          <div className="list-item">
            <AiOutlineCreditCard />
            <li className="list-item-title">
              <Link to="/billing">Billing</Link>
            </li>
          </div>
          <div className="list-item ">
            <AiFillSetting />
            <li className="list-item-title">
              <Link to="/setting">Settings</Link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default VerticalNavbar;
