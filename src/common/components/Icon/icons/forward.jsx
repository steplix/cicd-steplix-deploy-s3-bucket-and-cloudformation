import Svg from '../svg';

const forward = ({ className }) => (
  <Svg className={className} originalSize={41}>
    <g filter="url(#filter0_d_1506_68375)">
      <path
        d="M4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20Z"
        fill="white"
      />
    </g>
    <path
      d="M23.1193 19.2809C23.6276 19.7892 23.6276 20.6109 23.1193 21.1192L19.2193 25.0192C18.711 25.5275 17.8895 25.5275 17.3812 25.0192C16.8729 24.5109 16.8729 23.6892 17.3812 23.1809L20.3621 20.2L17.3812 17.2192C16.8729 16.7109 16.8729 15.8892 17.3812 15.3809C17.6347 15.1274 17.9675 15 18.3003 15C18.6331 15 18.9658 15.1274 19.2193 15.3809L23.1193 19.2809Z"
      fill="#00A9E0"
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
        id="filter0_d_1506_68375"
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
        <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_1506_68375" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_1506_68375"
          mode="normal"
          result="shape"
        />
      </filter>
    </defs>
  </Svg>
);

export { forward };
