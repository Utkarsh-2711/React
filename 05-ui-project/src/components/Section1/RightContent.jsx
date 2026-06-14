import React from "react";
import RightCard from "./RightCard";

const RightContent = (props) => {
    return (
        <div
            id="right"
            className=" p-6 rounded-4xl overflow-x-auto flex flex-nowrap gap-5 h-full w-2/3">
            {props.users.map(function (elem, idx) {
                return (
                    <RightCard
                        key={idx}
                        id={idx + 1}
                        img={elem.img}
                        tag={elem.tag}
                        buttonColor={elem.buttonColor}
                        arrowButtonColor={elem.arrowButtonColor}
                    />
                );
            })}
        </div>
    );
};

export default RightContent;
