{/* <div className="absolute bottom-0 left-0 right-0 text-center pb-4">
<p className="warming-up">Warming Up</p>
<p className="text-gray-400">...</p>
</div>


//server icon
<AiOutlineCloudServer className="w-[24px] h-[24px] mr-1" /> */}

        {/* <img src={bottomGradient} alt="bottomGradient" className="w-full mt-6" /> */}

const Dummy = () => {
  return (
    <div>
        {/* menu bar */}
      {/* <div className="absolute bottom-0 w-full">
        <div className="w-full h-[110px] bg-custom-gray flex items-center justify-around px-4 rounded-tl-[50px] rounded-tr-[50px]">
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
        </div>
      </div> */}
       {/* <motion.pattern
        id="a"
        animate={{y:[-40,0,-40]}}
        transition={{
            times:[0,1],
            duration:5,
            repeat:Infinity,
            type:"keyframes",
            ease:"easeInOut"
        }}
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.01111)" />
      </motion.pattern> */}

      
{/* <div className="flex items-center justify-around mt-5">

<div className="flex flex-col items-center">
  <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent inner">
    <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full">
    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"  className="mx-auto my-2">
        <g id="Component 17">
        <g id="Cloud">
        <path id="Icon" d="M52.5 29.1667H48.825C47.7338 24.9405 45.479 21.105 42.3169 18.0962C39.1548 15.0874 35.2121 13.0259 30.9369 12.1459C26.6617 11.2659 22.2253 11.6027 18.1319 13.1181C14.0386 14.6334 10.4523 17.2666 7.78069 20.7183C5.10906 24.17 3.45918 28.3019 3.01852 32.6444C2.57786 36.987 3.36409 41.3661 5.28788 45.2841C7.21167 49.2022 10.1959 52.5021 13.9014 54.8088C17.6069 57.1155 21.8852 58.3367 26.25 58.3334H52.5C56.3678 58.3334 60.0771 56.797 62.812 54.0621C65.5469 51.3272 67.0834 47.6178 67.0834 43.7501C67.0834 39.8823 65.5469 36.173 62.812 33.4381C60.0771 30.7032 56.3678 29.1667 52.5 29.1667Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <g id="Server">
        <path id="Icon_2" d="M21.5 27.5H21.5125M21.5 42.5H21.5125M19 22.5H39C40.3807 22.5 41.5 23.6193 41.5 25V30C41.5 31.3807 40.3807 32.5 39 32.5H19C17.6193 32.5 16.5 31.3807 16.5 30V25C16.5 23.6193 17.6193 22.5 19 22.5ZM19 37.5H39C40.3807 37.5 41.5 38.6193 41.5 40V45C41.5 46.3807 40.3807 47.5 39 47.5H19C17.6193 47.5 16.5 46.3807 16.5 45V40C16.5 38.6193 17.6193 37.5 19 37.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </g>
    </svg>
    </p>
  </div>
  <p className="font-bold text-lg mt-3">Server</p>
</div>

<div className="flex flex-col items-center">
  <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent inner">
    <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full">
    <svg width="40" height="47" viewBox="0 0 40 47" fill="none" xmlns="http://www.w3.org/2000/svg"  className="mx-auto my-2">
      <path id="Vector" d="M15.8498 2H24.1503M15.8498 2V9.52569C15.8498 10.1517 15.6851 12.7132 15.3721 13.2553L2.57308 38.4469C0.944802 41.2671 2.98014 44.7925 6.23668 44.7925H33.7633C37.0199 44.7925 39.0552 41.2672 37.4269 38.4469L33.9613 31.6257M15.8498 2H14.7911M24.1503 2V9.52592C24.1503 10.1519 24.3151 12.7135 24.6281 13.2556L29.1564 22.1685M24.1503 2H25.2459M29.1564 22.1685H24.8527M29.1564 22.1685L31.5589 26.8971M33.9613 31.6257H17.9661M33.9613 31.6257L31.5589 26.8971M31.5589 26.8971H22.4222" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
    </p>
  </div>
  <p className="font-bold text-lg mt-3">Experiment Details</p>
</div>

<div className="flex flex-col items-center">
  <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent inner">
    <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full">
    <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"  className="mx-auto my-2">
          <g id="Icones">
          <g id="Group" filter="url(#filter0_d_1_5667)">
          <g id="Vector" filter="url(#filter1_i_1_5667)">
          <path d="M37.5001 8.21863C38.2237 8.21863 38.9176 8.50606 39.4292 9.01769C39.9409 9.52932 40.2283 10.2232 40.2283 10.9468V13.675C40.2283 14.3985 39.9409 15.0925 39.4292 15.6041C38.9176 16.1157 38.2237 16.4032 37.5001 16.4032C36.7766 16.4032 36.0827 16.1157 35.571 15.6041C35.0594 15.0925 34.772 14.3985 34.772 13.675V10.9468C34.772 10.2232 35.0594 9.52932 35.571 9.01769C36.0827 8.50606 36.7766 8.21863 37.5001 8.21863V8.21863ZM17.8382 15.8384C18.3498 15.327 19.0436 15.0396 19.767 15.0396C20.4904 15.0396 21.1842 15.327 21.6958 15.8384L24.424 18.5666C24.9209 19.0811 25.1959 19.7703 25.1897 20.4856C25.1835 21.2009 24.8966 21.8852 24.3908 22.391C23.8849 22.8968 23.2007 23.1837 22.4854 23.19C21.77 23.1962 21.0809 22.9212 20.5664 22.4242L17.8382 19.6961C17.3267 19.1845 17.0394 18.4907 17.0394 17.7672C17.0394 17.0438 17.3267 16.35 17.8382 15.8384V15.8384ZM57.1621 15.8384C57.6735 16.35 57.9609 17.0438 57.9609 17.7672C57.9609 18.4907 57.6735 19.1845 57.1621 19.6961L54.4339 22.4242C54.1822 22.6848 53.8812 22.8926 53.5484 23.0356C53.2155 23.1786 52.8575 23.2539 52.4953 23.257C52.133 23.2602 51.7738 23.1911 51.4385 23.054C51.1032 22.9168 50.7986 22.7142 50.5425 22.4581C50.2863 22.2019 50.0837 21.8973 49.9465 21.562C49.8094 21.2267 49.7403 20.8675 49.7435 20.5052C49.7466 20.143 49.8219 19.785 49.9649 19.4521C50.1079 19.1193 50.3157 18.8183 50.5763 18.5666L53.3044 15.8384C53.8161 15.327 54.5099 15.0396 55.2333 15.0396C55.9567 15.0396 56.6505 15.327 57.1621 15.8384ZM37.5001 24.5877C34.6059 24.5877 31.8302 25.7374 29.7837 27.7839C27.7372 29.8305 26.5874 32.6061 26.5874 35.5004C26.5874 38.3946 27.7372 41.1703 29.7837 43.2168C31.8302 45.2633 34.6059 46.4131 37.5001 46.4131C40.3944 46.4131 43.17 45.2633 45.2166 43.2168C47.2631 41.1703 48.4128 38.3946 48.4128 35.5004C48.4128 32.6061 47.2631 29.8305 45.2166 27.7839C43.17 25.7374 40.3944 24.5877 37.5001 24.5877V24.5877ZM21.1311 35.5004C21.1315 32.6271 21.8882 29.8046 23.3251 27.3164C24.7621 24.8283 26.8286 22.7622 29.3171 21.3258C31.8056 19.8894 34.6283 19.1334 37.5016 19.1336C40.3748 19.1339 43.1974 19.8904 45.6857 21.3273C48.1739 22.7641 50.2401 24.8305 51.6766 27.3189C53.1131 29.8073 53.8693 32.63 53.8692 35.5033C53.8691 38.3765 53.1127 41.1992 51.676 43.6875C50.2393 46.1758 48.173 48.2421 45.6847 49.6787V54.5976C45.6847 56.7683 44.8224 58.85 43.2875 60.3849C41.7526 61.9198 39.6708 62.7821 37.5001 62.7821C35.3295 62.7821 33.2477 61.9198 31.7128 60.3849C30.1779 58.85 29.3156 56.7683 29.3156 54.5976V49.6787C26.8265 48.2422 24.7596 46.1756 23.3228 43.6866C21.8861 41.1977 21.1301 38.3742 21.1311 35.5004V35.5004ZM34.772 51.643V54.5976C34.772 55.3212 35.0594 56.0151 35.571 56.5267C36.0827 57.0383 36.7766 57.3258 37.5001 57.3258C38.2237 57.3258 38.9176 57.0383 39.4292 56.5267C39.9409 56.0151 40.2283 55.3212 40.2283 54.5976V51.643C38.4222 51.9466 36.5781 51.9466 34.772 51.643V51.643ZM10.2184 35.5004C10.2184 34.7768 10.5058 34.0829 11.0174 33.5713C11.5291 33.0596 12.223 32.7722 12.9466 32.7722H15.6747C16.3983 32.7722 17.0922 33.0596 17.6038 33.5713C18.1155 34.0829 18.4029 34.7768 18.4029 35.5004C18.4029 36.2239 18.1155 36.9179 17.6038 37.4295C17.0922 37.9411 16.3983 38.2286 15.6747 38.2286H12.9466C12.223 38.2286 11.5291 37.9411 11.0174 37.4295C10.5058 36.9179 10.2184 36.2239 10.2184 35.5004V35.5004ZM56.5974 35.5004C56.5974 34.7768 56.8848 34.0829 57.3964 33.5713C57.9081 33.0596 58.602 32.7722 59.3255 32.7722H62.0537C62.7773 32.7722 63.4712 33.0596 63.9828 33.5713C64.4944 34.0829 64.7819 34.7768 64.7819 35.5004C64.7819 36.2239 64.4944 36.9179 63.9828 37.4295C63.4712 37.9411 62.7773 38.2286 62.0537 38.2286H59.3255C58.602 38.2286 57.9081 37.9411 57.3964 37.4295C56.8848 36.9179 56.5974 36.2239 56.5974 35.5004Z" fill="white"/>
          </g>
          </g>
          </g>
          <defs>
          <filter id="filter0_d_1_5667" x="0.218384" y="0.218628" width="74.5635" height="74.5635" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_5667"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_5667" result="shape"/>
          </filter>
          <filter id="filter1_i_1_5667" x="10.2184" y="8.21863" width="54.5635" height="54.5635" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="5"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_5667"/>
          </filter>
          </defs>
      </svg>
  </p>
  </div>
  <p className="font-bold text-lg mt-3 break-words">Light</p>
</div>

<div className="flex flex-col items-center">
  <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent inner">
    <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"  className="mx-auto my-2">
        <g id="Moon">
        <path id="Icon" d="M42 25.58C41.6854 28.9844 40.4077 32.2288 38.3165 34.9336C36.2253 37.6383 33.407 39.6916 30.1914 40.8531C26.9758 42.0146 23.496 42.2362 20.159 41.4922C16.822 40.7481 13.766 39.0691 11.3484 36.6516C8.9309 34.234 7.25186 31.178 6.5078 27.841C5.76374 24.504 5.98542 21.0242 7.14691 17.8086C8.30839 14.593 10.3616 11.7747 13.0664 9.68351C15.7712 7.59228 19.0156 6.31461 22.42 6C20.4268 8.69653 19.4677 12.0189 19.717 15.3628C19.9664 18.7068 21.4077 21.8501 23.7788 24.2212C26.1499 26.5923 29.2932 28.0336 32.6372 28.2829C35.9811 28.5323 39.3034 27.5732 42 25.58Z" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
    </svg>
    </p>
  </div>
  <p className="font-bold text-lg mt-3">Night Mode</p>
</div>

</div>

<div className="flex items-center justify-around mt-5">

  <div className="flex flex-col items-center">
    <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent inner">
      <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-2">
        <g id="schedule">
        <path id="icon" d="M38.25 41.75L41.75 38.25L32.5 29V17.5H27.5V31L38.25 41.75ZM30 55C26.5417 55 23.2917 54.3438 20.25 53.0312C17.2083 51.7188 14.5625 49.9375 12.3125 47.6875C10.0625 45.4375 8.28125 42.7917 6.96875 39.75C5.65625 36.7083 5 33.4583 5 30C5 26.5417 5.65625 23.2917 6.96875 20.25C8.28125 17.2083 10.0625 14.5625 12.3125 12.3125C14.5625 10.0625 17.2083 8.28125 20.25 6.96875C23.2917 5.65625 26.5417 5 30 5C33.4583 5 36.7083 5.65625 39.75 6.96875C42.7917 8.28125 45.4375 10.0625 47.6875 12.3125C49.9375 14.5625 51.7188 17.2083 53.0312 20.25C54.3438 23.2917 55 26.5417 55 30C55 33.4583 54.3438 36.7083 53.0312 39.75C51.7188 42.7917 49.9375 45.4375 47.6875 47.6875C45.4375 49.9375 42.7917 51.7188 39.75 53.0312C36.7083 54.3438 33.4583 55 30 55ZM30 50C35.5417 50 40.2604 48.0521 44.1562 44.1562C48.0521 40.2604 50 35.5417 50 30C50 24.4583 48.0521 19.7396 44.1562 15.8438C40.2604 11.9479 35.5417 10 30 10C24.4583 10 19.7396 11.9479 15.8438 15.8438C11.9479 19.7396 10 24.4583 10 30C10 35.5417 11.9479 40.2604 15.8438 44.1562C19.7396 48.0521 24.4583 50 30 50Z" fill="white"/>
        </g>
      </svg>
      </p>
    </div>
    <p className="font-bold text-lg mt-3">Time</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent inner">
      <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full">
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-2">
        <g id="Wind">
        <path id="Icon" d="M19.9792 9.5625C20.4632 9.07566 21.0599 8.71593 21.7164 8.5153C22.3729 8.31467 23.0688 8.27935 23.7423 8.41249C24.4157 8.54562 25.0458 8.84308 25.5766 9.27843C26.1074 9.71378 26.5224 10.2735 26.7847 10.9079C27.047 11.5423 27.1485 12.2317 27.0802 12.9147C27.0118 13.5978 26.7758 14.2534 26.3931 14.8233C26.0103 15.3931 25.4927 15.8596 24.8862 16.1812C24.2797 16.5028 23.6032 16.6696 22.9167 16.6667H4.16669M26.2292 40.4375C26.7132 40.9244 27.3099 41.2841 27.9664 41.4847C28.6229 41.6853 29.3188 41.7207 29.9923 41.5875C30.6657 41.4544 31.2958 41.1569 31.8266 40.7216C32.3574 40.2862 32.7724 39.7265 33.0347 39.0921C33.297 38.4577 33.3985 37.7684 33.3302 37.0853C33.2618 36.4022 33.0258 35.7466 32.6431 35.1768C32.2603 34.6069 31.7427 34.1404 31.1362 33.8188C30.5297 33.4972 29.8532 33.3305 29.1667 33.3333H4.16669M36.9375 16.1042C37.5435 15.4998 38.289 15.054 39.1082 14.8063C39.9274 14.5586 40.7951 14.5165 41.6344 14.6839C42.4737 14.8513 43.2588 15.223 43.9203 15.766C44.5818 16.309 45.0993 17.0067 45.4271 17.7973C45.7548 18.5879 45.8826 19.4471 45.7993 20.2989C45.7159 21.1506 45.424 21.9687 44.9492 22.6808C44.4745 23.3929 43.8316 23.9771 43.0774 24.3816C42.3231 24.7861 41.4809 24.9985 40.625 25H4.16669" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
      </svg>
      </p>
    </div>
    <p className="font-bold text-lg mt-3">Airflow Settings</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent inner">
      <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full">
      <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-2">
        <g id="Component 16">
        <path id="Icon" d="M32.9641 44.2226L38.0251 35.8455L34.0141 32.6135L38.0096 26M32.9641 44.2226L32.1557 39.638M32.9641 44.2226L36.9689 43.5164" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path id="Polygon 1" d="M33.701 5.25C34.2783 4.25 35.7217 4.25 36.299 5.25L61.4138 48.75C61.9911 49.75 61.2694 51 60.1147 51H9.88526C8.73056 51 8.00887 49.75 8.58623 48.75L33.701 5.25Z" stroke="white" stroke-width="3"/>
        </g>
      </svg>
      </p>
    </div>
    <p className="font-bold text-lg mt-3 w-full break-words">Isolation Settings</p>
  </div>

  <div className="flex flex-col items-center">
    <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent inner">
      <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full">
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-2"> 
        <g id="Frame" clip-path="url(#clip0_1_5678)">
        <path id="Vector" d="M60 0H0V60H60V0Z" fill="white" fill-opacity="0.01"/>
        <g id="light_mode">
        <path id="icon" d="M30 35C32.0833 35 33.8542 34.2708 35.3125 32.8125C36.7708 31.3542 37.5 29.5833 37.5 27.5C37.5 25.4167 36.7708 23.6458 35.3125 22.1875C33.8542 20.7292 32.0833 20 30 20C27.9167 20 26.1458 20.7292 24.6875 22.1875C23.2292 23.6458 22.5 25.4167 22.5 27.5C22.5 29.5833 23.2292 31.3542 24.6875 32.8125C26.1458 34.2708 27.9167 35 30 35ZM30 40C26.5417 40 23.5938 38.7813 21.1563 36.3438C18.7188 33.9063 17.5 30.9583 17.5 27.5C17.5 24.0417 18.7188 21.0938 21.1563 18.6563C23.5938 16.2188 26.5417 15 30 15C33.4583 15 36.4063 16.2188 38.8438 18.6563C41.2813 21.0938 42.5 24.0417 42.5 27.5C42.5 30.9583 41.2813 33.9063 38.8438 36.3438C36.4063 38.7813 33.4583 40 30 40ZM12.5 30H2.5V25H12.5V30ZM57.5 30H47.5V25H57.5V30ZM27.5 10V0H32.5V10H27.5ZM27.5 55V45H32.5V55H27.5ZM16 16.875L9.6875 10.8125L13.25 7.125L19.25 13.375L16 16.875ZM46.75 47.875L40.6875 41.5625L44 38.125L50.3125 44.1875L46.75 47.875ZM40.625 13.5L46.6875 7.1875L50.375 10.75L44.125 16.75L40.625 13.5ZM9.625 44.25L15.9375 38.1875L19.375 41.5L13.3125 47.8125L9.625 44.25Z" fill="#FEF7FF"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_1_5678">
        <rect width="60" height="60" fill="white"/>
        </clipPath>
        </defs>
      </svg>
      </p>
    </div>
    <p className="font-bold text-lg mt-3">Brightness & Volume</p>
  </div>
</div>

<div className="flex items-center justify-around mt-5">

<div className="flex flex-col items-center">
  <div className="relative flex items-center justify-center w-[100px] h-[100px] rounded-full bg-transparent inner">
    <p className="m-0 w-[80px] h-[80px] bg-[#001123] rounded-full">
    <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto my-2">
      <g id="Component 18">
      <g id="wpf:headset" clip-path="url(#clip0_95_986)">
      <path id="Vector" d="M40.3558 32.994C40.2622 33.0294 40.1799 33.065 40.1105 33.0939C40.0388 33.1236 39.9768 33.148 39.9102 33.1684C39.7815 33.2077 39.6194 33.2367 39.3394 33.2367H35.8558H35.6926L35.6269 33.3861C35.0463 34.7066 33.1406 35.75 30.7692 35.75C29.3449 35.75 28.067 35.3724 27.1527 34.7752C26.2362 34.1766 25.7115 33.3788 25.7115 32.5343C25.7115 31.6899 26.2362 30.892 27.1527 30.2934C28.067 29.6963 29.3449 29.3187 30.7692 29.3187C33.1407 29.3187 35.0463 30.3607 35.6269 31.6825L35.6925 31.832H35.8558H39.1731H39.218L39.2601 31.8163C39.277 31.8101 39.303 31.7996 39.3305 31.7884C39.3374 31.7857 39.3443 31.7828 39.3512 31.78C39.3889 31.7649 39.4339 31.7469 39.4827 31.7285L39.4847 31.7277C39.7846 31.6112 40.0726 31.4761 40.3459 31.3233L40.224 31.1051L40.3459 31.3233C41.2901 30.7957 42.1434 30.1722 42.8832 29.4681C44.3243 28.1071 45.7432 26.1366 46.3278 23.4902L46.4044 23.1433L46.0521 23.1883C45.675 23.2364 45.3194 23.2736 44.9231 23.2736C44.5031 23.2736 44.109 23.1424 43.8262 22.9208C43.5449 22.7003 43.4038 22.4163 43.4038 22.1373V12.4334C43.4038 11.9665 43.8389 11.5294 44.5337 11.3788L44.8536 11.3095L44.7026 11.0192C42.0698 5.95667 36.0133 2.43797 29 2.43797C21.9867 2.43797 15.9302 5.95666 13.2974 11.0177L13.1464 11.3081L13.4663 11.3774C14.1607 11.5279 14.5962 11.9662 14.5962 12.4334V22.1373C14.5962 22.4163 14.4551 22.7003 14.1738 22.9208C13.891 23.1424 13.4969 23.2736 13.0769 23.2736C10.9323 23.2736 9.22665 22.5931 8.05958 21.5128C6.89288 20.4329 6.25 18.9407 6.25 17.2854C6.25 15.0097 7.49656 13.0662 9.64515 12.0523L9.73797 12.0085L9.77324 11.9122C12.2053 5.26535 19.7363 0.340774 28.75 0.251241V0.251386H29C38.1242 0.251386 45.7722 5.20402 48.2268 11.9122L48.262 12.0085L48.3547 12.0523C50.5035 13.0676 51.75 15.0098 51.75 17.2854C51.75 19.4773 50.5767 21.3463 48.5673 22.3924L48.4507 22.4531L48.4346 22.5836C48.0097 26.0243 46.3072 28.5868 44.4755 30.3161L44.4754 30.3162C43.4624 31.2732 42.4104 31.9683 41.5404 32.4454C41.1096 32.6817 40.7008 32.8615 40.3558 32.994ZM40.3558 32.994C40.3561 32.9939 40.3564 32.9937 40.3567 32.9936L40.4452 33.2275L40.3555 32.9941C40.3556 32.994 40.3557 32.994 40.3558 32.994Z" fill="white" stroke="black" stroke-width="0.5"/>
      </g>
      <g id="User">
      <path id="Icon" d="M48.3334 50.75V45.9167C48.3334 43.3529 47.3149 40.8942 45.502 39.0813C43.6892 37.2685 41.2304 36.25 38.6667 36.25H19.3334C16.7696 36.25 14.3108 37.2685 12.498 39.0813C10.6851 40.8942 9.66669 43.3529 9.66669 45.9167V50.75M38.6667 16.9167C38.6667 22.2554 34.3388 26.5833 29 26.5833C23.6613 26.5833 19.3334 22.2554 19.3334 16.9167C19.3334 11.5779 23.6613 7.25 29 7.25C34.3388 7.25 38.6667 11.5779 38.6667 16.9167Z" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      </g>
      <defs>
      <clipPath id="clip0_95_986">
      <rect width="46" height="36" fill="white" transform="translate(6)"/>
      </clipPath>
      </defs>
    </svg>
    </p>
  </div>
  <p className="font-bold text-lg mt-3">Customer Support</p>
</div> */}


{/* // const timeZones = [
//   { value: "Etc/GMT+12", label: "(GMT-12:00) International Date Line West" },
//   { value: "Pacific/Midway", label: "(GMT-11:00) Midway Island, Samoa" },
//   { value: "Pacific/Honolulu", label: "(GMT-10:00) Hawaii" },
//   { value: "US/Alaska", label: "(GMT-09:00) Alaska" },
//   { value: "America/Los_Angeles", label: "(GMT-08:00) Pacific Time (US & Canada)" },
//   { value: "America/Tijuana", label: "(GMT-08:00) Tijuana, Baja California" },
//   { value: "US/Arizona", label: "(GMT-07:00) Arizona" },
//   { value: "America/Chihuahua", label: "(GMT-07:00) Chihuahua, La Paz, Mazatlan" },
//   { value: "US/Mountain", label: "(GMT-07:00) Mountain Time (US & Canada)" },
//   { value: "America/Managua", label: "(GMT-06:00) Central America" },
//   { value: "US/Central", label: "(GMT-06:00) Central Time (US & Canada)" },
//   { value: "America/Mexico_City", label: "(GMT-06:00) Guadalajara, Mexico City, Monterrey" },
//   { value: "Canada/Saskatchewan", label: "(GMT-06:00) Saskatchewan" },
//   { value: "America/Bogota", label: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco" },
//   { value: "US/Eastern", label: "(GMT-05:00) Eastern Time (US & Canada)" },
//   { value: "US/East-Indiana", label: "(GMT-05:00) Indiana (East)" },
//   { value: "Canada/Atlantic", label: "(GMT-04:00) Atlantic Time (Canada)" },
//   { value: "America/Caracas", label: "(GMT-04:00) Caracas, La Paz" },
//   { value: "America/Manaus", label: "(GMT-04:00) Manaus" },
//   { value: "America/Santiago", label: "(GMT-04:00) Santiago" },
//   { value: "Canada/Newfoundland", label: "(GMT-03:30) Newfoundland" },
//   { value: "America/Sao_Paulo", label: "(GMT-03:00) Brasilia" },
//   { value: "America/Argentina/Buenos_Aires", label: "(GMT-03:00) Buenos Aires, Georgetown" },
//   { value: "America/Godthab", label: "(GMT-03:00) Greenland" },
//   { value: "America/Montevideo", label: "(GMT-03:00) Montevideo" },
//   { value: "America/Noronha", label: "(GMT-02:00) Mid-Atlantic" },
//   { value: "Atlantic/Cape_Verde", label: "(GMT-01:00) Cape Verde Is." },
//   { value: "Atlantic/Azores", label: "(GMT-01:00) Azores" },
//   { value: "Africa/Casablanca", label: "(GMT+00:00) Casablanca, Monrovia, Reykjavik" },
//   { value: "Etc/Greenwich", label: "(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London" },
//   { value: "Europe/Amsterdam", label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" },
//   { value: "Europe/Belgrade", label: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague" },
//   { value: "Europe/Brussels", label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris" },
//   { value: "Europe/Sarajevo", label: "(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb" },
//   { value: "Africa/Lagos", label: "(GMT+01:00) West Central Africa" },
//   { value: "Asia/Amman", label: "(GMT+02:00) Amman" },
//   { value: "Europe/Athens", label: "(GMT+02:00) Athens, Bucharest, Istanbul" },
//   { value: "Asia/Beirut", label: "(GMT+02:00) Beirut" },
//   { value: "Africa/Cairo", label: "(GMT+02:00) Cairo" },
//   { value: "Africa/Harare", label: "(GMT+02:00) Harare, Pretoria" },
//   { value: "Europe/Helsinki", label: "(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius" },
//   { value: "Asia/Jerusalem", label: "(GMT+02:00) Jerusalem" },
//   { value: "Europe/Minsk", label: "(GMT+02:00) Minsk" },
//   { value: "Africa/Windhoek", label: "(GMT+02:00) Windhoek" },
//   { value: "Asia/Kuwait", label: "(GMT+03:00) Kuwait, Riyadh, Baghdad" },
//   { value: "Europe/Moscow", label: "(GMT+03:00) Moscow, St. Petersburg, Volgograd" },
//   { value: "Africa/Nairobi", label: "(GMT+03:00) Nairobi" },
//   { value: "Asia/Tbilisi", label: "(GMT+03:00) Tbilisi" },
//   { value: "Asia/Tehran", label: "(GMT+03:30) Tehran" },
//   { value: "Asia/Muscat", label: "(GMT+04:00) Abu Dhabi, Muscat" },
//   { value: "Asia/Baku", label: "(GMT+04:00) Baku" },
//   { value: "Asia/Yerevan", label: "(GMT+04:00) Yerevan" },
//   { value: "Asia/Kabul", label: "(GMT+04:30) Kabul" },
//   { value: "Asia/Yekaterinburg", label: "(GMT+05:00) Yekaterinburg" },
//   { value: "Asia/Karachi", label: "(GMT+05:00) Islamabad, Karachi, Tashkent" },
//   { value: "Asia/Calcutta", label: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi" },
//   { value: "Asia/Calcutta", label: "(GMT+05:30) Sri Jayawardenapura" },
//   { value: "Asia/Katmandu", label: "(GMT+05:45) Kathmandu" },
//   { value: "Asia/Almaty", label: "(GMT+06:00) Almaty, Novosibirsk" },
//   { value: "Asia/Dhaka", label: "(GMT+06:00) Astana, Dhaka" },
//   { value: "Asia/Rangoon", label: "(GMT+06:30) Yangon (Rangoon)" },
//   { value: "Asia/Bangkok", label: "(GMT+07:00) Bangkok, Hanoi, Jakarta" },
//   { value: "Asia/Krasnoyarsk", label: "(GMT+07:00) Krasnoyarsk" },
//   { value: "Asia/Hong_Kong", label: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi" },
//   { value: "Asia/Kuala_Lumpur", label: "(GMT+08:00) Kuala Lumpur, Singapore" },
//   { value: "Asia/Irkutsk", label: "(GMT+08:00) Irkutsk, Ulaan Bataar" },
//   { value: "Australia/Perth", label: "(GMT+08:00) Perth" },
//   { value: "Asia/Taipei", label: "(GMT+08:00) Taipei" },
//   { value: "Asia/Tokyo", label: "(GMT+09:00) Osaka, Sapporo, Tokyo" },
//   { value: "Asia/Seoul", label: "(GMT+09:00) Seoul" },
//   { value: "Asia/Yakutsk", label: "(GMT+09:00) Yakutsk" },
//   { value: "Australia/Adelaide", label: "(GMT+09:30) Adelaide" },
//   { value: "Australia/Darwin", label: "(GMT+09:30) Darwin" },
//   { value: "Australia/Brisbane", label: "(GMT+10:00) Brisbane" },
//   { value: "Australia/Canberra", label: "(GMT+10:00) Canberra, Melbourne, Sydney" },
//   { value: "Australia/Hobart", label: "(GMT+10:00) Hobart" },
//   { value: "Pacific/Guam", label: "(GMT+10:00) Guam, Port Moresby" },
//   { value: "Asia/Vladivostok", label: "(GMT+10:00) Vladivostok" },
//   { value: "Asia/Magadan", label: "(GMT+11:00) Magadan, Solomon Is., New Caledonia" },
//   { value: "Pacific/Auckland", label: "(GMT+12:00) Auckland, Wellington" },
//   { value: "Pacific/Fiji", label: "(GMT+12:00) Fiji, Kamchatka, Marshall Is." },
//   { value: "Pacific/Tongatapu", label: "(GMT+13:00) Nuku'alofa" }
// ]; */}
    </div>
  )
}

export default Dummy

