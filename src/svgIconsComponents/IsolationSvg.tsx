import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={70}
    height={70}
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Component 16">
      <path
        id="Icon"
        d="M32.9641 44.2226L38.0251 35.8455L34.0141 32.6135L38.0096 26M32.9641 44.2226L32.1557 39.638M32.9641 44.2226L36.9689 43.5164"
        stroke="white"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        id="Polygon 1"
        d="M33.701 5.25C34.2783 4.25 35.7217 4.25 36.299 5.25L61.4138 48.75C61.9911 49.75 61.2694 51 60.1147 51H9.88526C8.73056 51 8.00887 49.75 8.58623 48.75L33.701 5.25Z"
        stroke="white"
        strokeWidth={3}
      />
    </g>
  </svg>
)
export default SvgComponent
