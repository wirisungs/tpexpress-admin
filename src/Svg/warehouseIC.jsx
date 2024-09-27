import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    // {...props}
  >
    <path
      fill="#FBA333"
      d="M22.273 17.877h-.735V6.301l.888-.19a.734.734 0 1 0-.307-1.437L1.555 9.081a.734.734 0 0 0 .31 1.436l.579-.124v7.484h-.735a.734.734 0 1 0 0 1.469h20.564a.734.734 0 0 0 0-1.469Zm-18.36-7.803L20.07 6.616v11.261h-2.204v-5.14a.734.734 0 0 0-.734-.735H6.85a.734.734 0 0 0-.734.734v5.141H3.913v-7.803Zm12.485 4.866H7.585v-1.47h8.813v1.47Zm-8.813 1.468h8.813v1.47H7.585v-1.47Z"
    />
  </svg>
)
export default SvgComponent
