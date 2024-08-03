import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Component 19">
      <g id="Shield">
        <path
          id="Icon"
          d="M25.0002 45.8332C25.0002 45.8332 41.6668 37.4998 41.6668 24.9998V10.4165L25.0002 4.1665L8.3335 10.4165V24.9998C8.3335 37.4998 25.0002 45.8332 25.0002 45.8332Z"
          stroke="#7763FF"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <g id="Shield_2">
        <path
          id="Icon_2"
          d="M25 37.5C25 37.5 35 32.5 35 25V16.25L25 12.5L15 16.25V25C15 32.5 25 37.5 25 37.5Z"
          stroke="#7763FF"
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
  </svg>
)
export default SvgComponent
