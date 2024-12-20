import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width | "25"}
    height={props.height | "25"}
    fill="none"
    {...props}
    viewBox="-5 -5 25 25"
  >
    <path
      fill={props.fill | "#1C1C1C"}
      d="M12.5 3.71a1.959 1.959 0 0 0-1.953 1.954c0 1.074.879 1.953 1.953 1.953a1.959 1.959 0 0 0 1.953-1.953A1.959 1.959 0 0 0 12.5 3.711Zm0 13.673a1.959 1.959 0 0 0-1.953 1.953c0 1.074.879 1.953 1.953 1.953a1.959 1.959 0 0 0 1.953-1.953 1.959 1.959 0 0 0-1.953-1.953Zm0-6.836a1.959 1.959 0 0 0-1.953 1.953c0 1.074.879 1.953 1.953 1.953a1.959 1.959 0 0 0 1.953-1.953 1.959 1.959 0 0 0-1.953-1.953Z"
    />
  </svg>
);
export default SvgComponent;
