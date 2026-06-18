import React, { useEffect, useState } from "react";
import axios from "axios";
import GalleryGrid from "./components/GalleryGrid";
import Pagination from "./components/Pagination";

const App = () => {
    const [userData, setUserData] = useState([]);

    const [index, setIndex] = useState(1);

    const getData = async () => {
        const response = await axios.get(
            `https://picsum.photos/v2/list?page=${index}&limit=10`,
        );
        setUserData(response.data);
    };

    useEffect(
        function () {
            getData();
        },
        [index],
    );

    const isLoading = userData.length === 0;

    return (
        <div className=" bg-black h-screen overflow-auto pb-24 p-4 text-white">
            <div className="flex h-[60%] flex-wrap gap-4 p-2">
                <GalleryGrid items={userData} isLoading={isLoading} />
            </div>

            <Pagination
                index={index}
                onPrev={() => {
                    if (index > 1) {
                        setIndex(index - 1);
                        setUserData([]);
                    }
                }}
                onNext={() => {
                    if (index < 100) {
                        setIndex(index + 1);
                        setUserData([]);
                    }
                }}
                canGoPrev={index > 1}
                canGoNext={index < 100}
            />
        </div>
    );
};

export default App;
