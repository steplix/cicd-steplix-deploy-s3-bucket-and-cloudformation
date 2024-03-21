import Svg from '../svg';

const chat = ({ className }) => (
  <Svg className={className} originalSize={24}>
    <g clipPath="url(#clip0_1282_40786)" id="Frame">
      <path
        d="M21 14L18 11H11C10.7348 11 10.4804 10.8946 10.2929 10.7071C10.1054 10.5196 10 10.2652 10 10V4C10 3.73478 10.1054 3.48043 10.2929 3.29289C10.4804 3.10536 10.7348 3 11 3H20C20.2652 3 20.5196 3.10536 20.7071 3.29289C20.8946 3.48043 21 3.73478 21 4V14Z"
        fill="none"
        id="Vector"
        stroke="#00A9E0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        d="M14 15V17C14 17.2652 13.8946 17.5196 13.7071 17.7071C13.5196 17.8946 13.2652 18 13 18H6L3 21V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H6"
        fill="none"
        id="Vector_2"
        stroke="#00A9E0"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </g>
    <defs>
      <clipPath id="clip0_1282_40786">
        <rect fill="white" height="24" width="24" />
      </clipPath>
    </defs>
  </Svg>
);

export { chat };
