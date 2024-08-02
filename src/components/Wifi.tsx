import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ExitSvg from "../svgIconsComponents/ExitSvgIcon";

const Wifi = () => {
   
    return (
        <div className="w-[480px] h-[800px] mx-auto bg-richBlack text-white relative">
            <Navbar />
            <div className="flex justify-between items-center bg-dark-900 p-2 text-white">
                <p className="text-2xl ml-2 mb-0 font-normal">
                    <Link to='/home'>
                        <ExitSvg />
                    </Link>
                </p>
                <h3 className="text-3xl font-bold tracking-wide">Wi-Fi</h3>
                <div></div>
            </div>


            <div className="absolute bottom-0 w-full px-4 py-2">
                <div className="grid grid-cols-1 grid-flow-col items-center justify-between">
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center cursor-pointer">
                            <i className="arrow mb-1" />
                            <i className="arrow" />
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Link to='/wifi'>
                        <button className="w-[110px] h-[37px] rounded-3xl bg-gray-500">
                            <p className="font-semibold text-lg text-center my-auto text-white">Confirm</p>
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Wifi;
