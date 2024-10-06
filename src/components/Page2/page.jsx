import TopNavbar from "../topNavbar";
import Leftpage2 from "./Leftpage2";
import Sidebar from "./Sidebar";

const main2 = () => {
  return (
    <div>
      <TopNavbar />
      <div className="md:max-h-full lg:min-h-[710px] flex w-full">
        <Sidebar />
        <Leftpage2 />
      </div>
    </div>
  );
};

export default main2;
