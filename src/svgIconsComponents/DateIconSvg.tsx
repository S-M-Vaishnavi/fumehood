import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="Group 34">
      <g id="Frame 42">
        <g clipPath="url(#clip0_4331_1558)">
          <rect
            width={40}
            height={40}
            rx={8}
            fill="url(#paint0_linear_4331_1558)"
          />
          <g id="today">
            <path
              id="icon"
              d="M16 26.5002C14.8333 26.5002 13.8472 26.0974 13.0417 25.2918C12.2361 24.4863 11.8333 23.5002 11.8333 22.3335C11.8333 21.1668 12.2361 20.1807 13.0417 19.3752C13.8472 18.5696 14.8333 18.1668 16 18.1668C17.1667 18.1668 18.1528 18.5696 18.9583 19.3752C19.7639 20.1807 20.1667 21.1668 20.1667 22.3335C20.1667 23.5002 19.7639 24.4863 18.9583 25.2918C18.1528 26.0974 17.1667 26.5002 16 26.5002ZM9.33333 35.6668C8.41667 35.6668 7.63194 35.3404 6.97917 34.6877C6.32639 34.0349 6 33.2502 6 32.3335V9.00016C6 8.0835 6.32639 7.29877 6.97917 6.646C7.63194 5.99322 8.41667 5.66683 9.33333 5.66683H11V2.3335H14.3333V5.66683H27.6667V2.3335H31V5.66683H32.6667C33.5833 5.66683 34.3681 5.99322 35.0208 6.646C35.6736 7.29877 36 8.0835 36 9.00016V32.3335C36 33.2502 35.6736 34.0349 35.0208 34.6877C34.3681 35.3404 33.5833 35.6668 32.6667 35.6668H9.33333ZM9.33333 32.3335H32.6667V15.6668H9.33333V32.3335Z"
              fill="white"
            />
          </g>
        </g>
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_4331_1558"
        x1={-1.11759e-7}
        y1={20}
        x2={40}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#3161FE" />
        <stop offset={1} stopColor="#5A31FE" />
      </linearGradient>
      <clipPath id="clip0_4331_1558">
        <rect width={40} height={40} rx={8} fill="white" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
