import Svg from '../svg';

const star = ({ className }) => (
  <Svg className={className} originalSize={24}>
    <g clip-path="url(#clip0_1282_40793)" id="Frame">
      <path
        d="M12.0008 17.75L5.82881 20.995L7.00781 14.122L2.00781 9.25495L8.90781 8.25495L11.9938 2.00195L15.0798 8.25495L21.9798 9.25495L16.9798 14.122L18.1588 20.995L12.0008 17.75Z"
        fill="none"
        id="Vector"
        stroke="#00A9E0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1282_40793">
        <rect fill="white" height="24" width="24" />
      </clipPath>
    </defs>
  </Svg>
);

export { star };
