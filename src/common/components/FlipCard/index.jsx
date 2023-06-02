import propTypes from "prop-types";
import Icon from "@/components/Icon";
import { fadeInFromTheSide } from "@/common/lib/animation";
import { motion } from "framer-motion";

const FlipCard = ({ text, iconName, resize, description }) => {
    const textArray = text.split(" ");
    const isPluralText = textArray.length > 1;

    return (
        <motion.div
            className={`flex cursor-pointer ${
                resize ? "flex-col lg:flex-row" : "flex-col"
            } items-center justify-center space-y-1 w-[329px] h-[134px] lg:space-y-2 md:w-[272px] md:h-[149px] lg:w-[290px] xl:w-[362px] sm:max-w-none group perspective `}
            variants={fadeInFromTheSide}
        >
            <div className="relative w-full h-full duration-1000 preserve-3d group-hover:rotate-y-180">
                <div className="flex flex-col absolute w-full h-full justify-center items-center backface-hidden space-y-[10px] border border-blue bg-white rounded-[20px] shadow-tech-card">
                    <Icon name={iconName} className={`h-[40px] w-[40px]`} />
                    <p
                        className={`text-[20px] text-center font-medium text-purple lg:text-base`}
                    >
                        {textArray[0]}
                        {isPluralText && (
                            <>
                                <br className="lg:hidden" /> {textArray[1]}
                            </>
                        )}
                    </p>
                </div>
                <div className="absolute w-full h-full flex items-center rotate-y-180 backface-hidden border border-blue bg-white rounded-[20px] shadow-tech-card">
                    <p className=" text-xs text-center p-4">{description}</p>
                </div>
            </div>
        </motion.div>
    );
};

FlipCard.propTypes = {
    text: propTypes.string.isRequired,
    iconName: propTypes.string.isRequired,
    resize: propTypes.bool,
    description: propTypes.string,
};

export default FlipCard;
