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
      fill={props.stroke || "#1C1C1C"}
      strokeWidth={0}
      d="m2.017 7.076 10.14 4.506.686-1.544L2.703 5.53l-.686 1.545Zm11.328 16.127V10.81h-1.69v12.393h1.69Zm-.502-11.62 10.14-4.507-.686-1.545-10.14 4.507.686 1.544Z"
    />
    <path
      stroke={props.stroke || "#1C1C1C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.36 18.257V6.743c0-.267.157-.51.402-.618l9.463-4.206a.677.677 0 0 1 .55 0l9.463 4.206c.245.108.402.35.402.618v11.514c0 .267-.157.51-.402.618l-9.463 4.206a.676.676 0 0 1-.55 0l-9.463-4.206a.676.676 0 0 1-.402-.618Z"
    />
    <path
      stroke={props.stroke || "#1C1C1C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.43 4.05 9.738 4.328c.245.109.402.35.402.618v4.067"
    />
  </svg>
);
export default SvgComponent;
