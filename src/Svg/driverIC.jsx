import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width | 25}
    height={props.width | 25}
    fill="none"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      stroke={props.stroke || "#1C1C1C"}
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M7.178 8.105a5.322 5.322 0 1 0 10.644 0 5.322 5.322 0 0 0-10.644 0Z"
    />
    <path
      stroke={props.stroke || "#1C1C1C"}
      strokeMiterlimit={10}
      d="M2.734 23.242a9.766 9.766 0 0 1 19.532 0"
    />
    <path
      stroke={props.stroke || "#1C1C1C"}
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="m9.834 13.438 2.666 8.876-4.434-1.777.88-1.777-1.778-.889.898-3.555 1.768-.879ZM15.166 13.438 12.5 22.313l4.443-1.777-.888-1.777 1.767-.889-.879-3.555-1.777-.879Z"
    />
  </svg>
);
export default SvgComponent;
