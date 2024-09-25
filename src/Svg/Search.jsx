import * as React from "react";

const SvgComponent = ({ color, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill={props.fill}
    {...props}
  >
    <path
      fill={color || "#696969"} // Use the color prop or default to #696969 if color is not provided
      d="m13.094 12.43-3.54-3.54a5.165 5.165 0 1 0-.663.664l3.54 3.54.663-.663ZM1.375 5.595a4.219 4.219 0 1 1 8.437 0 4.219 4.219 0 0 1-8.437 0Z"
    />
  </svg>
);

export default SvgComponent;
