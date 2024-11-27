import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    viewBox="-0.5 -0.5 16 16"
    {...props}
  >
    <path
      fill={props.fill || "#1c1c1c"}
      fillRule="evenodd"
      d="M13.75 7.5a6.25 6.25 0 1 1-12.5 0 6.25 6.25 0 0 1 12.5 0Zm-3.731-1.894a.469.469 0 0 1 0 .663L6.894 9.394a.469.469 0 0 1-.663 0l-1.25-1.25a.469.469 0 1 1 .663-.663l.918.919L7.96 7.003l1.397-1.397a.469.469 0 0 1 .663 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
