import React from "react";

const Navbar = (props) => {
    function chageTheme() {
        props.setTheme("Dark");
    }
    return (
        <div>
            <button onClick={chageTheme}>Change Theme</button>
        </div>
    );
};

export default Navbar;
