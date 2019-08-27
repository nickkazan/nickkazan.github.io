import React from "react";

const SvgFacebookLogo = props => (
  <svg width={67} height={67} {...props}>
    <path fill="none" d="M-1-1h582v402H-1z" />
    <g>
      <path
        stroke={props.stroke}
        clipRule="evenodd"
        fill={props.fill}
        d="M28.765 50.32h6.744V33.998h4.499l.596-5.624h-5.095l.007-2.816c0-1.466.14-2.253 2.244-2.253h2.812V17.68h-4.5c-5.405 0-7.307 2.729-7.307 7.317v3.377h-3.369v5.625h3.369V50.32zM33 64C16.432 64 3 50.568 3 34 3 17.431 16.432 4 33 4s30 13.431 30 30c0 16.568-13.432 30-30 30z"
      />
    </g>
  </svg>
);

export default SvgFacebookLogo;
