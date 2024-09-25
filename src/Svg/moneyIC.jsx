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
      strokeMiterlimit={10}
      d="M9.57 17.871h3.418a1.465 1.465 0 1 0 0-2.93h-.976a1.465 1.465 0 1 1 0-2.93h3.418M12.5 10.059v1.953M12.5 17.871v1.953"
    />
    <path
      stroke="#1C1C1C"
      strokeMiterlimit={10}
      d="M21.29 11.035 12.5 2.246l-8.79 8.79h2.93v11.718h11.72V11.035h2.93Z"
    />
  </svg>
);
export default SvgComponent;
