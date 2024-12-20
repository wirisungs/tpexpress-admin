import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="#eb455f"
    viewBox="-0.5 -0.5 16 16"
    {...props}
  >
    <path d="M14.64 11.706 8.901 1.74a1.625 1.625 0 0 0-2.802 0L.361 11.706c-.281.48-.281 1.075 0 1.556.288.5.824.806 1.4.8H13.24c.577.006 1.112-.3 1.4-.8.281-.48.281-1.075.001-1.556Zm-.91 1.03a.558.558 0 0 1-.491.276H1.762a.558.558 0 0 1-.491-.275.498.498 0 0 1 0-.507l5.738-9.966a.574.574 0 0 1 .985 0l5.738 9.966c.092.157.09.35-.002.507ZM6.975 8.813V6.188a.525.525 0 1 1 1.05 0v2.624a.525.525 0 0 1-1.05 0Zm1.313 2.363a.787.787 0 1 1-1.575 0 .787.787 0 0 1 1.575 0Z" />
  </svg>
);
export default SvgComponent;
