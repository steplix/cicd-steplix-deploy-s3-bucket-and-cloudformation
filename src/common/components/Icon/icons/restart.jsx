import Svg from '../svg';

const restart = ({ className }) => (
  <Svg className={className} originalSize={41}>
    <g filter="url(#filter0_d_2060_108312)">
      <path
        d="M4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20Z"
        fill="white"
      />
    </g>
    <path
      d="M16 16.2L18.2 14M16 16.2L18.2 18.4M16 16.2H22.6C23.1835 16.2 23.7431 16.4318 24.1556 16.8444C24.5682 17.2569 24.8 17.8165 24.8 18.4V19.5M24.8 25L22.6 27.2M24.8 25L22.6 22.8M24.8 25H18.2C17.6165 25 17.0569 24.7682 16.6444 24.3556C16.2318 23.9431 16 23.3835 16 22.8V21.7"
      stroke="#00A9E0"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    />
    <path
      d="M20 7C12.8318 7 7 12.8318 7 20C7 27.1682 12.8318 33 20 33C27.1682 33 33 27.1682 33 20C33 12.8318 27.1682 7 20 7ZM20 30.4C14.2657 30.4 9.6 25.7343 9.6 20C9.6 14.2657 14.2657 9.6 20 9.6C25.7343 9.6 30.4 14.2657 30.4 20C30.4 25.7343 25.7343 30.4 20 30.4Z"
      fill="#00A9E0"
    />
    <defs>
      <filter
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
        height="38.8267"
        id="filter0_d_2060_108312"
        width="38.8267"
        x="1.44"
        y="1.44"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dx="0.853333" dy="0.853333" />
        <feGaussianBlur stdDeviation="1.70667" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.239216 0 0 0 0 0.0666667 0 0 0 0 0.321569 0 0 0 0.15 0"
        />
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_2060_108312" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_2060_108312"
          mode="normal"
          result="shape"
        />
      </filter>
    </defs>
  </Svg>
);

export { restart };
