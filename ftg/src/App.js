import 'bulma/css/bulma.css'
import React, { useState, useEffect } from 'react';
import ProfileCard from './profileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

function App() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);
    const profilesPerPage = 6;

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const name = 'Trav';

    const handleSort = (option) => {
        setSortOption(option);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const profileCards = [
        {
            title: 'Alexa',
            handle: '@alexa',
            image: AlexaImage,
            description: 'made by the Amazon gods!',
            link: 'https://amazon.com',
        },
        {
            title: 'Cortana',
            handle: '@cortana',
            image: CortanaImage,
            description: 'made by microsoft...',
            link: 'https://xbox.com',
        },
        {
            title: 'Siri',
            handle: '@siri',
            image: SiriImage,
            description: 'Another amazing product designed by Apple.',
            link: 'https://apple.com',
        },
    ];

    const filteredProfileCards = profileCards.filter((card) => {
        const { title, handle, description } = card;
        const lowerCaseQuery = searchQuery.toLowerCase();
        return (
            title.toLowerCase().includes(lowerCaseQuery) ||
            handle.toLowerCase().includes(lowerCaseQuery) ||
            description.toLowerCase().includes(lowerCaseQuery)
        );
    });

    const sortedProfileCards = [...filteredProfileCards].sort((a, b) => {
        if (sortOption === 'alphabetical') {
            return a.title.localeCompare(b.title);
        }
        // Add more sorting options as needed
        return 0;
    });

    const indexOfLastProfile = currentPage * profilesPerPage;
    const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
    const paginatedProfileCards = sortedProfileCards.slice(
        indexOfFirstProfile,
        indexOfLastProfile
    );

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
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <select
                                    value={sortOption}
                                    onChange={(e) => handleSort(e.target.value)}
                                >
                                    <option value="default">Default</option>
                                    <option value="alphabetical">Alphabetical</option>
                                    {/* Add more sort options as needed */}
                                </select>
                                {paginatedProfileCards.map((card) => (
                                    <ProfileCard {...card} key={card.title} />
                                ))}
                                {profileCards.length > profilesPerPage && (
                                    <div className="pagination">
                                        {Array.from({
                                            length: Math.ceil(
                                                sortedProfileCards.length / profilesPerPage
                                            ),
                                        }).map((_, index) => (
                                            <button
                                                key={index}
                                                className={index + 1 === currentPage ? 'active' : ''}
                                                onClick={() => handlePageChange(index + 1)}
                                            >
                                                {index + 1}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default App;