
import bgGradient from '../assets/bgGradient.png';
import wind from '../assets/Wind.png';
import leaf from '../assets/leaf.png';
import temperature from '../assets/temperature.png';
import humidity from "../assets/humidity.png";
import noGas from "../assets/noGas.png"
import fan from "../assets/fan.png"
import carbonMonoxide from "../assets/carbonMonoxide.png"
import yellowWind from "../assets/yellowWind.png"
import redWind from "../assets/redWind.png"
import { useEffect, useState } from 'react';

const GasesDiv = () => {
    const [airflowVelocity,setAirflowVelocity] = useState(200);
    useEffect(() => {
        const updateAirflowVelocity = () => {
            setAirflowVelocity(() => {
                const change = Math.floor(Math.random() * 100) + 50; 
                const newValue = change;
                // console.log("New airflowVelocity value:", newValue < 0 ? 0 : newValue); 
                return newValue < 0 ? 0 : newValue;
            });
        };

        const interval = setInterval(updateAirflowVelocity, 3000);
        return () => clearInterval(interval);
    }, []);

    let windImage = wind;
    let borderColor = "";

    if (airflowVelocity < 50) {
        windImage = redWind;
        borderColor = "border-red-500";
    } else if (airflowVelocity > 100) {
        windImage = yellowWind;
        borderColor = "border-yellow-400";
    }

    return (
        <div className="w-[560px] h-[430px] relative mx-auto rounded-[50px] bg-[#1C1C1E] p-6 overflow-hidden mt-2">
            <img src={bgGradient} alt="Background Gradient" className="absolute inset-0 w-full h-full object-cover" />

            <div className="flex justify-around items-start">
                <div className='flex flex-col'>
                    <div className='flex'>
                        {/* Airflow Velocity */}
                        <div className={`rounded-[50px] bg-[#2C2C2E] w-[260px] h-[128px] ${borderColor ? `border-4 ${borderColor}`:''}`}>
                            <div className='flex items-center justify-around '>
                                <img src={windImage} alt="wind" className="w-24 h-24" />
                                <div className='flex flex-col'>
                                    <p className="text-4xl font-bold text-white mb-0">{airflowVelocity}</p>
                                    <p className="text-lg font-medium text-gray-400 ml-[30px] mb-0">fpm</p>
                                </div>
                            </div>
                            <p className="text-white text-base font-bold ml-6 mb-3">Airflow Velocity</p>
                        </div>

                    </div>
                    <div className='flex mt-3'>
                        {/* Carbon Consumption */}
                        <div className='rounded-[50px] bg-[#2C2C2E] w-[260px] h-[128px]'>
                            <div className='flex items-center justify-around '>
                                <img src={leaf} alt="leaf" className="w-20 h-16" />
                                <div className='flex flex-col'>
                                    <p className="text-4xl font-bold text-white mb-0 ml-[24px]">400</p>
                                    <p className="text-lg font-medium text-gray-400">kgCO2e <span className='text-[14px] font-medium'>(YTD)</span></p>
                                </div>

                            </div>
                            <p className="text-white text-base font-bold ml-6 mb-3">Carbon Consumption</p>
                        </div>
                    </div>
                </div>

                {/* Post-Purge Mode */}
                <div className='rounded-[50px] bg-[#2C2C2E] w-[128px] h-[260px]'>
                    <div className='flex mt-20'>
                        <img src={noGas} alt="noGas" className="w-[58px] h-[59px] mr-2" />
                        <img src={fan} alt="fan" className="w-[56px] h-[56px]" />
                    </div>
                    <p className="text-white font-bold text-xl p-3 text-center pb-0">Post - Purge</p>
                    <p className="text-white font-bold text-base text-center">Mode</p>
                </div>
            </div>

            {/* Bottom Row */}
            <div className='flex justify-between mt-4'>
                {/* Temperature */}
                <div className='w-[112px] h-[64px] rounded-[30px] bg-[#2C2C2E] p-3 text-center'>
                    <img src={temperature} alt="temperature" className="w-6 h-11" />
                    <div className='-mt-[51px] ml-5'>
                        <p className="text-2xl font-bold text-white  mb-0">25</p>
                        <p className="text-[16px] text-gray-400 mb-0 -mt-[6px]">°C</p>
                    </div>
                    <div>
                        <p className="text-lg text-white font-bold mb-0 mt-2">Temperature</p>
                    </div>
                </div>

                {/* Humidity */}
                <div className='w-[112px] h-[64px] rounded-[30px] bg-[#2C2C2E] p-3 text-center'>
                    <img src={humidity} alt="humidity" className="w-[34px] h-11" />
                    <div className='-mt-[51px] ml-[3.25rem]'>
                        <p className="text-2xl font-bold text-white  mb-0">50</p>
                        <p className="text-[16px] text-gray-400 mb-0 -mt-[6px]">%RH</p>
                    </div>
                    <div>
                        <p className="text-lg text-white font-bold mb-0 mt-2">Humidity</p>
                    </div>
                </div>

                <div className='w-[128px] h-[64px] rounded-[30px] bg-[#2C2C2E] p-3 text-center'>
                    <img src={carbonMonoxide} alt="carbonMonoxide" className="w-11 h-11" />
                    <div className='-mt-[51px] ml-[3.25rem]'>
                        <p className="text-2xl font-bold text-white mb-0">0.5</p>
                        <p className="text-[16px] text-gray-400 mb-0 -mt-[6px]">ppm</p>
                    </div>
                    <div className='-ml-[2rem] whitespace-nowrap'>
                        <p className="text-lg text-white font-bold mb-0 mt-2">Carbon Monoxide</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GasesDiv;
