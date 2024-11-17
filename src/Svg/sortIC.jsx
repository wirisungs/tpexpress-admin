import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    viewBox="-0.5 -0.5 16 16"
    {...props}
  >
    <path
      fill="#696969"
      d="M6.758.458c.41-.41 1.076-.41 1.486 0l4.2 4.2c.302.301.39.75.226 1.144s-.544.65-.97.65H3.3a1.054 1.054 0 0 1-.745-1.795l4.2-4.2Zm0 14.084-4.2-4.2c-.301-.301-.39-.75-.226-1.144s.545-.65.971-.65H11.7a1.054 1.054 0 0 1 .745 1.795l-4.2 4.2c-.41.41-1.076.41-1.486 0Z"
    />
  </svg>
);
export default SvgComponent;
