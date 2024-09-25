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
      d="M21.432 3.568 3.568 21.432M2.292 5.482c-.005 2.456 2.651 3.995 4.78 2.77a3.19 3.19 0 0 0 1.6-2.77c.004-2.456-2.652-3.995-4.78-2.771a3.19 3.19 0 0 0-1.6 2.77ZM16.328 19.518c-.004 2.456 2.652 3.995 4.78 2.771a3.19 3.19 0 0 0 1.6-2.77c.005-2.456-2.651-3.996-4.78-2.772a3.19 3.19 0 0 0-1.6 2.771Z"
    />
  </svg>
);
export default SvgComponent;
