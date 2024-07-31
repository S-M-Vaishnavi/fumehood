import temperature from "../assets/temperature.png"
import { useState, useEffect } from "react";
import CircularProgressBar from "./CircularProgressBar";

const SensorsDiv = () => {

  const [currentTemp,setCurrentTemp] = useState(0);
  const maxTemp = 200;

  useEffect(()=>{
    const updateTemperature = () => {
      setCurrentTemp(()=>{
        const change = Math.floor(Math.random()*maxTemp);
        const newValue = change;
        // console.log("New Temperature Value:",newValue<0?0:newValue);
        return newValue <0?0:newValue;
      });
    };
    const interval = setInterval(updateTemperature,3000);
    return()=> clearInterval(interval);
  },[]);



  return (
    <div className="flex justify-center items-start bg-richBlack mt-3 rounded-lg">
      <div className="flex flex-col gap-2">
        <div className="flex gap-3">

          <div className="bg-custom-gray w-[208px] h-[116px] rounded-[10px] p-[5px] flex items-center justify-center custom-gradient-border px-2">
            <div className="bg-custom-dark-gray w-full h-full rounded-[10px] border-3">
              <div className="flex justify-between w-full text-white">
                <span className='font-bold text-xl'>P1</span>
                <span className='font-bold text-xl'>Set</span>
                <span className='font-bold text-xl'>Current</span>
              </div>
              <div className="text-white">
                <div className="flex items-center justify-between">
                  <img src={temperature} alt="temperature" />
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold">200</div>
                    <span className="text-2xl font-medium text-gray-400">°C</span>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <CircularProgressBar progress={(currentTemp / maxTemp) * 100} size={69} strokeWidth={3} />
                    <div className="absolute flex items-center flex-col justify-center text-2xl font-bold">
                      {currentTemp} <span className="text-2xl font-medium text-gray-400">°C</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-custom-gray w-[208px] h-[116px] rounded-[10px] p-[5px] flex items-center justify-center custom-gradient-border px-2">
            <div className="bg-custom-dark-gray w-full h-full rounded-[10px]  border-3">
              <div className="flex justify-between w-full text-white">
                <span className='font-bold text-xl'>P1</span>
                <span className='font-bold text-xl'>Set</span>
                <span className='font-bold text-xl'>Current</span>
              </div>
              <div className="text-white">
                <div className="flex items-center justify-between">
                  <img src={temperature} alt="temperature" />
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold">124</div>
                    <span className="text-2xl font-medium text-gray-400">°C</span>
                  </div>
                
                  <div className="w-[69px] h-[69px] rounded-full border-4 border-white flex flex-col">
                    <div className="text-2xl font-bold text-center">200</div>
                    <span className="text-2xl font-medium text-gray-400 ml-4">°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-custom-gray w-[208px] h-[116px] rounded-[10px] p-[5px] flex items-center justify-center custom-gradient-border px-2">
            <div className="bg-custom-dark-gray w-full h-full rounded-[10px]  border-3">
              <div className="flex justify-between w-full text-white">
                <span className='font-bold text-xl'>P1</span>
                <span className='font-bold text-xl'>Set</span>
                <span className='font-bold text-xl'>Current</span>
              </div>
              <div className="text-white">
                <div className="flex items-center justify-between">
                  <img src={temperature} alt="temperature" />
                  <div className="flex flex-col">
                    <div className="text-2xl font-bold">200</div>
                    <span className="text-2xl font-medium text-gray-400">°C</span>
                  </div>
                  <div className="w-[69px] h-[69px] rounded-full border-4 border-white flex flex-col">
                    <div className="text-2xl font-bold text-center">50</div>
                    <span className="text-2xl font-medium text-gray-400 ml-4">°C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
        <div className="sash flex flex-col justify-center items-center text-white">
      </div>
    </div>
  );
};

export default SensorsDiv;





