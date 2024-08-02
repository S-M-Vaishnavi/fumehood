import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import ExitSvg from "../svgIconsComponents/ExitSvgIcon";
import TimerIconSvg from "../svgIconsComponents/TimerIconSvg";
import DropDownSvg from "../svgIconsComponents/DropDownSvg";
import { SetStateAction, useState } from "react";
import { motion } from "framer-motion";
import DateIconSvg from "../svgIconsComponents/DateIconSvg";

const Time = () => {
    const [isOpenTimeZone, setIsOpenTimeZone] = useState(false);
    const [isOpenTimeFormat, setIsOpenTimeFormat] = useState(false);
    const [isOpenDateFormat, setIsOpenDateFormat] = useState(false);

    const [selectedTimeZone, setSelectedTimeZone] = useState("GMT +05:30 Indian Standard Time");
    const [selectedTimeFormat, setSelectedTimeFormat] = useState("12 Hours Format");
    const [selectedDateFormat, setSelectedDateFormat] = useState("DD/MM/YYYY");

    const handleDropdownClick = (dropdown: string) => {
        setIsOpenTimeZone(dropdown === 'timeZone');
        setIsOpenTimeFormat(dropdown === 'timeFormat');
        setIsOpenDateFormat(dropdown === 'dateFormat');
    };

    const handleSelectChange = (type: string, value: SetStateAction<string>) => {
        if (type === 'timeZone') setSelectedTimeZone(value);
        if (type === 'timeFormat') setSelectedTimeFormat(value);
        if (type === 'dateFormat') setSelectedDateFormat(value);
        handleDropdownClick('');
    };

    return (
        <div className="w-[480px] h-[800px] mx-auto bg-richBlack text-white relative">
            <Navbar />
            <div className="flex justify-between items-center bg-dark-900 p-2 text-white">
                <p className="text-2xl ml-2 mb-0 font-normal">
                    <Link to='/home'>
                        <ExitSvg />
                    </Link>
                </p>
                <h3 className="text-3xl font-bold tracking-wide">Time</h3>
                <div></div>
            </div>

            <div className="w-[393px] h-[135px] rounded-2xl bg-[#000000] mx-auto mt-12">
                <div className="pt-4 ml-[32px]">
                    <div className="flex items-center">
                        <TimerIconSvg />
                        <p className="font-semibold text-[20px] ml-16 mb-0">Time Zone</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex bg-transparent text-white text-lg items-center cursor-pointer justify-between w-[328px] h-[33px] rounded-lg border border-white mx-auto mt-[15px] p-2" onClick={() => handleDropdownClick('timeZone')}>
                        <span className="flex-1 text-left">{selectedTimeZone}</span>
                        <motion.div className="ml-2" animate={{ rotate: isOpenTimeZone ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <DropDownSvg />
                        </motion.div>
                    </div>
                    {isOpenTimeZone && (
                        <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="absolute mt-2 bg-gray-800 rounded shadow-lg text-white w-full">
                            <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleSelectChange('timeZone', "GMT +05:30 Indian Standard Time")}>
                                GMT +05:30 Indian Standard Time
                            </li>
                            <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleSelectChange('timeZone', "GMT +01:00 Central European Time")}>
                                GMT +01:00 Central European Time
                            </li>
                            <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleSelectChange('timeZone', "GMT +00:00 Greenwich Mean Time")}>
                                GMT +00:00 Greenwich Mean Time
                            </li>
                        </motion.ul>
                    )}
                </div>
            </div>

            <div className="w-[393px] h-[135px] rounded-2xl bg-[#000000] mx-auto mt-12">
                <div className="pt-4 ml-[32px]">
                    <div className="flex items-center">
                        <TimerIconSvg />
                        <p className="font-semibold text-[20px] ml-16 mb-0">Time Format</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex bg-transparent text-white text-lg items-center cursor-pointer justify-between w-[328px] h-[33px] rounded-lg border border-white mx-auto mt-[15px] p-2" onClick={() => handleDropdownClick('timeFormat')}>
                        <span className="flex-1 text-center">{selectedTimeFormat}</span>
                        <motion.div className="ml-2" animate={{ rotate: isOpenTimeFormat ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <DropDownSvg />
                        </motion.div>
                    </div>
                    {isOpenTimeFormat && (
                        <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="absolute mt-2 bg-gray-800 rounded shadow-lg text-white w-full">
                            <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleSelectChange('timeFormat', "12 Hours Format")}>
                                12 Hours Format
                            </li>
                            <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleSelectChange('timeFormat', "24 Hours Format")} >
                                24 Hours Format
                            </li>
                        </motion.ul>
                    )}
                </div>
            </div>

            <div className="w-[393px] h-[135px] rounded-2xl bg-[#000000] mx-auto mt-12">
                <div className="pt-4 ml-[32px]">
                    <div className="flex items-center">
                        <DateIconSvg/>
                        <p className="font-semibold text-[20px] ml-16 mb-0">Date Format</p>
                    </div>
                </div>

                <div className="relative">
                    <div className="flex bg-transparent text-white text-lg items-center cursor-pointer justify-between w-[328px] h-[33px] rounded-lg border border-white mx-auto mt-[15px] p-2" onClick={() => handleDropdownClick('dateFormat')} >
                        <span className="flex-1 text-center">{selectedDateFormat}</span>
                        <motion.div className="ml-2" animate={{ rotate: isOpenDateFormat ? 180 : 0 }} transition={{ duration: 0.3 }}>
                            <DropDownSvg />
                        </motion.div>
                    </div>
                    {isOpenDateFormat && (
                        <motion.ul initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="absolute mt-2 bg-gray-800 rounded shadow-lg text-white w-full">
                            <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleSelectChange('dateFormat', "DD/MM/YYYY")}>
                                DD/MM/YYYY
                            </li>
                            <li className="p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleSelectChange('dateFormat', "MM/DD/YYYY")}>
                                MM/DD/YYYY
                            </li>
                        </motion.ul>
                    )}
                </div>
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

export default Time;
