import MainMenubar from "./components/MainMenubar";
import TopBar from "./components/TopBar";
import TopNavbar from "./components/topNavbar";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-blue-300 flex flex-col items-center relative overflow-hidden">
      <div className="m-3 w-[97%] ">
        <TopNavbar />
        <TopBar />
        <MainMenubar />
      </div>
    </div>
  );
};

export default App;
