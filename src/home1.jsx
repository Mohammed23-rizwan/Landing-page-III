import MainMenubar from "./components/MainMenubar";
import TopBar from "./components/TopBar";
import TopNavbar from "./components/topNavbar";
import Page from "./components/Page2/page";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="w-full h-full bg-white flex flex-col items-center">
        <div className="w-full">
          <TopNavbar />
          <TopBar />
          <MainMenubar />
        </div>
      </div>
    </>
  );
};

export default App;
