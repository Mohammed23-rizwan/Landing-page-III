import MainMenubar from "./components/MainMenubar";
import TopBar from "./components/TopBar";
import TopNavbar from "./components/topNavbar";

const App = () => {
  return (
    <div className="w-full h-full bg-red-300 flex flex-col items-center ">
      <div className=" w-full ">
        <TopNavbar />
        <TopBar />
        <MainMenubar />
      </div>
    </div>
  );
};

export default App;
