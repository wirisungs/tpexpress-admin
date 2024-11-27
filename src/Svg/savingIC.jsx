import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={55}
    height={55}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M0 0h55v55H0z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00067)" />
      </pattern>
      <image
        id="b"
        width={1500}
        height={1500}
      />
    </defs>
  </svg>
);
export default SvgComponent;