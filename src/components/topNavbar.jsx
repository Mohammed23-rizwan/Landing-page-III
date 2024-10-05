import logo from "../assets/avon-fav-icon.ico";
import { Link } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { CiSettings } from "react-icons/ci";
import { RxAvatar, RxHamburgerMenu } from "react-icons/rx";
import { CiPower } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import clsx from "clsx";
import { MdClose } from "react-icons/md";

const topNavbar = () => {
  const [istrue, setIstrue] = useState(false);

  return (
    <div>
      <nav className="flex justify-between h-[50px] items-center px-4 bg-[#ffffff] shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
        <div className="logo flex items-center">
          <div className="image-container w-[25px] h-[25px]">
            <img src={logo} className="w-full h-full" alt="" />
          </div>
          <h2 className="text-lg px-2">my-will</h2>
        </div>
        <div className="left-menu hidden md:block">
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
        <div className="lg:hidden md:hidden">
          <RxHamburgerMenu
            className="text-xl"
            onClick={() => {
              setIstrue(true);
            }}
          />
        </div>
        <div
          className={clsx(
            " fixed top-0 right-0  w-1/2 h-screen bg-slate-200 z-10 transition-all",
            istrue && "translate-x-0",
            istrue || "translate-x-full"
          )}
          // className="fixed top-0 right-0 w-[50%] h-screen bg-black z-10"
        >
          <div>
            <MdClose
              className="text-3xl flex items-center w-full mt-4 cursor-pointer"
              onClick={() => {
                setIstrue(false);
              }}
            />
          </div>
          <div>
            <ul className=" flex items-center flex-col justify-center h-screen gap-5">
              <li className="relative flex w-full justify-between px-2">
                <IoIosNotifications className="text-3xl text-[#000000fe] cursor-pointer font-[300]" />
                <p className="text-2xl font-[300]">Notification</p>
                <div className="container absolute w-[13px] h-[13px] bg-[#2A68B1] flex justify-center items-center rounded-[50%] top-0 left-3.5">
                  <p className="text-[10px] text-[#fff]">4</p>
                </div>
              </li>
              <li className="flex  w-full justify-between px-2">
                <CiSettings className="text-3xl  cursor-pointer text-[#000000fe]" />
                <p className="text-2xl font-[300]">Setting</p>
              </li>
              <li className="w-full">
                <Link
                  to="/user-info"
                  className="flex w-full justify-between px-2"
                >
                  <RxAvatar className="text-3xl text-[#000000fe] cursor-pointer" />
                  <p className="text-2xl font-[300]">Profile</p>
                </Link>
              </li>
              <li className="flex w-full justify-between px-2">
                <CiPower className="text-3xl text-[#000000fe] cursor-pointer" />
                <p className="text-2xl font-[300]">Sign Off</p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default topNavbar;
