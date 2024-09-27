import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill={props.fill}
    {...props}
  >
    <path
      fill="#fff"
      d="M8.469 7.531V4.25H7.53v3.281H4.25v.938h3.281v3.281h.938V8.469h3.281V7.53H8.469Z"
    />
  </svg>
)
export default SvgComponent
