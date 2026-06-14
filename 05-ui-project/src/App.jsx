import React from "react";
import Section1 from "./components/Section1/Section1";

const App = () => {
    const users = [
        {
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "",
            buttonColor: "bg-emerald-500 text-white",
            arrowButtonColor: "bg-emerald-700 text-white",
            tag: "Satisfied",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "",
            buttonColor: "bg-orange-500 text-white",
            arrowButtonColor: "bg-orange-700 text-white",
            tag: "Underserved",
        },
        {
            img: "https://plus.unsplash.com/premium_photo-1672373830660-4655ca9de6c3?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            intro: "",
            buttonColor: "bg-sky-500 text-white",
            arrowButtonColor: "bg-sky-700 text-white",
            tag: "Underbanked",
        },
        {
            img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
            intro: "",
            buttonColor: "bg-rose-500 text-white",
            arrowButtonColor: "bg-rose-700 text-white",
            tag: "Served",
        },
    ];
    return (
        <div>
            <Section1 users={users} />
        </div>
    );
};

export default App;
