import TopNavbar from "../topNavbar";
import Leftpage2 from "./Leftpage2";
import Sidebar from "./Sidebar";

const main2 = () => {
  return (
    <div>
      <TopNavbar />
      <div className="h-screen flex overflow-hidden">
        <Sidebar />
        <Leftpage2 />
      </div>
    </div>
  );
};

export default main2;
