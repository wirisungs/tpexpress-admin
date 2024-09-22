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
      fill="#1C1C1C"
      d="m17.97 15.42-5.471 5.484-5.47-5.484a1.28 1.28 0 0 0-1.812 1.811l6.377 6.376a1.271 1.271 0 0 0 1.395.28 1.27 1.27 0 0 0 .415-.28l6.377-6.376a1.282 1.282 0 0 0-1.811-1.81ZM7.028 9.58 12.5 4.096l5.47 5.484a1.274 1.274 0 0 0 1.811 0 1.278 1.278 0 0 0 0-1.811l-6.376-6.376a1.276 1.276 0 0 0-1.81 0L5.217 7.769a1.28 1.28 0 0 0 1.811 1.81Z"
    />
  </svg>
);
export default SvgComponent;
