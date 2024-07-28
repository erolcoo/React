import { useState, useEffect } from 'react';
import { fetchUSADestination } from '../../services/FetchDestinations.js';
import { Link } from 'react-router-dom';
import './main.css';

const USA = () => {
    const [usaData, setUsaData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchUSADestination();
                if (data) {
                    setUsaData(data);
                }
            } catch (error) {
                console.error('Error fetching USA data:', error);
            }
        };
        getData();
    }, []);

    return (
        <>
            <div className="header-content3">
                <h2>Touch the American dream</h2>
            </div>
            <div className="Link-Home">
                <Link to="/catalog">Catalog</Link>
            </div>
            <div className="travel-box">
                {usaData && Object.values(usaData).map((destination, index) => (
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

export default USA;
