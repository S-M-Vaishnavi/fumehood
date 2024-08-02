import Navbar from "./Navbar";
import leftTopCornerBg from '../assets/leftTopCornerBg.png';
import victoria from '../assets/victoria.jpg';
import GasesDiv from "./GasesDiv";
import SensorsDiv from "./SensorsDiv";
import light from "../assets/light.png";
import VolumeX from "../assets/VolumeX.png";
import homeIcon from "../assets/homeIcon.png";
import lockSash from "../assets/lockSash.png";
import rectangle from "../assets/rectangle.png";
import purge from "../assets/purge.png"
import moon from "../assets/moon.png";
import settings from "../assets/settings.png";
import volumeOn from "../assets/volumeOn.png" 
import jar from "../assets/jar.png"
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
  <>
  <div className="w-[600px] h-[1024px] mx-auto bg-richBlack text-white relative overflow-hidden">
      <div className='absolute top-0 left-0'>
        <img src={leftTopCornerBg} alt="Left Top Corner Background" className="w-48 h-48 object-cover" />
      </div>
      <Navbar />
      <div className="flex items-center justify-between -mt-2 px-14">
        <h3 className="text-white text-lg">Hi Victoria</h3>
        <div className="relative w-24 h-24">
          <div className="absolute inset-[1px] bg-gradient-to-r from-blue-500 to-transparent rounded-full"></div>
          <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img src={victoria} alt="Victoria" className="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
      <GasesDiv />
      <SensorsDiv />
    
    {/* <div className="relative">
      <div className={`absolute bottom-0 w-full transition-transform duration-300 ${isMenuOpen ? 'transform translate-y-0' : 'transform translate-y-[110px]'}`}>
        <div className="w-full h-[110px] bg-custom-gray flex items-center justify-around px-4 rounded-tl-[50px] rounded-tr-[50px] relative">
          <img src={VolumeX} alt="Volume X" className="w-[40px] h-[42px]" />
          <div className="relative">
            <img src={lockSash} alt="lockSash" className="w-[40px] h-[42px]" />
          </div>
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center cursor-pointer" onClick={openMenu}>
              <i className="arrow" />
              <i className="arrow" />
            </div>
            <img src={homeIcon} alt="Home Icon" className="w-[40px] h-[42px]" />
          </div>
          <img src={rectangle} alt="Rectangle" className="w-[40px] h-[42px]" />
          <img src={light} alt="Light" className="w-[40px] h-[42px]" />
          {isMenuOpen && (
          <div>
            <div>
              <img src={volumeOn} alt="volumeOn" className="w-[40px] h-[42px]" />
              <img src={moon} alt="moon" className="w-[40px] h-[42px]" />
              <Link to='/settings'>
                <img src={settings} alt="settimgs" className="w-[40px] h-[42px]" />
              </Link>
              <img src={jar} alt="jar" className="w-[40px] h-[42px]" />
            </div>
            <div>
              <img src={purge} alt="" className="w-[40px] h-[42px]"/>
            </div>
          </div>
          
          )}
        </div>
      </div>
    </div> */}

<div className="absolute bottom-0 w-full">
        {/* Main Menu Bar */}
        <div className={`w-full transition-transform duration-300 ${isMenuOpen ? 'transform translate-y-0' : 'transform'}`}>
          <div className="w-full bg-custom-gray rounded-tl-[50px] rounded-tr-[50px] flex flex-col items-center pb-4">
            <div className="flex justify-around w-full py-2">
              <img src={VolumeX} alt="Volume X" className="w-[40px] h-[42px]" />
              <img src={lockSash} alt="Lock Sash" className="w-[40px] h-[42px]" />
              <div className="flex flex-col items-center cursor-pointer" onClick={openMenu}>
                <div className="arrow" />
                <div className="arrow" />
                <img src={homeIcon} alt="Home Icon" className="w-[40px] h-[42px]" />
              </div>
              <img src={rectangle} alt="Rectangle" className="w-[40px] h-[42px]" />
              <img src={light} alt="Light" className="w-[40px] h-[42px]" />
            </div>
            {/* Extra Icons */}
            {isMenuOpen && (
              <div className="w-full pt-2">
                <div className="flex justify-around w-full gap-4">
                  <img src={volumeOn} alt="Volume On" className="w-[40px] h-[42px]" />
                  <img src={moon} alt="Moon" className="w-[40px] h-[42px]" />
                  <Link to='/settings'>
                    <img src={settings} alt="Settings" className="w-[40px] h-[42px]" />
                  </Link>
                  <img src={jar} alt="Jar" className="w-[40px] h-[42px]" />
                </div>
                <div className="flex justify-around w-full pt-2">
                  <img src={purge} alt="Purge" className="w-[40px] h-[42px]" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

    </div>
  </>
  
  );
};

export default Home;

