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
      stroke={props.stroke || "#1C1C1C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.465 6.156c.005 3.052-3.296 4.965-5.942 3.443a3.965 3.965 0 0 1-1.988-3.443c.005-3.052 3.312-4.954 5.953-3.424a3.965 3.965 0 0 1 1.977 3.424ZM4.57 21.083c.1-6.103 6.77-9.81 12.005-6.672a7.93 7.93 0 0 1 3.853 6.672A18.96 18.96 0 0 1 12.5 22.81c-2.83 0-5.515-.618-7.929-1.726Z"
    />
  </svg>
);
export default SvgComponent;
