const API_URL = "https://react-e347e-default-rtdb.europe-west1.firebasedatabase.app/destinations";

export const fetchDestinations = async () => {
  try {
    const response = await fetch(`${API_URL}.json`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data ? Object.entries(data).map(([id, dest]) => ({ id, ...dest })) : [];
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

export const addDestination = async (destination) => {
  try {
    const response = await fetch(`${API_URL}/${destination.id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(destination),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error adding destination:", error);
    throw error;
  }
};

export const deleteDestination = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}.json`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error("Error deleting destination:", error);
    throw error;
  }
};

export const updateDestination = async (id, data) => {
  try {
    const response = await fetch(`${API_URL}/${id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error updating destination:", error);
    throw error;
  }
};
