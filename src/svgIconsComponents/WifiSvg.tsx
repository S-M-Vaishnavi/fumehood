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
    <g id="Wifi">
      <g id="Wifi_2">
        <path
          id="Icon"
          d="M12.5008 31.375C17.4422 27.2591 23.6698 25.0053 30.1008 25.0053C36.5318 25.0053 42.7594 27.2591 47.7008 31.375M3.55078 22.5C10.8568 16.0599 20.2615 12.5066 30.0008 12.5066C39.74 12.5066 49.1447 16.0599 56.4508 22.5M21.3258 40.275C23.8638 38.4718 26.9 37.5031 30.0133 37.5031C33.1266 37.5031 36.1628 38.4718 38.7008 40.275M30.0008 50H30.0258"
          stroke="white"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
