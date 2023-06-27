import React, { useState, useEffect } from 'react';
import ProfileCard from './profileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImages from './images/siri.png';

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
                <ProfileCard title="Alexa" handle="@alexa" image={AlexaImage}/>
                <ProfileCard title="Cortana" handle="@cortana" image={CortanaImage}/>
                <ProfileCard title="Siri" handle="@siri" image={SiriImages}/>
            </div>
        </div>
    );
}

export default App;