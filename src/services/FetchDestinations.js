
async function fetchArabiaDestination() {
    const url = 'https://react-e347e-default-rtdb.europe-west1.firebasedatabase.app/-O2EfrHDTvkFwiwP1GW-/Arabia.json'; 
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Arabia data:', error);
    }
}


async function fetchEuropeDestination() {
    const url = 'https://react-e347e-default-rtdb.europe-west1.firebasedatabase.app/-O2EfrHDTvkFwiwP1GW-/Europe.json'; 
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching Europe data:', error);
    }
}


async function fetchUSADestination() {
    const url = 'https://react-e347e-default-rtdb.europe-west1.firebasedatabase.app/-O2EfrHDTvkFwiwP1GW-/USA.json'; 
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching USA data:', error);
    }
}


async function fetchDestination() {
    const arabiaData = await fetchArabiaDestination();
    const europeData = await fetchEuropeDestination();
    const usaData = await fetchUSADestination();

    // console.log('Arabia Data:', arabiaData);
    // console.log('Europe Data:', europeData);
    // console.log('USA Data:', usaData);
}


fetchDestination();

export { fetchArabiaDestination, fetchEuropeDestination, fetchUSADestination };
