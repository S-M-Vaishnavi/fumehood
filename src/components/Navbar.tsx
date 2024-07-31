import wifi from "../assets/Wifi.png";
import server from "../assets/server.png";

import { useState, useEffect } from "react";

const Navbar = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const formattedTime = `${new Date().getHours()}:${new Date().getMinutes()}`;
            setTime(formattedTime);
        };

        updateTime();

        const intervalId = setInterval(updateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex justify-between items-center bg-dark-900 p-2 text-white mt-4">
            <p className="text-2xl ml-2 mb-0 font-normal">{time}</p>
            <h3 className="text-3xl font-bold tracking-wide">FH-001</h3>
            <div className="flex items-center mr-2">
                <img src={server} alt="server" className="w-[45px] h-[45px]" />
                <img src={wifi} alt="WiFi" className="w-[31px] h-[32px]" />
            </div>
        </div>
    );
}

export default Navbar;
