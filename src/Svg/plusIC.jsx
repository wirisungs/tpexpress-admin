import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill={props.fill || "#1C1C1C"}
      d="M13.232 11.768V6.64h-1.464v5.127H6.64v1.464h5.127v5.127h1.464v-5.127h5.127v-1.464h-5.127Z"
    />
  </svg>
);
export default SvgComponent;
