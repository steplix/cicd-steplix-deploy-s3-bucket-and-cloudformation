import Svg from '../svg';

const lock = ({ className }) => (
  <Svg className={className} originalHeight={15} originalWidth={11}>
    <path
      d="M1.43685 14.6665C1.07018 14.6665 0.756183 14.5358 0.49485 14.2745C0.233517 14.0132 0.103072 13.6994 0.103517 13.3332V6.6665C0.103517 6.29984 0.234183 5.98584 0.495517 5.7245C0.75685 5.46317 1.07063 5.33273 1.43685 5.33317H2.10352V3.99984C2.10352 3.07762 2.42863 2.29139 3.07885 1.64117C3.72907 0.990949 4.51507 0.66606 5.43685 0.666504C6.35907 0.666504 7.14529 0.991616 7.79552 1.64184C8.44574 2.29206 8.77063 3.07806 8.77018 3.99984V5.33317H9.43685C9.80352 5.33317 10.1175 5.46384 10.3788 5.72517C10.6402 5.9865 10.7706 6.30028 10.7702 6.6665V13.3332C10.7702 13.6998 10.6395 14.0138 10.3782 14.2752C10.1168 14.5365 9.80307 14.6669 9.43685 14.6665H1.43685ZM5.43685 11.3332C5.80352 11.3332 6.11752 11.2025 6.37885 10.9412C6.64018 10.6798 6.77063 10.3661 6.77018 9.99984C6.77018 9.63317 6.63952 9.31917 6.37818 9.05784C6.11685 8.7965 5.80307 8.66606 5.43685 8.6665C5.07018 8.6665 4.75618 8.79717 4.49485 9.0585C4.23352 9.31984 4.10307 9.63362 4.10352 9.99984C4.10352 10.3665 4.23418 10.6805 4.49552 10.9418C4.75685 11.2032 5.07063 11.3336 5.43685 11.3332ZM3.43685 5.33317H7.43685V3.99984C7.43685 3.44428 7.24241 2.97206 6.85352 2.58317C6.46463 2.19428 5.99241 1.99984 5.43685 1.99984C4.88129 1.99984 4.40907 2.19428 4.02018 2.58317C3.63129 2.97206 3.43685 3.44428 3.43685 3.99984V5.33317Z"
      fill="#00A9E0"
    />
  </Svg>
);

export { lock };
