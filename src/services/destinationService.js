const BASE_URL = 'https://react-e347e-default-rtdb.europe-west1.firebasedatabase.app/destinations';

export const updateDestination = async (id, editData) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}.json`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editData),
    });

    if (!response.ok) {
      throw new Error('Failed to update destination');
    }

    return await response.json();
  } catch (error) {
    console.error("Error updating destination:", error);
    throw error;
  }
};

export const deleteDestination = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}.json`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error('Failed to delete destination');
    }
  } catch (error) {
    console.error("Error deleting destination:", error);
    throw error;
  }
};
