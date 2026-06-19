import React, { useState } from "react";
import Navbar from "./components/Navbar";

const App = () => {
    const [theme, setTheme] = useState("dark");
    return (
        <div>
            <h1>Them is {theme}</h1>
            <Navbar them={theme} setTheme={setTheme} />
        </div>
    );
};

export default App;
