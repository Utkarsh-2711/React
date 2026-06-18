import React from "react";
import Card from "./Card";
import LoadingState from "./LoadingState";

const GalleryGrid = ({ items, isLoading }) => {
    if (isLoading) {
        return <LoadingState />;
    }

    return items.map((item) => {
        return (
            <div key={item.id}>
                <Card
                    author={item.author}
                    downloadUrl={item.download_url}
                    url={item.url}
                />
            </div>
        );
    });
};

export default GalleryGrid;
