import Svg from '../svg';

const chevronRight = ({ className, fill = '#00A9E0' }) => (
  <Svg className={className} originalSize={16}>
    <path
      d="M4.19578 15.1909C4.06578 15.0609 4.00046 14.8902 4.00046 14.7195C4.00046 14.5489 4.06578 14.3782 4.19578 14.2482L9.7245 8.71955L4.19578 3.19086C3.93511 2.93019 3.93511 2.5089 4.19578 2.24823C4.45644 1.98757 4.87782 1.98757 5.13848 2.24823L11.1385 8.24823C11.3992 8.5089 11.3992 8.9302 11.1385 9.19086L5.13848 15.1909C4.87782 15.4515 4.45644 15.4515 4.19578 15.1909Z"
      fill={fill}
    />
  </Svg>
);

export { chevronRight };
