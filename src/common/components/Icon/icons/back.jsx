import Svg from '../svg';

const back = ({ className }) => (
    <Svg className={className} originalSize={41}>
        <g filter="url(#filter0_d_1506_68393)">
        <path d="M4 20C4 11.1634 11.1634 4 20 4C28.8366 4 36 11.1634 36 20C36 28.8366 28.8366 36 20 36C11.1634 36 4 28.8366 4 20Z" fill="white"/>
        </g>
        <path d="M17.3816 21.1195C16.8733 20.6112 16.8733 19.7895 17.3816 19.2812L21.2816 15.3812C21.7899 14.8729 22.6115 14.8729 23.1198 15.3812C23.6281 15.8895 23.6281 16.7112 23.1198 17.2195L20.1389 20.2004L23.1198 23.1812C23.6281 23.6895 23.6281 24.5112 23.1198 25.0195C22.8663 25.273 22.5335 25.4004 22.2007 25.4004C21.8679 25.4004 21.5351 25.273 21.2816 25.0195L17.3816 21.1195Z" fill="#00A9E0"/>
        <path d="M20 7C12.8318 7 7 12.8318 7 20C7 27.1682 12.8318 33 20 33C27.1682 33 33 27.1682 33 20C33 12.8318 27.1682 7 20 7ZM20 30.4C14.2657 30.4 9.6 25.7343 9.6 20C9.6 14.2657 14.2657 9.6 20 9.6C25.7343 9.6 30.4 14.2657 30.4 20C30.4 25.7343 25.7343 30.4 20 30.4Z" fill="#00A9E0"/>
        <defs>
        <filter id="filter0_d_1506_68393" x="1.44" y="1.44" width="38.8267" height="38.8267" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dx="0.853333" dy="0.853333"/>
        <feGaussianBlur stdDeviation="1.70667"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.239216 0 0 0 0 0.0666667 0 0 0 0 0.321569 0 0 0 0.15 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1506_68393"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1506_68393" result="shape"/>
        </filter>
        </defs>
    </Svg>
);

export { back };