import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ExitSvg from "../svgIconsComponents/ExitSvgIcon";
import PasswordShieldIconSvg from "../svgIconsComponents/PasswordShieldIconSvg";
import { useState } from "react";
import { motion } from "framer-motion";
import DropDownSvg from "../svgIconsComponents/DropDownSvg";
import WifiSvg from "../svgIconsComponents/WifiSvg";

const Wifi = () => {
    const [isOn, setIsOn] = useState(false);

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

            <div className="flex items-center mt-8 ">
            <div className="w-[217px] h-[217px] rounded-full bg-[#001123] mx-auto border-blue-20 relative shadow-[-20px_-20px_50px_rgb(9,9,121,.5),-20px_-20px_80px_rgb(9,9,121,.1),0_0_50px_rgb(19,93,236)]">
            <div className=" w-[152px] h-[152px] bg-transparent inner relative rounded-full top-[30px] left-[30px]">
                <p className="m-0 w-[150px] h-[150px] bg-[#001123] rounded-full flex items-center justify-center">
                    <WifiSvg/>
                </p>
            </div>
            </div>

            </div>
            <div className="mx-auto flex flex-col items-center">
                <div className="flex flex-col">
                    <p className="font-semibold text-[22px] mb-2">Wi-Fi</p>
                    <div className="w-[116px] h-[42px] rounded-[56px] bg-[#444252] mb-4">
                        <div onClick={handleToggle} className={`w-[116px] h-[42px] rounded-full p-1 cursor-pointer flex items-center justify-around transition-colors duration-300 ${isOn ? 'bg-gradient-to-r from-[#5A31FE] to-[#3161FE]' : 'bg-[#444252]'}`}>
                            <span className={`text-white transition-opacity duration-300 ${isOn ? 'ml-14' : 'ml-2'}`}>
                                {isOn ? 'Enable' : 'Disable'}
                            </span>
                            <div className={`w-[37px] h-[37px] rounded-full bg-gradient-to-r from-[#3161FE] to-[#5A31FE] transition-transform duration-300 ${isOn ? 'transform translate-x-[-59px]' : 'transform translate-x-0'}`} />
                        </div>
                    </div>
                </div>

                <div className="w-[377px] h-[180px]">
                    <div className="w-[375px] h-[82px] rounded-[12px] bg-[#444252] p-[15px]">
                        <p className="text-xl font-semibold text-gray-400 mb-0">SSID</p>
                        <div className="relative">
                            <div className="flex bg-transparent text-white text-lg items-center cursor-pointer justify-between w-[328px] h-[33px]" onClick={handleDropdownClick}>
                                <span className="text-center">{selectedWifiPorts}</span>
                                <motion.div className="ml-2" animate={{ rotate: isOpenWifiFormat ? 180 : 0 }} transition={{ duration: 0.3 }}>
                                    <DropDownSvg />
                                </motion.div>
                            </div>
                            {isOpenWifiFormat && (
                                <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="absolute mt-2 bg-gray-800 rounded shadow-lg text-white w-full">
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
                    <div className="w-[375px] h-[82px] rounded-[12px] bg-[#444252] mt-3 p-[15px] flex items-center justify-between">
                        <div>
                            <p className="text-xl font-semibold text-gray-400 mb-0">Password</p>
                            <div className="relative">
                                <div className="text-white text-lg cursor-pointer">
                                    <input type="password" className="bg-transparent" />
                                </div>
                            </div>
                        </div>
                        <PasswordShieldIconSvg />
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
