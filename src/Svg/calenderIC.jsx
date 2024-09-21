import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || 25}
    height={props.height || 25}
    fill="none"
    {...props}
    viewBox="0 0 26 26"
  >
    <g stroke="#1C1C1C" strokeWidth={1.5} clipPath="url(#a)">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M22.656 3.906H2.344c-.863 0-1.563.7-1.563 1.563v17.187c0 .863.7 1.563 1.563 1.563h20.312c.863 0 1.563-.7 1.563-1.563V5.47c0-.863-.7-1.563-1.563-1.563ZM.781 10.156H24.22M7.031 6.25V.781M17.969 6.25V.781"
      />
      <path d="M5.86 14.844a.39.39 0 1 1 0-.781M5.86 14.844a.39.39 0 1 0 0-.781M5.86 20.313a.39.39 0 0 1 0-.782M5.86 20.313a.39.39 0 0 0 0-.782M12.5 14.844a.39.39 0 1 1 0-.781M12.5 14.844a.39.39 0 1 0 0-.781M12.5 20.313a.39.39 0 0 1 0-.782M12.5 20.313a.39.39 0 0 0 0-.782M19.14 14.844a.39.39 0 1 1 0-.781M19.14 14.844a.39.39 0 1 0 0-.781M19.14 20.313a.39.39 0 0 1 0-.782M19.14 20.313a.39.39 0 1 0 0-.782" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h25v25H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
