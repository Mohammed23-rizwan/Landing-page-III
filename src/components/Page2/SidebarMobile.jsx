import clsx from "clsx";
import React, { useState } from "react";
import img from "../../assets/pexels-moh-adbelghaffar-771742.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const SidebarMobile = () => {
  const [click, SetClick] = useState(true);
  return (
    <div className="lg:hidden fixed bottom-0 left-0 z-10 ">
      <div className="w-[30px] h-[60px] bg-[#055891] rounded-r-[60px] justify-center fixed bottom-20 left-0 z-10">
        <FaAngleRight
          className=" h-full text-xl text-white "
          onClick={() => {
            SetClick(!click);
          }}
        />
      </div>

      <div
        className={clsx(
          "lg:hidden fixed top-0 left-0  w-full backdrop-blur-sm h-full z-10 bg-black/50",
          click && "hidden"
        )}
      >
        <div className="w-[50%] bg-[#055891]  h-full realative z-10 left-0">
          <div className="w-[30px] h-[60px] bg-[#055891] rounded-r-[60px] flex justify-center absolute bottom-20 sm:left-[340px] md:left-[380px] left-[212px] z-10">
            <FaAngleLeft
              className="h-full text-sm text-white"
              onClick={() => {
                SetClick(!click);
              }}
            />
          </div>
          <div className="flex flex-col h-full justify-between">
            <div className="pt-4 flex flex-col items-center">
              <div className="relative w-[60%] h-[170px] md:h-[180px]">
                <img src={img} alt="" className="w-full h-full object-cover" />
                <h2 className="absolute bottom-0 w-full text-center text-white">
                  Ethen 'Wills'
                </h2>
              </div>
              <table className="mt-8">
                <tbody className="text-white">
                  <tr>
                    <td className="font-bold">DOC :</td>
                    <td>23/03/1998</td>
                  </tr>
                  <tr>
                    <td className="font-bold">Status :</td>
                    <td>Complete</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div>
              <Link
                to={"/"}
                className="flex items-center pb-4 justify-center gap-3"
              >
                <IoIosArrowBack className="text-xl text-white" />
                <button className="text-xl text-white">Back Home</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMobile;
