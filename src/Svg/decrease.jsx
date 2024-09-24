import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    fill="none"
    {...props}
    viewBox="0 0 25 25 "
  >
    <path
      stroke="#1C1C1C"
      strokeMiterlimit={10}
      d="m2.246 5.977 7.461 7.46 3.73-3.73 9.317 9.316"
    />
    <path
      stroke="#1C1C1C"
      strokeMiterlimit={10}
      d="M18.096 19.023h4.658v-4.658"
    />
  </svg>
);
export default SvgComponent;
