import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDestinations, addDestination, updateDestination as updateDestinationAction, deleteDestination as deleteDestinationAction } from '../destinationsSlice';
import DestinationItem from './DestinationItem';
import CreateDestinationForm from './CreateDestinationForm';
import EditDestinationForm from './EditDestinationForm';
import { fetchDestinations, addDestination as addDestinationAPI, deleteDestination as deleteDestinationAPI, updateDestination as updateDestinationAPI } from '../../services/destinationAPI'; 

import './CreateDestination.css';

const CreateDestination = () => {
  const dispatch = useDispatch();
  const destinations = useSelector((state) => state.destinations);

  const [formData, setFormData] = useState({
    id: "",
    image: "",
    name: "",
    days: "",
  });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ image: "", name: "", days: "" });

  useEffect(() => {
    const fetchDestinationsData = async () => {
      try {
        const destinationsArray = await fetchDestinations();
        dispatch(setDestinations(destinationsArray));
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinationsData();
  }, [dispatch]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newDestination = await addDestinationAPI(formData);
      dispatch(addDestination({ id: formData.id, ...formData }));
      setFormData({ id: "", image: "", name: "", days: "" });
    } catch (error) {
      console.error("Error adding destination:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDestinationAPI(id);
      dispatch(deleteDestinationAction(id));
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
      await updateDestinationAPI(editingId, editData);
      dispatch(updateDestinationAction({ id: editingId, ...editData }));
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
