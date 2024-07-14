import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    data-name="Layer 1"
    viewBox="0 0 100 125"
    x="0px"
    y="0px"
    fill={props.fill}
    {...props}
  >
    <path d="M27.79,33a2,2,0,0,1,2-2H70.21a2,2,0,0,1,2,2v5h2V33a4,4,0,0,0-4-4H29.78a4,4,0,0,0-4,4v5h2Z" />
    <path d="M74.2,38H19v8H81V38ZM79,44H21V40H79Z" />
    <rect x={38} y={51.5} width={2} height={12} />
    <rect x={44} y={51.5} width={2} height={12} />
    <rect x={50} y={51.5} width={2} height={12} />
    <rect x={56} y={51.5} width={2} height={12} />
    <rect x={62} y={51.5} width={2} height={12} />
    <path d="M21,44l3,27H76l3-27ZM74.21,69H25.79L23.23,46H76.76Z" />
  </svg>
);
export default SVGComponent;
