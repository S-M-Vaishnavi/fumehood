import ExitSvg from "../svgAnimations/ExitSvg";
import Navbar from "./Navbar";
import violetBg from '../assets/VoiletBg.png'
import WifiSvg from "../svgIconsComponents/WifiSvg";
import IsolationSvg from "../svgIconsComponents/IsolationSvg";
import ExperimentSvg from "../svgIconsComponents/ExperimentSvg";
import LightSvg from "../svgIconsComponents/LightSvg";
import MoonSvg from "../svgIconsComponents/MoonSvg";
import ServerSvg from "../svgIconsComponents/ServerSvg";
import AirFlowSvg from "../svgIconsComponents/AirFlowSvg";
import TimeSvg from "../svgIconsComponents/TimeSvg";
import BrightNessSvg from "../svgIconsComponents/BrightNessSvg";
import CustomerSupportSvg from "../svgIconsComponents/CustomerSupportSvg";
import { Link } from "react-router-dom";

const Settings = () => {
 
  return (
    <>
      <div className="w-[600px] h-[1024px] mx-auto bg-richBlack text-white relative overflow-hidden">
        <Navbar />

        <div className="w-[480px] h-[43px]">
          <div className="flex items-center justify-around">
            <div>
              <Link to='/home'><ExitSvg /></Link>
              
            </div>
            <h1 className="text-center mr-[51px]">Settings</h1>
          </div>
        </div>

        <div className="p-3">
        <div className="flex items-center justify-around mt-5">
          {[
            { icon: <WifiSvg />, label: "Wi-Fi" },
            { icon: <IsolationSvg/>, label: "Isolation" },
            { icon: <IsolationSvg />, label: "FumeHood" },
            { icon: <IsolationSvg />, label: "Calibration" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-[100px] h-[100px] bg-transparent inner relative rounded-full">
                <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full flex items-center justify-center">
                  {item.icon}
                </p>
              </div>
              <p className="font-bold text-lg mt-3 text-center w-full break-words">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-around mt-5">
          {[
            { icon: <ServerSvg />, label: "Server" },
            { icon: <ExperimentSvg/>, label: "Experiemnt" },
            { icon: <LightSvg />, label: "Light" },
            { icon: <MoonSvg />, label: "NightMode" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-[100px] h-[100px] bg-transparent inner relative rounded-full">
                <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full flex items-center justify-center">
                  {item.icon}
                </p>
              </div>
              <p className="font-bold text-lg mt-3 text-center w-full break-words">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-around mt-5">
          {[
            { icon: <TimeSvg />, label: "Time" },
            { icon: <AirFlowSvg/>, label: "Airflow" },
            { icon: <IsolationSvg />, label: "Isolation" },
            { icon: <BrightNessSvg />, label: "Brightness" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-[100px] h-[100px] bg-transparent inner relative rounded-full">
                <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full flex items-center justify-center">
                  {item.icon}
                </p>
              </div>
              <p className="font-bold text-lg mt-3 text-center w-full break-words">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-around mt-5">
          {[
            { icon: <CustomerSupportSvg />, label: "Customer Support" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="flex items-center justify-center w-[100px] h-[100px] bg-transparent inner relative rounded-full">
                <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full flex items-center justify-center">
                  {item.icon}
                </p>
              </div>
              <p className="font-bold text-lg mt-3 text-center w-full break-words">
                {item.label}
              </p>
            </div>
          ))}
        </div>
        </div>
       
        <div className="relative">
          <div className="absolute bottom-[-30px] w-full transition-transform duration-300">
            <div className="flex flex-col items-center">
              <div className="flex flex-col items-center cursor-pointer">
                <i className="arrow" />
                <i className="arrow" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0">
          <img src={violetBg} alt="violetBg" />
        </div>
      </div>

    </>
  );
};

export default Settings;

