import React from 'react';

const styles = {
  display: 'block',
  width: '98px',
  height: '98px',
  margin: 'auto',
  background: 'transparent',
};

const AppLoading = ({ style }) => {
  const combineStyles = { ...styles, ...(style ? style : {}) };

  return (
    <svg
      style={combineStyles}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <title>로딩 중...</title>
      <g transform="translate(20 50)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#1d3f72"
          transform="scale(0.712187 0.712187)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.5434782608695652s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1.4492753623188404s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(40 50)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#5699d2"
          transform="scale(0.969128 0.969128)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.3623188405797101s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1.4492753623188404s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(60 50)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#d8ebf9"
          transform="scale(0.93026 0.93026)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="-0.18115942028985504s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1.4492753623188404s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
      <g transform="translate(80 50)">
        <circle
          cx="0"
          cy="0"
          r="7"
          fill="#71c2cc"
          transform="scale(0.638278 0.638278)"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            begin="0s"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
            values="0;1;0"
            keyTimes="0;0.5;1"
            dur="1.4492753623188404s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </svg>
  );
};

export default AppLoading;
