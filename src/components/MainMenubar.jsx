import LeftTab from "./LeftTab";
import RightTab from "./RightTab";

const MainMenubar = () => {
  return (
    <div className="mt-2 w-full h-full lg:max-h-[710px] flex gap-1 lg:overflow-hidden  md:relative flex-col md:flex-col lg:flex-row z-10">
      <LeftTab />
      <RightTab />
    </div>
  );
};

export default MainMenubar;
