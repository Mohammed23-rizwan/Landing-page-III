import ArcProgress from "react-arc-progress";
import { Users } from "../assets/data/data-assets";
import BelowPerson from "./BelowPerson";

const AssetsProgress = () => {
  const val = 0.782;
  const state = {
    progress: 0.782,
    customText: [
      {
        text: 5,
        size: "44px",
        color: "black",
        x: 100,
        y: 94,
        fontWeight: 700,
      },
    ],
  };
  const { customText } = state;

  return (
    <>
      <div className="mt-5 px-4 grid grid-cols-2 md:grid-cols-5 justify-items-center w-full">
        {Users.map((items) => {
          return (
            <div
              className="w-[150px] flex items-center flex-col"
              key={items.id}
            >
              <div className="w-[180px] md:w-[150px] h-[180px] md:h-[150px] flex items-center flex-col">
                <div className="w-full h-full relative">
                  <ArcProgress
                    progress={val}
                    thickness={10}
                    customText={customText}
                    style={{ width: "150px", height: "150px" }}
                  />
                  <p className="absolute bottom-[16px] text-center w-full capitalize font-[500]">
                    {items.name}
                  </p>
                </div>
              </div>
              <p className="text-sm">{items.active}</p>
              <p className="text-sm">{items.inactive}</p>
            </div>
          );
        })}
      </div>
      <BelowPerson />
    </>
  );
};

export default AssetsProgress;
