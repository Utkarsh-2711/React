import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar2 = () => {
    // this is used for the navigation throuth buttons through pages
    const navigate = useNavigate();

    return (
        <div className="py-2 px-5 bg-cyan-800">
            {/* use navigate Button */}
            <button
                onClick={() => {
                    navigate("/");
                }}
                className="bg-amber-700 py-3 px-2 mt-3 ml-5 cursor-pointer active:scale-95 rounded">
                Retun To Home page
            </button>

            <button
                onClick={() => {
                    navigate(-1);
                }}
                className="bg-amber-700 py-3 px-2 mt-3 ml-5 cursor-pointer active:scale-95 rounded">
                Back
            </button>
            <button
                onClick={() => {
                    navigate(+1);
                }}
                className="bg-amber-700 py-3 px-2 mt-3 ml-5 cursor-pointer active:scale-95 rounded">
                Next
            </button>
        </div>
    );
};

export default NavBar2;
