import React from "react";

const RightCardContent = (props) => {
    return (
        <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <h2 className="bg-white text-xl font-semibold text-black rounded-full h-12 w-12 flex justify-center items-center">
                {props.id}
            </h2>
            <div>
                <p className="text-xl leading-6 text-mist-50 mb-10">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Veniam voluptatem perferendis inventore corrupti molestias
                    cupiditate sequi ad est, officiis non?
                </p>
                <div className="flex justify-between">
                    <button
                        className={`${props.buttonColor} rounded-full px-8 py-2 font-medi`}>
                        {props.tag}
                    </button>
                    <button
                        className={`${props.arrowButtonColor} rounded-full px-3 py-2`}>
                        <i className="ri-arrow-right-line"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RightCardContent;
