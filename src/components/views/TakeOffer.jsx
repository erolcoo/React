import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TakeOffer.css';

const TakeOffer = ({ isLoggedIn }) => {
  const [message, setMessage] = useState('');

  const handleOfferClick = () => {
    if (!isLoggedIn) {
      setMessage('If you want to send your offer, please register or login to your account!');
    } else {
      setMessage('We will send you email to your account, for instructions and price.!');
    }
  };

  return (
    <div className="TakeOffer">
      <button onClick={handleOfferClick}>Take Offer</button>
      <p className='Msg'>
        {message}
        {!isLoggedIn && message && (
          <div className="Link-login">
            <Link to="/login">Login or Register</Link>
          </div>
        )}
      </p>
    </div>
  );
};

export default TakeOffer;
