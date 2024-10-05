import logo from "../assets/avon-fav-icon.ico";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { CiPower } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";

const topNavbar = () => {
  return (
    <div>
      <nav className="flex justify-between h-[50px] items-center px-4 bg-[#ffffff] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="logo flex items-center">
          <div className="image-container w-[25px] h-[25px]">
            <img src={logo} className="w-full h-full" alt="" />
          </div>
          <h2 className="text-lg px-2">my-will</h2>
        </div>
        <div className="left-menu">
          <ul className="flex items-center gap-2">
            <li className="relative">
              <input
                className="outline-none border-b border-[#3e3e3ea1] px-[4px] py-[1px] w-[150px]"
                placeholder="Search.."
              />
              <CiSearch
                className="text-lg absolute top-[2px] right-0 cursor-pointer"
                htmlFor=""
              />
            </li>
            <li className="relative">
              <IoIosNotifications className="text-2xl text-[#3e3e3ea1] cursor-pointer" />
              <div className="container absolute w-[13px] h-[13px] bg-[#2A68B1] flex justify-center items-center rounded-[50%] top-0 right-0">
                <p className="text-[10px] text-[#fff]">4</p>
              </div>
            </li>
            <li>
              <CiSettings className="text-2xl text-[#3e3e3ea1] cursor-pointer" />
            </li>
            <li>
              <Link to="/user-info">
                <RxAvatar className="text-2xl text-[#3e3e3ea1] cursor-pointer" />
              </Link>
            </li>
            <li>
              <CiPower className="text-2xl text-[#3e3e3ea1] cursor-pointer" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default topNavbar;
