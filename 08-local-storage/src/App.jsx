import React, { useState } from "react";
import axios from "axios";

const App = () => {
    // local storage method it used to manage data on browesrs local storage
    // localStorage.setItem()
    // localStorage.getItem()
    // localStorage.removeItem()
    // localStorage.clear()

    // fetch method to call api
    // async function getData() {
    //     const response = await fetch(
    //         "https://jsonplaceholder.typicode.com/todos/1",
    //     );

    //     console.log(response);
    // }

    // const getData = async () => {
    //     const response = await fetch(
    //         "https://jsonplaceholder.typicode.com/todos/1",
    //     );

    //     const data = await response.json();
    //     console.log(data);
    // };

    // axios api call
    // const getData = async () => {
    //     const response = await axios.get(
    //         "https://jsonplaceholder.typicode.com/users",
    //     );

    //     console.log(response.data);
    // };

    // destructering data
    // const getData = async () => {
    //     const {data} = await axios.get(
    //         "https://jsonplaceholder.typicode.com/users",
    //     );

    //     console.log(data);
    // };

    const [data, setData] = useState([]);

    const getData = async () => {
        const response = await axios.get("https://picsum.photos/v2/list");

        setData(response.data);
    };

    return (
        <div>
            <button onClick={getData}>getdata</button>
            <div>
                {data.map(function (elem, idx) {
                    return (
                        <h3>
                            hello, {elem.author}
                            {idx}
                        </h3>
                    );
                })}
            </div>
        </div>
    );
};

export default App;
