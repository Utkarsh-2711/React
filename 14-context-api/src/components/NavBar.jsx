import React from "react";
import Nav2 from "./Nav2";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const NavBar = () => {
    const [theme] = useContext(ThemeDataContext);
    return (
        <div className={theme}>
            <h2>Teachie</h2>
            {/* accesing the navbar children and display */}
            {/* {props.children[0]}
            {props.children[1]} */}
            <Nav2 />
        </div>
    );
};

export default NavBar;
