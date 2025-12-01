import React from "react";

function MyButton () {
    return(
        <div>
            <button className="py-2 px-5 bg-blue-500 text-white border-[2px] rounded-xl border-blue-500 hover:text-blue-500 hover:bg-white transition duration-300 ease-in-out">Submit</button>
        </div>
    );
}

function MyForm() {
    return (
        <div>
            <form>
                <div className="mb-2">
                    <label>Name: </label>
                    <input type="text" placeholder="Name" />
                </div>
                <div className="mb-2">
                    <label>Email: </label>
                    <input type="email" placeholder="Email" />
                </div>
            </form>
        </div>
    );
}

export default function about() {
    return(
        <div className="para container">
            <p className="text-gray-800 mb-2">Fill the form below :-</p>
            <MyForm />
            <MyButton />
        </div>
    );
}