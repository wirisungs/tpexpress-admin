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
      fill="#1C1C1C"
      d="M5.512 21.484V4.514h8.56l.474 2.146h5.94v9.234h-6.389l-.472-2.121H7.01v7.711H5.512Zm9.858-7.087h3.619v-6.24h-5.715L12.8 6.012H7.01v6.264h7.886l.474 2.122Z"
    />
  </svg>
);
export default SvgComponent;
