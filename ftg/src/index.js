//1 import react and reactDOM libraries
import React from 'react';
import ReactDom from 'react-dom/client';

//2 get a reference to the dive with ID root
const el = document.getElementById('root');

//3 tell React to take control of that element
const root = ReactDom.createRoot(el);

//4 Create a component
function App(){
    return <h1>Hello there!</h1>;
}

//5 shpw the component on the screen
root.render(<App />);