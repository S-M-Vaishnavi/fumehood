import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={61}
    height={61}
    viewBox="0 0 61 61"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Component 1">
      <g id="Wifi off" clipPath="url(#clip0_176_1869)">
        <path
          id="Icon"
          d="M5.96289 5.91724L55.8007 55.755M41.5742 28.7067C43.4298 29.6123 45.1649 30.7462 46.7392 32.0821M15.0243 32.0821C18.3817 29.2749 22.4227 27.4069 26.7362 26.6679M27.9595 15.0919C32.8128 14.7008 37.6952 15.2916 42.3151 16.829C46.9351 18.3664 51.1979 20.8189 54.8492 24.0401M6.91434 24.0401C10.0568 21.2624 13.6599 19.0545 17.5615 17.5158M23.021 40.1467C25.3208 38.5128 28.072 37.635 30.8931 37.635C33.7142 37.635 36.4654 38.5128 38.7652 40.1467M30.8818 48.9589H30.9044"
          stroke="white"
          strokeWidth={6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <path
        id="Rectangle 1"
        d="M3.03085 2.53337C4.2694 1.29482 6.27748 1.29482 7.51602 2.53337L58.5457 53.563C59.7842 54.8016 59.7842 56.8097 58.5457 58.0482C57.3071 59.2867 55.2991 59.2867 54.0605 58.0482L3.03085 7.01854C1.79231 5.77999 1.79231 3.77191 3.03085 2.53337Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_176_1869">
        <rect
          width={54.3685}
          height={54.3685}
          fill="white"
          transform="translate(3.69727 3.65186)"
        />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
