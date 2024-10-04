import ArcProgress from "react-arc-progress";

const AssetsProgress = () => {
  const val = 0.782;
  const state = {
    progress: 0.782,
    customText: [
      {
        text: "15",
        size: "44px",
        color: "black",
        x: 100,
        y: 94,
        fontWeight: 700,
      },
      //   { text: "/100", size: "14px", color: "gray", x: 100, y: 122 },
    ],
  };
  const { customText } = state;

  return (
    <div className="mt-5 px-4 grid grid-cols-5 place-items-center">
      <div className="main flex items-center flex-col">
        <div className="assets w-[150px] h-[150px] relative">
          <ArcProgress
            progress={val}
            thickness={10}
            customText={customText}
            style={{ width: "150px", height: "150px" }}
          />
          <p className="absolute bottom-[16px] text-center w-full capitalize font-bold">
            react js
          </p>
        </div>
        <p>6 active assets</p>
        <p>6 inactive assets</p>
      </div>
      <div className="assets w-[150px] h-[150px]">
        <ArcProgress
          progress={val}
          text={"10"}
          thickness={10}
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="assets w-[150px] h-[150px]">
        <ArcProgress
          progress={val}
          thickness={10}
          style={{ width: "150px", height: "150px" }}
          customText={customText}
        />
      </div>
      <div className="assets w-[150px] h-[150px]">
        <ArcProgress
          progress={val}
          text={"rizwan"}
          thickness={10}
          style={{ width: "150px", height: "150px" }}
        />
      </div>
      <div className="assets w-[150px] h-[150px]">
        <ArcProgress
          progress={val}
          text={"rizwan"}
          thickness={10}
          style={{ width: "150px", height: "150px" }}
        />
      </div>
    </div>
  );
};

export default AssetsProgress;
