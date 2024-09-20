import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#CBCBCB"
      d="M11.5 9.869 8 13.379l-3.502-3.51a.82.82 0 0 0-1.159 1.159l4.08 4.08a.815.815 0 0 0 1.16 0l4.08-4.08a.82.82 0 0 0-1.158-1.159ZM4.499 6.131 8 2.621l3.502 3.51a.816.816 0 0 0 1.159 0 .817.817 0 0 0 0-1.159L8.578.892a.817.817 0 0 0-1.16 0l-4.08 4.08a.82.82 0 0 0 1.16 1.16Z"
    />
  </svg>
)
export default SvgComponent
