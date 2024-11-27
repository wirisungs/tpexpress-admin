import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
    viewBox="0 0 25 25"
  >
    <path
      fill={props.fill | "#111"}
      fillRule="evenodd"
      d="M23.914 6.914 8.5 22.328.086 13.914l2.828-2.828L8.5 16.672 21.086 4.086l2.828 2.828Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
