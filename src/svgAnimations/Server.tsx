// import { SVGProps } from "react"
// import { motion } from "framer-motion"

// const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
//   <svg
//     width={90}
//     height={90}
//     viewBox="0 0 70 70"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//     {...props}
//   >
//     <motion.g id="Ellipse 2018"    initial={{ opacity: 0.6 }}
//   whileHover={{
//     scale: 1.2,
//     transition: { duration: 1 },
//   }}
//   whileTap={{ scale: 0.9 }}
//   whileInView={{ opacity: 1 }}>
    
//       <circle id="Ellipse 2018_2" cx={35} cy={35} r={35} fill="#001123" />
//       <g id="Cloud">
//         <path
//         width={10}
//         height={10}
//           id="Icon"
//           d="M52.5 29.1667H48.825C47.7338 24.9405 45.479 21.105 42.3169 18.0962C39.1548 15.0874 35.2121 13.0259 30.9369 12.1459C26.6617 11.2659 22.2253 11.6027 18.1319 13.1181C14.0386 14.6334 10.4523 17.2666 7.78069 20.7183C5.10906 24.17 3.45918 28.3019 3.01852 32.6444C2.57786 36.987 3.36409 41.3661 5.28788 45.2841C7.21167 49.2022 10.1959 52.5021 13.9014 54.8088C17.6069 57.1155 21.8852 58.3367 26.25 58.3334H52.5C56.3678 58.3334 60.0771 56.797 62.812 54.0621C65.5469 51.3272 67.0834 47.6178 67.0834 43.7501C67.0834 39.8823 65.5469 36.173 62.812 33.4381C60.0771 30.7032 56.3678 29.1667 52.5 29.1667Z"
//           stroke="white"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </g>
//       <g id="Server">
//         <path
          
//           id="Icon_2"
//           d="M21.5 27.5H21.5125M21.5 42.5H21.5125M19 22.5H39C40.3807 22.5 41.5 23.6193 41.5 25V30C41.5 31.3807 40.3807 32.5 39 32.5H19C17.6193 32.5 16.5 31.3807 16.5 30V25C16.5 23.6193 17.6193 22.5 19 22.5ZM19 37.5H39C40.3807 37.5 41.5 38.6193 41.5 40V45C41.5 46.3807 40.3807 47.5 39 47.5H19C17.6193 47.5 16.5 46.3807 16.5 45V40C16.5 38.6193 17.6193 37.5 19 37.5Z"
//           stroke="white"
//           strokeWidth={2}
//           strokeLinecap="round"
//           strokeLinejoin="round"
//         />
//       </g>
//     </motion.g>
//   </svg>
// )
// export default SvgComponent

import { SVGProps } from "react";
import { motion } from "framer-motion";

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={90}
    height={90}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <defs>
      <filter id="blue-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feFlood result="flood" floodColor="#00F" floodOpacity="1" />
        <feComposite
          in="flood"
          result="mask"
          in2="SourceAlpha"
          operator="in"
        />
        <feGaussianBlur in="mask" stdDeviation="4" />
        <feMerge>
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <motion.g
  id="Ellipse 2018"
  initial={{ opacity: 0.6 }}
  whileHover={{
    scale: 1.2,
    transition: { duration: 1 },
  }}
  whileTap={{ scale: 0.9 }}
  whileInView={{ opacity: 1 }}
>
      <circle id="Ellipse 2018_2" cx={35} cy={35} r={35} fill="#001123" />

      <motion.g id="Cloud" initial={{ scale: 0.8 }}>
        <path
          id="Icon"
          d="M52.5 29.1667H48.825C47.7338 24.9405 45.479 21.105 42.3169 18.0962C39.1548 15.0874 35.2121 13.0259 30.9369 12.1459C26.6617 11.2659 22.2253 11.6027 18.1319 13.1181C14.0386 14.6334 10.4523 17.2666 7.78069 20.7183C5.10906 24.17 3.45918 28.3019 3.01852 32.6444C2.57786 36.987 3.36409 41.3661 5.28788 45.2841C7.21167 49.2022 10.1959 52.5021 13.9014 54.8088C17.6069 57.1155 21.8852 58.3367 26.25 58.3334H52.5C56.3678 58.3334 60.0771 56.797 62.812 54.0621C65.5469 51.3272 67.0834 47.6178 67.0834 43.7501C67.0834 39.8823 65.5469 36.173 62.812 33.4381C60.0771 30.7032 56.3678 29.1667 52.5 29.1667Z"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>

      <motion.g
        id="Server"
        initial={{ scale: 0.8 }}
        filter="url(#blue-glow)"
      >
        <path
          id="Icon_2"
          d="M21.5 27.5H21.5125M21.5 42.5H21.5125M19 22.5H39C40.3807 22.5 41.5 23.6193 41.5 25V30C41.5 31.3807 40.3807 32.5 39 32.5H19C17.6193 32.5 16.5 31.3807 16.5 30V25C16.5 23.6193 17.6193 22.5 19 22.5ZM19 37.5H39C40.3807 37.5 41.5 38.6193 41.5 40V45C41.5 46.3807 40.3807 47.5 39 47.5H19C17.6193 47.5 16.5 46.3807 16.5 45V40C16.5 38.6193 17.6193 37.5 19 37.5Z"
          stroke="white"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </motion.g>
  </svg>
);
export default SvgComponent;


