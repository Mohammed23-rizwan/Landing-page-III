import PersonDetails from "./PersonDetails";
import { Users1 } from "../assets/data/data-assets2";

const RightTab = () => {
  return (
    <div className="md:w-[25%] w-full bg-white sticky right-[-17px] no-scrollbar overflow-y-scroll box-content scroll-smooth shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]">
      <div className="mt-2 px-4 flex justify-between">
        <h2 className="text-lg mt-2 capitalize">signatory</h2>
        <p className="text-lg mt-2">1/4</p>
      </div>
      <PersonDetails Users1={Users1} />
    </div>
  );
};

export default RightTab;
