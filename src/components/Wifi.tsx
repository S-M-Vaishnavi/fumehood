import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ExitSvg from "../svgIconsComponents/ExitSvgIcon";
import PasswordShieldIconSvg from "../svgIconsComponents/PasswordShieldIconSvg";
import { useState } from "react";
import { motion } from "framer-motion";
import DropDownSvg from "../svgIconsComponents/DropDownSvg";
import { SvgSpinnersWifi } from "../svgIconsComponents/WifiSvgAnimation";
import WifiSvg from "../svgIconsComponents/WifiSvg";
import WifiNotConnectedSvg from "../svgIconsComponents/WifiNotConnectedSvg";
import WifiConnectedNoInternetSvg from "../svgIconsComponents/WifiConnectedNoInternetSvg";

const Wifi = () => {
    const [isOn, setIsOn] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false);

    const handleToggle = () => {
        setIsOn(!isOn);
    };

    const [selectedWifiPorts, setSelectedWifiPorts] = useState("Canaraies- 5G");
    const [isOpenWifiFormat, setIsOpenWifiFormat] = useState(false);

    const handleDropdownClick = () => {
        setIsOpenWifiFormat(!isOpenWifiFormat);
    };

    const handleSelectChange = (value: string) => {
        setSelectedWifiPorts(value);
        setIsOpenWifiFormat(false);
        handleDropdownClick();
    };

    return (
        <div className="w-[480px] h-[800px] mx-auto custom-setting-gradient text-white relative">
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

            <div className="flex items-center mt-8">
                <div className="w-[217px] h-[217px] rounded-full mx-auto border-blue-20 relative shadow-[-20px_-20px_50px_rgb(9,9,121,.5),-20px_-20px_80px_rgb(9,9,121,.1),0_0_50px_rgb(19,93,236)]" style={{ background: 'linear-gradient(180deg, #131A33 0%, rgba(19, 26, 51, 0.8) 100%)' }}>
                    <div className="absolute top-[30px] left-[30px] w-[152px] h-[152px] bg-transparent rounded-full flex items-center justify-center z-10">
                        <div className="m-0 w-[152px] h-[152px] bg-[#001123] rounded-full flex items-center justify-center">
                            <div className="absolute w-[130px] h-[130px] border-4 border-crimson rounded-full flex justify-center items-center">
                                {/* <SvgSpinnersWifi /> */}
                                <WifiSvg/>
                                {/* <WifiNotConnectedSvg/> */}
                                {/* <WifiConnectedNoInternetSvg/> */}
                                <div className="w-[3px] h-[3px] bg-green-500 absolute bottom-[-2px] rounded-full shadow-[0_0_3px_3px_rgba(0,255,0,.8)]"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="w-[80%] mx-auto flex flex-col mt-8">
                <div className="flex flex-col">
                    <p className="font-semibold text-[22px] mb-2">Wi-Fi</p>
                    <div className="relative inline-block w-[30%] h-[42px] rounded-[56px] bg-[#444252] mb-4">
                        <input type="checkbox" id="toggle" className="sr-only" checked={isOn} onChange={handleToggle}/>
                          <label htmlFor="toggle" className={`block w-full h-full rounded-full transition-colors duration-400 ${isOn ? 'bg-[#444252]' : 'bg-[#444252]'}`}>
                            <span className={`block w-[40px] h-[40px] bg-gradient-to-r from-[#3161FE] to-[#5A31FE] rounded-full absolute top-[1px] left-[2px] transition-transform duration-400 ${isOn ? 'translate-x-[71px]' : 'translate-x-0'}`}/>
                            <span className={`absolute inset-0 flex items-center justify-${isOn ? 'between' : 'center'} text-xs font-bold uppercase text-white transition-all duration-400`} style={{ paddingLeft: isOn ? '8px' : '26px' }} >
                                {isOn ? 'Enable' : 'Disable'}
                            </span>
                          </label>
                    </div>
                </div>

                <div>
                    <div className="h-[82px] rounded-[12px] bg-[#444252] p-[15px]">
                        <p className="text-xl font-semibold text-gray-400 mb-0">SSID</p>
                        <div className="relative">
                            <div className="flex bg-transparent text-white text-lg items-center cursor-pointer justify-between h-[33px]" onClick={handleDropdownClick}>
                                <span className="text-center">{selectedWifiPorts}</span>
                                <motion.div className="ml-2" animate={{ rotate: isOpenWifiFormat ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <DropDownSvg />
                                </motion.div>
                            </div>
                            {isOpenWifiFormat && (
                                <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="absolute mt-2 bg-gray-800 rounded shadow-lg text-white w-full" style={{ zIndex: 1000 }}>
                                    <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleSelectChange('Canaries- 5G')}>
                                        Canaries- 5G
                                    </li>
                                    <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleSelectChange('Ai-dea labs Wifi')}>
                                        Ai-dea labs Wifi
                                    </li>
                                </motion.ul>
                            )}
                        </div>
                    </div>
                    <div className="h-[82px] rounded-[12px] bg-[#444252] mt-3 p-[15px] flex items-center justify-between">
                        <div>
                            <p className="text-xl font-semibold text-gray-400 mb-0">Password</p>
                            <div className="relative">
                                <div className="text-white text-lg cursor-pointer">
                                    <input type={passwordVisible ? "text" : "password"} className="bg-transparent" />
                                </div>
                            </div>
                        </div>
                        <button  onClick={() => setPasswordVisible(!passwordVisible)}>
                            {passwordVisible ? <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="currentColor" d="M8 6.003a2.667 2.667 0 1 1 0 5.334a2.667 2.667 0 0 1 0-5.334m0 1a1.667 1.667 0 1 0 0 3.334a1.667 1.667 0 0 0 0-3.334m0-3.336c3.076 0 5.73 2.1 6.467 5.043a.5.5 0 1 1-.97.242a5.67 5.67 0 0 0-10.995.004a.5.5 0 0 1-.97-.243A6.67 6.67 0 0 1 8 3.667"/></svg> :<svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16"><path fill="currentColor" d="M1.48 1.48a.5.5 0 0 0-.049.65l.049.057l2.69 2.69A6.66 6.66 0 0 0 1.533 8.71a.5.5 0 0 0 .97.242a5.66 5.66 0 0 1 2.386-3.356l1.207 1.207a2.667 2.667 0 0 0 3.771 3.771l3.946 3.946a.5.5 0 0 0 .756-.65l-.049-.057l-4.075-4.076v-.001l-.8-.799l-1.913-1.913h.001l-1.92-1.919v-.001l-.755-.754l-2.871-2.87a.5.5 0 0 0-.707 0m5.323 6.03l2.356 2.357A1.667 1.667 0 0 1 6.802 7.51M8 3.667c-.667 0-1.314.098-1.926.283l.825.824Q7.435 4.668 8 4.667a5.67 5.67 0 0 1 5.498 4.288a.5.5 0 0 0 .97-.242A6.67 6.67 0 0 0 8 3.667m.13 2.34l2.534 2.533A2.67 2.67 0 0 0 8.13 6.006"/></svg>}
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 w-full px-4 py-2">
                <div className="grid grid-cols-1 grid-flow-col items-center justify-between">
                    <div className="flex justify-center">
                        <div className="flex flex-col items-center cursor-pointer ml-20">
                            <i className="arrow" />
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
