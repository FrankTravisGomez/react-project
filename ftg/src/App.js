import ReactDom from "react-dom/client";

import React, { useState, useEffect } from 'react';
function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const name = 'Trav';

    return (
        <div>
            <head>
                <title>Travis Gomez Portfolio</title>
            </head>
            My name is:
            <h1>{name}</h1>
            <h1>{time}</h1>
        </div>
    );
}

export default App;