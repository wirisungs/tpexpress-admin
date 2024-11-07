import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    {...props}
    viewBox="0 0 20 20"
  >
    <g fill="#fff" clipPath="url(#a)">
      <path d="M8.625 15c0 .882.166 1.725.469 2.5H.5a8.754 8.754 0 0 1 6.015-8.314 5 5 0 1 1 6.775-1.24c-.354.485-.852.822-1.352 1.16-.17.115-.341.23-.507.352A6.865 6.865 0 0 0 8.625 15Z" />
      <path
        fillRule="evenodd"
        d="M20.5 15a5 5 0 1 1-10 0 5 5 0 0 1 10 0Zm-5.938-2.5v1.563H13v1.874h1.563V17.5h1.874v-1.563H18v-1.874h-1.563V12.5h-1.875Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.5 0h20v20H.5z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
