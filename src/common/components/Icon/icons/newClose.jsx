import Svg from '../svg';

const newClose = ({ className }) => (
  <Svg className={className} originalSize={24}>
    <g clip-path="url(#clip0_1282_40301)" id="icon/24x24/close">
      <path
        d="M18 6L6 18"
        fill="none"
        id="Vector"
        stroke="#00A9E0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M6 6L18 18"
        fill="none"
        id="Vector_2"
        stroke="#00A9E0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1282_40301">
        <rect fill="white" height="24" width="24" />
      </clipPath>
    </defs>
  </Svg>
);

export { newClose };
