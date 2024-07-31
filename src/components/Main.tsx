import kewauneeLogo from '../assets/kewauneeLogo.png';
import aideaLabsLogo from '../assets/aideaLabsLogo.png';
import leftTopCornerBg from '../assets/leftTopCornerBg.png';
import rightBottomCornerBg from '../assets/rightBottomCornerBg.png';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect,useState } from 'react';

const Main = () => {
  const warmingUpStates = [
    { color: '#6b7280', fontSize: '1rem' },
    { color: '#ef4444', fontSize: '1.125rem' },
    { color: '#3b82f6', fontSize: '1.25rem' },
    { color: '#ffffff', fontSize: '2.125rem' },
  ];
    const navigate = useNavigate();

    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate('/home');
        },10000);

        return () =>clearTimeout(timer);
    },[navigate])

    const [currentState, setCurrentState] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentState((prev) => (prev + 1) % warmingUpStates.length);
  }, 3000);

  return () => clearInterval(interval);
}, []);


  return (
    <>
    <div className="w-[600px] h-[1024px] mx-auto bg-richBlack flex flex-col justify-center items-center text-white relative overflow-hidden">
      <div className='absolute top-0 right-64'>
        <img src={leftTopCornerBg} alt="Left Top Corner Background" />
      </div>
      <div className="relative z-10">
        <img src={kewauneeLogo} alt="Kewaunee Logo" className="mb-4" />
      </div>
      <div className="w-[184px] h-[37px] text-center text-[24px] mt-4 relative z-10">Powered By</div>
      <div className="relative z-10">
        <img src={aideaLabsLogo} alt="Aidea Labs Logo" className="w-[300px] h-[79px] mt-4" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 text-center pb-20">
        <AnimatePresence mode="wait">
            <motion.div key={currentState} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }} style={warmingUpStates[currentState]} className="mt-8">
            Warming Up
          </motion.div>
        </AnimatePresence>
      <p className="text-gray-400">...</p>
    </div>
      <div className='absolute left-[21rem] bottom-0'>
        <img src={rightBottomCornerBg} alt="Right Bottom Corner Background" />
      </div>
    </div>
    </>
  );
};

export default Main;
