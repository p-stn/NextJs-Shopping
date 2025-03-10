import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 100 125"
    style={{
      enableBackground: "new 0 0 100 100",
    }}
    xmlSpace="preserve"
    fill={props.fill}
    {...props}
  >
    <g>
      <path d="M63.8,14H36.2c-3.5,0-6.2,2.8-6.2,6.4v53.3c0,3.6,2.7,6.4,6.2,6.4h27.6c3.5,0,6.2-2.8,6.2-6.4V20.4   C70,16.8,67.3,14,63.8,14z M58.5,16L57,18H42.1l-1-2H58.5z M68,73.6c0,2.5-1.8,4.4-4.2,4.4H36.2c-2.3,0-4.2-1.9-4.2-4.4V20.4   c0-2.5,1.8-4.4,4.2-4.4h2.7l1.7,3.4c0.2,0.3,0.5,0.6,0.9,0.6h16c0.3,0,0.6-0.1,0.8-0.4L61,16h2.8c2.3,0,4.2,1.9,4.2,4.4V73.6z" />
      <path d="M58.5,73h-17c-0.6,0-1,0.4-1,1s0.4,1,1,1h17c0.6,0,1-0.4,1-1S59.1,73,58.5,73z" />
    </g>
  </svg>
);
export default SVGComponent;
