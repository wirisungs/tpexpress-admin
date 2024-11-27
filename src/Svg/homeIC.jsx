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
      fill={props.fill | "#111"}
      fillRule="evenodd"
      d="M14.576 3.577a3.125 3.125 0 0 0-4.152 0l-7.99 7.103a1.042 1.042 0 1 0 1.383 1.557l.35-.31v5.85c0 .924 0 1.72.085 2.356.092.683.3 1.338.83 1.869.531.53 1.186.738 1.868.83.638.085 1.433.085 2.357.085h6.387c.923 0 1.719 0 2.356-.086.683-.091 1.337-.299 1.868-.83.531-.53.738-1.185.83-1.868.086-.637.086-1.432.085-2.356v-5.85l.35.31a1.042 1.042 0 0 0 1.384-1.557l-7.99-7.103ZM12.5 16.667c-.575 0-1.041.466-1.041 1.041v2.084a1.042 1.042 0 0 1-2.084 0v-2.084a3.125 3.125 0 1 1 6.25 0v2.084a1.042 1.042 0 0 1-2.083 0v-2.084c0-.575-.466-1.041-1.042-1.041Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;