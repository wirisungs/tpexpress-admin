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
      fill={props.fill || "#1C1C1C"}
      fillRule="evenodd"
      d="M12.045.337a.603.603 0 0 1 0 .854l-6.81 6.81 6.81 6.808a.604.604 0 0 1-.854.854L3.955 8.427a.603.603 0 0 1 0-.854L11.191.337a.603.603 0 0 1 .854 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgComponent
