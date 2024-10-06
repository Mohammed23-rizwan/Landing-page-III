import { RxAvatar } from "react-icons/rx";
import { IoDocumentOutline, IoHome } from "react-icons/io5";
import { IoIosWallet } from "react-icons/io";
import { GiFamilyTree } from "react-icons/gi";
import { FaPen } from "react-icons/fa";

const Ullist = () => {
  return (
    <div className="w-full h-full lg:h-[75px]">
      <ul className="h-full grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-1 text-[#055891]">
        <li className="flex items-center  h-full gap-4 px-4 border border-[#ffffff65] shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-gradient-to-l from-fuchsia-500 via-pink-600 to-red-700 relative">
          <p className="text-white w-[25px] h-[25px] bg-[#055891] top-2 right-2 absolute text-center rounded-[50%]">
            4
          </p>
          <RxAvatar className="text-4xl text-white" />
          <div className="con">
            <h2 className="text-lg uppercase text-white">Add</h2>
            <p className="capitalize text-sm text-white">Beneficiaries</p>
          </div>
        </li>
        <li className="flex items-center  h-full gap-4 px-4 border border-[#ffffff65] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <IoHome className="text-4xl" />
          <div className="con">
            <h2 className="text-lg uppercase">Add</h2>
            <p className="capitalize text-sm">Assets</p>
          </div>
        </li>
        <li className="flex items-center  h-full gap-4 px-4 border border-[#ffffff65] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <IoIosWallet className="text-4xl" />
          <div className="con">
            <h2 className="text-lg uppercase">Add</h2>
            <p className="capitalize text-sm">liability</p>
          </div>
        </li>
        <li className="flex items-center  h-full gap-4 px-4 border border-[#ffffff65] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <GiFamilyTree className="text-4xl" />
          <div className="con">
            <h2 className="text-lg uppercase">create</h2>
            <p className="capitalize text-sm">Links</p>
          </div>
        </li>
        <li className="flex items-center  h-full gap-4 px-4 border border-[#ffffff65] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <FaPen className="text-4xl" />
          <div className="con">
            <h2 className="text-lg uppercase">Add</h2>
            <p className="capitalize text-sm">signatories</p>
          </div>
        </li>
        <li className="flex items-center  h-full gap-4 px-4 border border-[#ffffff65] shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <IoDocumentOutline className="text-4xl" />
          <div className="con">
            <h2 className="text-lg uppercase">0</h2>
            <p className="capitalize text-sm">Will generation</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Ullist;
