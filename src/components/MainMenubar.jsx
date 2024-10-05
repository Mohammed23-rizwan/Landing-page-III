import LeftTab from "./LeftTab";
import RightTab from "./RightTab";

const MainMenubar = () => {
  return (
    <div className="mt-2 w-full max-h-[710px] flex gap-1 overflow-hidden relative">
      <LeftTab />
      <RightTab />
    </div>
  );
};

export default MainMenubar;
