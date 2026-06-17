import React, { useState } from "react";
import { X } from "lucide-react";

const App = () => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");

    const [task, setTask] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();

        const addNote = [...task];

        addNote.push({ title, details });

        setTask(addNote);

        setTitle("");
        setDetails("");
    };

    const deleteNote = (idx) => {
        const addNote = [...task];
        addNote.splice(idx, 1);

        setTask(addNote);
    };

    return (
        <div className="h-full  lg:flex bg-black text-whit text-white">
            <form
                onSubmit={(e) => {
                    submitHandler(e);
                }}
                className=" flex lg:w-1/2 items-start  gap-4 flex-col  p-10">
                <h1 className="text-3xl font-bold">Add Notes </h1>
                {/* first input */}
                <input
                    type="text"
                    placeholder="Enter Notes Heading"
                    className="px-5 w-full py-2 border-2 outline-none rounded font-medium"
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />
                {/* detailed input */}
                <textarea
                    type="text"
                    placeholder="Write Details"
                    value={details}
                    onChange={(e) => {
                        setDetails(e.target.value);
                    }}
                    className="px-5 outline-none w-full h-32 py-2 border-2 rounded font-medium"
                />
                <button
                    className="bg-white w-full active:scale-90  active:bg-gray-300
            ` text-black px-5 py-2 outline-none rounded font-medium">
                    Add notes
                </button>
            </form>
            <div className=" lg:w-1/2 p-10  lg:border-l-2">
                <h1 className="text-3xl font-bold">Recent Notes </h1>
                <div className="flex gap-5 flex-wrap items-start justify-start h-[90%] mt-5 overflow-auto">
                    {task.map(function (elem, idx) {
                        return (
                            <div
                                key={idx}
                                className=" relative bg-black h-52 w-40 rounded-2xl text-black py-9 px-4 overflow-hidden bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
                                <h2 className="active:scale-95 absolute right-5 top-5 p-1 rounded-full text-xs">
                                    <X
                                        onClick={() => {
                                            deleteNote(idx);
                                        }}
                                        size={16}
                                        strokeWidth={2.75}
                                    />
                                </h2>
                                <h3 className="leading-tight text-lg font-bold wrap-break-word">
                                    {elem.title}
                                </h3>
                                <p className="mt-2 leading-tight text-sm font-semibold text-gray-600 wrap-break-word overflow-y-auto max-h-36">
                                    {elem.details}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default App;
