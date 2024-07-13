import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 468 585"
    style={{
      enableBackground: "new 0 0 468 468",
    }}
    xmlSpace="preserve"
    fill={props.fill}
    {...props}
  >
    <g>
      <g>
        <g>
          <path d="M449.286,113.096H314.714c-9.768,0-17.714-7.946-17.714-17.714c0-8.511,6.034-15.64,14.048-17.333     c3.39-14.69,16.452-25.404,32.072-25.818C347.297,34.706,363.253,22,382,22s34.703,12.706,38.88,30.23     c15.62,0.414,28.683,11.128,32.072,25.818C460.966,79.742,467,86.871,467,95.382C467,105.149,459.054,113.096,449.286,113.096z      M314.714,87.667c-4.254,0-7.714,3.461-7.714,7.715s3.46,7.714,7.714,7.714h134.572c4.254,0,7.714-3.46,7.714-7.714     c0-4.626-4.015-7.699-8.342-7.715c-2.564,0-4.714-1.94-4.975-4.492c-1.327-13.004-13.621-22.202-26.422-20.807     c-2.729,0.286-5.196-1.669-5.51-4.401C410.057,43.163,397.266,32,382,32s-28.057,11.163-29.752,25.967     c-0.313,2.732-2.765,4.687-5.51,4.401c-12.801-1.395-25.095,7.796-26.422,20.807c-0.261,2.552-2.41,4.492-4.975,4.492H314.714z" />
        </g>
        <g>
          <path d="M176,42h-15.584c-2.761,0-5-2.238-5-5c0-11.257-8.755-20.415-19.516-20.415c-6.82,0-13.035,3.633-16.624,9.718     c-2.033,3.447-7.277,3.132-8.885-0.53C106.184,16.191,96.951,10,86.868,10C72.604,10,61,22.112,61,37c0,2.762-2.239,5-5,5     s-5-2.238-5-5C51,16.598,67.09,0,86.868,0c11.434,0,22.058,5.654,28.745,14.882c5.4-5.29,12.579-8.297,20.287-8.297     c14.623,0,26.797,11.014,29.117,25.415H176c2.761,0,5,2.238,5,5S178.761,42,176,42z" />
        </g>
        <g>
          <path d="M6,154.518c-2.761,0-5-2.238-5-5c0-21.453,20.756-37.406,41.495-33.468C47.091,99.719,62.388,88,80.193,88     c19.834,0,36.267,14.511,38.779,33.246H136c2.761,0,5,2.238,5,5s-2.239,5-5,5h-21.696c-2.761,0-5-2.238-5-5     C109.304,110.671,96.245,98,80.193,98c-14.742,0-27.166,10.697-28.898,24.884c-0.365,2.99-3.624,5.205-6.679,4.09     C29.059,121.29,11,132.527,11,149.518C11,152.279,8.761,154.518,6,154.518z" />
        </g>
      </g>
      <g>
        <path d="M463,458H323.986c3.146-4.181,5.014-9.376,5.014-15c0-12.073-8.603-22.174-20-24.497v-9.689h40.103    c12.16,0,23.629-6.46,29.932-16.858l15.562-25.677c4.181-6.898,4.313-15.213,0.354-22.24c-8.17-14.503-29.741-14.741-38.201-0.358    l-13.608,23.134h-39.264c2.987-3.881,4.769-8.734,4.769-13.999v-58.434c0-7.529-2.489-14.991-7.008-21.012l-33.012-43.979v-76.002    h56.816c6.065,0,11,4.935,11,11s-4.935,11-11,11h-11.816c-2.762,0-5,2.238-5,5s2.238,5,5,5h11.816c11.579,0,21-9.421,21-21    s-9.421-21-21-21h-56.816V120.9c0-29.883-36.59-46.248-58.874-26.403l-45.227,40.281c-0.382,0.341-0.71,0.738-0.973,1.179    l-24.787,41.706c-6.247,10.512-2.181,24.636,8.628,30.247c10.163,5.276,22.708,1.699,28.56-8.146l21.022-35.372l7.651-4.755    v69.439c0,6.731,1.897,13.168,5.422,18.716l-31.721,41.831l-41.02-27.317c-10.556-7.028-24.861-4.16-31.892,6.395    c-7.03,10.556-4.161,24.863,6.395,31.894l49.63,33.051c15.16,10.094,36.284,6.529,47.288-7.983l23.843-31.442    c1.668-2.2,1.238-5.337-0.963-7.006c-2.2-1.668-5.337-1.237-7.005,0.963l-23.843,31.442c-7.967,10.507-22.803,13.011-33.777,5.702    l-49.63-33.05c-5.966-3.974-7.587-12.061-3.614-18.027c3.973-5.966,12.06-7.585,18.025-3.614l44.934,29.925    c2.199,1.462,5.159,0.964,6.755-1.141l33.211-43.797l45.98,46.052v51.146c0,5.265,1.782,10.118,4.769,13.999H124.86    l-13.609-23.134c-3.942-6.702-11.222-10.866-18.998-10.866c-16.79,0-27.621,18.991-18.849,33.465l15.561,25.677    c6.303,10.398,17.772,16.858,29.932,16.858H159v9.689c-11.397,2.323-20,12.424-20,24.497c0,5.624,1.868,10.819,5.014,15H40.627    c-2.761,0-5,2.238-5,5s2.239,5,5,5H463c2.762,0,5-2.238,5-5S465.762,458,463,458z M319,443c0,8.271-6.729,15-15,15    s-15-6.729-15-15s6.729-15,15-15S319,434.729,319,443z M169,418.503v-9.689h130v9.689c-11.397,2.323-20,12.424-20,24.497    c0,5.624,1.868,10.819,5.014,15H183.986c3.146-4.181,5.014-9.376,5.014-15C189,430.927,180.397,420.826,169,418.503z     M221.935,246.741c-4.712-4.72-7.308-10.993-7.308-17.664v-78.433c0-3.851-4.36-6.285-7.639-4.247l-16.326,10.145    c-0.681,0.423-1.25,1.004-1.66,1.692l-21.646,36.421c-3.146,5.293-9.891,7.216-15.355,4.38c-5.74-2.981-7.977-10.646-4.639-16.263    l24.391-41.041l44.649-39.767c16.017-14.264,42.223-2.564,42.223,18.936v110.158c0,1.083,0.352,2.136,1.001,3.002l34.013,45.313    c3.229,4.3,5.006,9.63,5.006,15.008v58.434c0,7.168-5.832,13-13,13s-13-5.832-13-13v-53.214c0-1.325-0.525-2.596-1.462-3.533    L221.935,246.741z M118.898,398.813c-8.686,0-16.878-4.614-21.38-12.042l-15.561-25.677c-4.821-7.956,1.145-18.281,10.297-18.281    c4.248,0,8.224,2.274,10.378,5.937l15.059,25.599c0.898,1.527,2.538,2.465,4.31,2.465h224c1.771,0,3.411-0.938,4.31-2.465    l15.059-25.599c4.627-7.866,16.397-7.744,20.869,0.195c2.162,3.84,2.09,8.381-0.194,12.149l-15.562,25.677    c-4.501,7.428-12.693,12.042-21.379,12.042H118.898z M149,443c0-8.271,6.729-15,15-15s15,6.729,15,15s-6.729,15-15,15    S149,451.271,149,443z" />
        <g>
          <path d="M13.627,468H5c-2.761,0-5-2.238-5-5s2.239-5,5-5h8.627c2.761,0,5,2.238,5,5S16.388,468,13.627,468z" />
        </g>
      </g>
      <g>
        <ellipse cx={288.493} cy={180.389} rx={6.493} ry={6.5} />
      </g>
      <g>
        <path d="M233.626,73.953c-20.409,0-37.012-16.588-37.012-36.977S213.217,0,233.626,0c20.409,0,37.013,16.588,37.013,36.977    S254.035,73.953,233.626,73.953z M233.626,10c-14.895,0-27.012,12.102-27.012,26.977s12.118,26.977,27.012,26.977    s27.013-12.102,27.013-26.977S248.521,10,233.626,10z" />
      </g>
    </g>
  </svg>
);
export default SVGComponent;