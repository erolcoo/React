import{ createContext, useState, useContext } from 'react';

const DestinationsContext = createContext();

export const DestinationsProvider = ({ children }) => {
  const [destinations, setDestinations] = useState([]);

  return (
    <DestinationsContext.Provider value={{ destinations, setDestinations }}>
      {children}
    </DestinationsContext.Provider>
  );
};

export const useDestinations = () => useContext(DestinationsContext);
