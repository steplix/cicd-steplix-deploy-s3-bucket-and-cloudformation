import Svg from "../svg";

const chevronRight = ({ className, fill = "#00A9E0" }) => (
    <Svg className={className} originalSize={24}>
        <path
            d="M21.7072 8.70731L12.7072 17.7073C12.5122 17.9023 12.2562 18.0003 12.0002 18.0003C11.7442 18.0003 11.4882 17.9023 11.2933 17.7073L2.29325 8.70731C1.90225 8.31631 1.90225 7.68425 2.29325 7.29325C2.68425 6.90225 3.31619 6.90225 3.70719 7.29325L12.0002 15.5863L20.2932 7.29325C20.6842 6.90225 21.3162 6.90225 21.7072 7.29325C22.0982 7.68425 22.0982 8.31631 21.7072 8.70731Z"
            fill={fill}
        />
    </Svg>
);

export { chevronRight };