import 'bulma/css/bulma.css'
import React, { useState, useEffect } from 'react';
import ProfileCard from './profileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';


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
            <h1>My name is:</h1>
            <h1>{name}</h1>
            <h1>{time}</h1>
            <div>
                <section className="hero is-primary">
                    <div className="hero-body">
                        <p className="title">Personal digital assistant</p>
                    </div>
                </section>

                <div className="container">
                    <section className="section">
                        <div className="columns">
                            <div className="column is-3">
                                <ProfileCard title="Alexa" handle="@alexa" image={AlexaImage}
                                             description="made by the Amazon gods!"
                                             link="https://amazon.com"
                                />
                            </div>
                            <div className="column is-3">
                                <ProfileCard title="Cortana" handle="@cortana" image={CortanaImage}
                                             description="made by microsoft..."
                                />
                            </div>
                            <div className="column is-3">
                                <ProfileCard title="Siri" handle="@siri" image={SiriImage}
                                             description="Another amazing product designed by Apple."
                                />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;