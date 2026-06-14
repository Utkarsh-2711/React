import React from "react";
import RightCardContent from "./RightCardContent";
const RightCard = (props) => {
    return (
        <div className="relative shrink-0 h-full overflow-hidden w-80 rounded-4xl">
            <img
                className=" h-full w-full object-cover"
                src={props.img}
                alt="working"
            />
            <RightCardContent
                id={props.id}
                tag={props.tag}
                buttonColor={props.buttonColor}
                arrowButtonColor={props.arrowButtonColor}
            />
        </div>
    );
};

export default RightCard;
