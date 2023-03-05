import React from "react";
import ReactDOM from "react-dom";

const name= "Rahul"
const age= "21"
ReactDOM.render(
    <div>
        <h1>Hello {name}</h1>
        <p>your are {age} years old</p>
    </div>,
    document.getElementById('contents')
);