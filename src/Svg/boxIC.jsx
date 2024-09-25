import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    // fill="none"
    {...props}
  >
    <path
      fill={props.color || "#1C1C1C"}
      d="m1.936 6.793 9.735 4.326.658-1.483L2.595 5.31l-.659 1.483Zm10.875 15.482V10.378H11.19v11.897h1.622ZM12.33 11.12l9.735-4.326-.66-1.483-9.733 4.326.658 1.483Z"
    />
    <path
      stroke={props.color || "#1C1C1C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.266 17.527V6.473c0-.256.15-.489.385-.593l9.085-4.038a.65.65 0 0 1 .528 0l9.085 4.038a.649.649 0 0 1 .385.593v11.054a.65.65 0 0 1-.385.593l-9.085 4.038a.65.65 0 0 1-.528 0L2.651 18.12a.65.65 0 0 1-.385-.593Z"
    />
    <path
      stroke={props.color || "#1C1C1C"}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m7.133 3.888 9.349 4.155a.649.649 0 0 1 .385.593v3.905"
    />
  </svg>
)
export default SvgComponent
