import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import Icon from '@/components/Icon';

const PostCard = ({ publishingAt, description, url }) => {
    return(
        <div className="bg-white shadow-post-card p-6 rounded-[20px] w-[279px] h-[310px] md:w-[500px] md:h-[226px] lg:w-[375.5px] lg:h-[260.4px] xl:w-[488.5px] xl:h-[223.19px] max-w-lg">
            <div className="flex items-center">
                <img className="h-14 w-14 md:w-[52.16px] md:h-[52.16px]" src="/assets/img/steplixAvatarPost.svg" alt="Steplix Avatar"/>
                <div className="ml-2">
                    <div className="text-sm">
                        <span className="font-medium text-grey-19">Steplix</span>
                    </div>
                    <div className="text-grey-70 text-xs flex items-center gap-x-1">
                        <span className="inline-block">{publishingAt}</span>
                        <span className="inline-block"> • </span>
                        <Icon name="earth" className="inline-block w-4 h-4"/>
                    </div>
                </div>
            </div>
            <p className="text-grey-19 text-[13px] mt-5 leading-[16.9px] font-normal">{description}</p>
            <div className="text-grey-70 text-sm font-normal flex justify-end">
                <Link href={url}>
                    <a target="_blank">
                        <span>... ver más</span>
                    </a>
                </Link>

            </div>
        </div>
    );
}

//
// PropTypes
//
PostCard.propTypes = {
    publishingAt: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

export default PostCard;