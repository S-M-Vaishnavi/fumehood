import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={30}
    height={19}
    viewBox="0 0 30 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Frame">
      <path
        id="Vector"
        d="M22.5675 2.73578C22.583 1.95035 21.4494 1.71036 20.4649 2.20423L7.03062 9.13028C6.0504 9.62212 6.05364 10.4194 7.04241 10.914L20.4649 17.6202C21.4504 18.1127 22.5519 17.8804 22.5675 17.0909V2.73578Z"
        fill="white"
      />
    </g>
  </svg>
)
export default SvgComponent
