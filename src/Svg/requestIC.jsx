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
      fill={props.stroke || "#696969"}
      d="M16.895 16.895v4.394H5.175V3.711H12.5V2.246H5.176A1.465 1.465 0 0 0 3.71 3.711v17.578a1.465 1.465 0 0 0 1.465 1.465h11.719a1.465 1.465 0 0 0 1.464-1.465v-4.395h-1.465Z"
    />
    <path
      fill={props.stroke || "#696969"}
      d="M22.417 5 20 2.583a1.172 1.172 0 0 0-1.64 0L8.104 12.837v4.058h4.05L22.41 6.64a1.172 1.172 0 0 0 0-1.641h.007Zm-10.87 10.43H9.57v-1.978l6.914-6.921 1.985 1.985-6.921 6.914Zm7.955-7.947-1.985-1.985 1.663-1.663 1.985 1.985-1.663 1.663Z"
    />
  </svg>
);
export default SvgComponent;
