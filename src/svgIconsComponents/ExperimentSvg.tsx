import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={47}
    viewBox="0 0 40 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      id="Vector"
      d="M15.8498 2H24.1503M15.8498 2V9.52569C15.8498 10.1517 15.6851 12.7132 15.3721 13.2553L2.57308 38.4469C0.944802 41.2671 2.98014 44.7925 6.23668 44.7925H33.7633C37.0199 44.7925 39.0552 41.2672 37.4269 38.4469L33.9613 31.6257M15.8498 2H14.7911M24.1503 2V9.52592C24.1503 10.1519 24.3151 12.7135 24.6281 13.2556L29.1564 22.1685M24.1503 2H25.2459M29.1564 22.1685H24.8527M29.1564 22.1685L31.5589 26.8971M33.9613 31.6257H17.9661M33.9613 31.6257L31.5589 26.8971M31.5589 26.8971H22.4222"
      stroke="white"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default SvgComponent
