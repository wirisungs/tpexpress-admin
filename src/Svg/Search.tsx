import * as React from "react"
const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    // {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.454 16.47 5.421 5.405M18.75 10.937a7.813 7.813 0 1 1-15.625 0 7.813 7.813 0 0 1 15.625 0Z"
    />
  </svg>
)
export default SvgComponent
