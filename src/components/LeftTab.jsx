import PersonInformation from "./PersonInformation";

const LeftTab = () => {
  return (
    <div className="w-[75%] bg-white min-h-[486px] fixed">
      <div className="container mt-2 px-4 flex justify-between">
        <p className="text-lg">My Will</p>
        <p className="text-lg">1/3</p>
      </div>
      <PersonInformation />
    </div>
  );
};

export default LeftTab;
