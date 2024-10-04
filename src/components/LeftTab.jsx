import PersonInformation from "./PersonInformation";

const LeftTab = () => {
  return (
    <div className="w-[75%] bg-white min-h-[550px] sticky">
      <div className="mt-2 px-4 flex justify-between items-center">
        <p className="text-lg mt-2">My Will</p>
        <p className="text-lg mt-2">1/3</p>
      </div>
      <PersonInformation />
    </div>
  );
};

export default LeftTab;
