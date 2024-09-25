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
      stroke="#1C1C1C"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.164 21.646h20.672l-7.948-16.78c-.87-1.839-3.403-2.046-4.56-.374a2.643 2.643 0 0 0-.216.373L2.164 21.646Z"
    />
    <path
      stroke="#1C1C1C"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.332 11.31 2.297 2.871 2.871-2.87 2.297 3.445 2.871-2.297"
    />
  </svg>
);
export default SvgComponent;
