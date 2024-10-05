import img from "../assets/pexels-ron-lach-10484715.jpg";
import { IoIosAdd } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa";

const BelowPerson = () => {
  return (
    <div className="md:mt-10">
      <div className="flex justify-between items-center mx-4 py-4">
        <div className="md:w-[270px] h-[50px] flex rounded-[25px] items-center relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
          <IoIosAdd className="w-[50px] h-full bg-gradient-to-l from-rose-400 via-fuchsia-500 to-indigo-500 rounded-[50%] text-[#fff] absolute left-0 cursor-pointer" />
          <button className="uppercase w-full text-lg h-full text-center font-bold hidden md:block">
            Add New
          </button>
        </div>
        <div className="flex items-end">
          <div className="flex items-center flex-col mr-3">
            <h2 className="text-xl text-[#BC5F3E]">Up Next</h2>
            <FaAngleDown className="text-xl" />
          </div>
          <div className="relative">
            <img
              className="w-[100px] md:h-[100px] h-[130px] object-cover"
              src={img}
              alt=""
            />
            <h2 className="absolute bottom-0 text-center w-full bg-[#ffffff5b] text-[#fff]">
              Ethan &apos;will&apos;
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BelowPerson;
