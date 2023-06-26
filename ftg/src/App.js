import React, { useState, useEffect } from 'react';
import ProfileCard from './profileCard';

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
            My name is:
            <h1>{name}</h1>
            <h1>{time}</h1>
            <div>
                Personal digital assistant
                <ProfileCard title="Alexa" handle="@alexa" />
                <ProfileCard title="Cortana" handle="@cortana" />
                <ProfileCard title="Siri" handle="@siri" />
            </div>
        </div>
    );
}

export default App;