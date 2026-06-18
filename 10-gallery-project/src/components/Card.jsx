import React from "react";

const Card = ({ author, downloadUrl, url }) => {
    return (
        <div>
            <a href={url} target="_blank" rel="noreferrer">
                <div className="bg-gray-400 h-40 w-44 overflow-hidden rounded-xl">
                    <img
                        className="h-full w-full object-cover"
                        src={downloadUrl}
                        alt="images"
                        loading="lazy"
                    />
                </div>
                <h2 className="text-lg font-bold">{author}</h2>
            </a>
        </div>
    );
};

export default Card;
