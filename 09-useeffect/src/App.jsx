import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
    const [num, setNum] = useState(0);
    const [num2, setNum2] = useState(0);
    useEffect(
        function () {
            console.log("use effect is running ");
        },
        [num],
    );
    return (
        <div>
            <h1>value of num {num}</h1>
            <h2>value of num2 {num2}</h2>

            <button
                onClick={() => {
                    setNum(num + 1);
                }}
                onDoubleClick={() => {
                    setNum2(num + 2);
                }}>
                Click
            </button>
        </div>
    );
};

export default App;
