import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={60}
    height={60}
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Component 2">
      <g id="Wifi" clipPath="url(#clip0_176_1863)">
        <path
          id="Icon"
          d="M10.5634 31.375C14.7392 27.2591 20.002 25.0053 25.4366 25.0053C30.8713 25.0053 36.134 27.2591 40.3099 31.375M3 22.5C9.17413 16.0599 17.1218 12.5066 25.3521 12.5066C33.5825 12.5066 41.5301 16.0599 47.7042 22.5M18.0211 40.275C20.1659 38.4718 22.7317 37.5031 25.3627 37.5031C27.9936 37.5031 30.5594 38.4718 32.7042 40.275M25.3521 50H25.3732"
          stroke="white"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        id="x"
        d="M43.0966 40.3636L45.3427 44.8558L47.6687 40.3636H52.0455L48.2369 47.1818L52.1875 54H47.8462L45.3427 49.4723L42.9013 54H38.4979L42.4574 47.1818L38.6932 40.3636H43.0966Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_176_1863">
        <rect width={50.7042} height={60} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
