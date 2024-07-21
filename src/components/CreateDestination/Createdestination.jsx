import React, { useState, useEffect } from 'react';
import DestinationItem from './DestinationItem';
import CreateDestinationForm from './CreateDestinationForm';
import EditDestinationForm from './EditDestinationForm';
import './CreateDestination.css';

const API_URL =
  "https://react-e347e-default-rtdb.europe-west1.firebasedatabase.app/destinations.json";

const CreateDestination = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    image: "",
    name: "",
    days: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ image: "", name: "", days: "" });

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();
        const destinationsArray = data
          ? Object.entries(data).map(([id, dest]) => ({ id, ...dest }))
          : [];
        setDestinations(destinationsArray);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${API_URL.replace(".json", "")}/${formData.id}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            image: formData.image,
            name: formData.name,
            days: formData.days,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setDestinations((prevDestinations) => [
        ...prevDestinations,
        { id: formData.id, ...formData },
      ]);
      setFormData({ id: "", image: "", name: "", days: "" });
    } catch (error) {
      console.error("Error adding destination:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `${API_URL.replace(".json", "")}/${id}.json`,
        { method: "DELETE" }
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setDestinations(destinations.filter((dest) => dest.id !== id));
    } catch (error) {
      console.error("Error deleting destination:", error);
    }
  };

  const handleEdit = (id) => {
    const destination = destinations.find((dest) => dest.id === id);
    setEditingId(id);
    setEditData({
      image: destination.image,
      name: destination.name,
      days: destination.days,
    });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${API_URL.replace(".json", "")}/${editingId}.json`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editData),
      });
      setDestinations(
        destinations.map((dest) =>
          dest.id === editingId ? { ...dest, ...editData } : dest
        )
      );
      setEditingId(null);
      setEditData({ image: "", name: "", days: "" });
    } catch (error) {
      console.error("Error updating destination:", error);
    }
  };

  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditData({ image: "", name: "", days: "" });
  };

  return (
    <div className="Create">
      {!editingId && (
        <CreateDestinationForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )}

      {editingId && (
        <EditDestinationForm
          editData={editData}
          handleEditChange={handleEditChange}
          handleUpdate={handleUpdate}
          handleCancel={handleCancelEdit}
        />
      )}

      <h5>Your destinations</h5>
      <div className="travel-box">
        {destinations.map((dest) => (
          <DestinationItem
            key={dest.id}
            destination={dest}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default CreateDestination;
