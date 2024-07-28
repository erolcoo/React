import { useState, useEffect } from 'react';
import { fetchEuropeDestination } from '../../services/FetchDestinations.js';
import { Link } from 'react-router-dom';
import './main.css';


const Europe = () => {
    const [europeData, setEuropeData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchEuropeDestination();
                if (data) {
                    setEuropeData(data);
                }
            } catch (error) {
                console.error('Error fetching Europe data:', error);
            }
        };
        getData();
    }, []);

    return (
        <>
            <div className="header-content2">
                <h2>European culture</h2>
            </div>
            <div className="Link-Home">
                <Link to="/catalog">Catalog</Link>
            </div>
            <div className="travel-box">
                {europeData && Object.values(europeData).map((destination, index) => (
                    <div key={index}>
                        <img src={destination.image} alt={destination.title} />
                        <div>
                            <h3>{destination.title}</h3>
                            <p>{destination.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Europe;
