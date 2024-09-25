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
      d="m22.021 20.986-5.53-5.532a8.069 8.069 0 1 0-1.037 1.036l5.532 5.532 1.035-1.036ZM3.712 10.303a6.592 6.592 0 1 1 6.592 6.591 6.599 6.599 0 0 1-6.592-6.591Z"
    />
  </svg>
);
export default SvgComponent;
