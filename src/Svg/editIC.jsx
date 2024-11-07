import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
    viewBox="0 0 25 25"
  >
    <path
      stroke={props.stroke | "#1C1C1C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.523 4.688H4.688A1.953 1.953 0 0 0 2.734 6.64v13.671a1.953 1.953 0 0 0 1.954 1.954h13.671a1.953 1.953 0 0 0 1.953-1.953v-6.836"
    />
    <path
      stroke={props.stroke | "#1C1C1C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.848 3.223a2.072 2.072 0 1 1 2.93 2.93L12.5 15.43l-3.906.976.976-3.906 9.278-9.277Z"
    />
  </svg>
);
export default SvgComponent;
