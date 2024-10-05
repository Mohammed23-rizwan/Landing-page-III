import { Link } from "react-router-dom";
import img from "../../assets/pexels-moh-adbelghaffar-771742.jpg";
import { IoIosArrowBack } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className=" w-2/12 h-full bg-[#2B64AE]">
      <div className="flex flex-col h-full justify-between">
        <div className="pt-4 flex flex-col items-center">
          <div className="relative w-[60%] h-[170px]">
            <img src={img} alt="" className="w-full h-full object-cover" />
            <h2 className="absolute bottom-0 w-full text-center text-white">
              Ethen 'Wills'
            </h2>
          </div>
          <table className="mt-8">
            <tbody className="text-white">
              <tr>
                <td className="font-bold">DOC :</td>
                <td>23/03/1998</td>
              </tr>
              <tr>
                <td className="font-bold">Status :</td>
                <td>Complete</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <Link
            to={"/"}
            className="flex items-center pb-4 justify-center gap-3"
          >
            <IoIosArrowBack className="text-xl text-white" />
            <button className="text-xl text-white">Back Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
