import PersonInformation from "./PersonInformation";

const LeftTab = () => {
  return (
    <div className="w-[75%] max-h-[710px] bg-white sticky left-0 overflow-hidden shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px]">
      <div className="mt-2 px-4 flex justify-between items-center">
        <p className="text-lg mt-2">My Will</p>
        <p className="text-lg mt-2">1/3</p>
      </div>
      <PersonInformation />
    </div>
  );
};

export default LeftTab;
