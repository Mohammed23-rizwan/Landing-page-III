import pro from "../assets/pexels-moh-adbelghaffar-771742.jpg";
import { LuIndianRupee } from "react-icons/lu";
import AssetsProgress from "./AssetsProgress";

const PersonInformation = () => {
  return (
    <>
      <div className="mt-8 px-4 flex justify-between">
        <div className="flex items-center">
          <div className="img-container w-[190px] h-[250px] bg-slate-500 relative">
            <img
              src={pro}
              alt=""
              className="w-full h-full bg-center bg-cover"
            />
            <p className="uppercase text-white z-10 absolute bottom-0  bg-[#fff4] w-full text-center py-2">
              Ethan &apos;wills&apos;
            </p>
          </div>
          <div className="information ml-10">
            <h2 className="capitalize text-center text-2xl">Information</h2>
            <div className="details mt-4">
              <table>
                <tbody>
                  <tr>
                    <td className="text-lg font-semibold">D.O.C :</td>
                    <td>04/12/1988</td>
                  </tr>
                  <tr className="mt-4">
                    <td className="text-lg font-semibold">Status : </td>
                    <td>Complete</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-10 gap-10">
          <div className="flex flex-col items-center ">
            <div className="flex justify-center items-center gap-2 opacity-50">
              <LuIndianRupee className="text-2xl " />
              <h2 className="text-4xl">2.5 Lakhs</h2>
            </div>
            <p className="text-sm text-green-800">today worthy assets</p>
          </div>
          <div className="border w-[1px] h-[25%] bg-slate-600"></div>
          <div className="flex flex-col items-center ">
            <div className="flex justify-center items-center gap-2 opacity-50">
              <LuIndianRupee className="text-2xl " />
              <h2 className="text-4xl">2.5 Lakhs</h2>
            </div>
            <p className="text-sm text-red-800 text-center">
              today worthy assets
            </p>
          </div>
        </div>
      </div>
      <AssetsProgress />
    </>
  );
};

export default PersonInformation;
