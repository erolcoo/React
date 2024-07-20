import React, { useState, useEffect } from 'react';
import { fetchArabiaDestination } from '../../services/FetchDestinations.js';
import { Link } from 'react-router-dom';
import './main.css';



const Arabia = () => {
    const [arabiaData, setArabiaData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchArabiaDestination();
                if (data) {
                    setArabiaData(data);
                }
            } catch (error) {
                console.error('Error fetching Arabia data:', error);
            }
        };
        getData();
    }, []);

    return (
        <>
            <div className="header-content1">
                <h2>Desert Paradise</h2>
            </div>
            <div className="Link-Home">
                <Link to="/catalog">Catalog</Link>
            </div>
            <div className="travel-box">
                {arabiaData && Object.values(arabiaData).map((destination, index) => (
                    <div key={index} className="destination">
                        <img src={destination.image} alt={destination.title} />
                        <div>
                            <h3>{destination.title}</h3>
                            <p>{destination.description}</p>
                            <p><br /><a href="/TakeOffer">Take Offer</a></p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Arabia;
