import LeftTab from "./LeftTab";
import RightTab from "./RightTab";

const MainMenubar = () => {
  return (
    <div className="mt-2 w-full h-full md:max-h-[710px] flex gap-1 md:overflow-hidden  md:relative flex-col md:flex-row z-10">
      <LeftTab />
      <RightTab />
    </div>
  );
};

export default MainMenubar;
