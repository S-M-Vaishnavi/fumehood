import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={12}
    viewBox="0 0 22 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="icon"
      d="M10.9999 11.2502L0.583252 0.833496H21.4166L10.9999 11.2502Z"
      fill="#FEF7FF"
    />
  </svg>
)
export default SvgComponent
