import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-pages/AuthProvider';
import { useDispatch, useSelector } from 'react-redux';
import { updateDestination as updateDestinationAction, deleteDestination as deleteDestinationAction } from '../destinationsSlice';
import MyProfileContent from './MyProfileContent';
import { updateDestination, deleteDestination } from '../../services/destinationService'; 

import '../auth-pages/auth.css';
import './MyProfile.css';

const MyProfile = () => {
  const { deleteAccount } = useAuth(); 
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ image: "", name: "", days: "" });

  const isHomePage = location.pathname === '/';
  const destinations = useSelector((state) => state.destinations);

  const handleDelete = async () => {
    try {
      await deleteDestination(editingId);
      dispatch(deleteDestinationAction(editingId));
      deleteAccount(); 
      navigate('/');
    } catch (error) {
      console.error("Error deleting user:", error);
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
      await updateDestination(editingId, editData);
      dispatch(updateDestinationAction({ id: editingId, ...editData }));
      setEditingId(null);
      setEditData({ image: "", name: "", days: "" });
    } catch (error) {
      console.error("Error updating destination:", error);
    }
  };

  const handleEditChange = (e) => {
    setEditData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditData({ image: "", name: "", days: "" });
  };

  const handleDeleteDestination = async (id) => {
    try {
      await deleteDestination(id);
      dispatch(deleteDestinationAction(id));
    } catch (error) {
      console.error("Error deleting destination:", error);
    }
  };

  return (
    <MyProfileContent
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      editingId={editingId}
      handleDelete={handleDelete}
      isHomePage={isHomePage}
      navigate={navigate}
      destinations={destinations}
      handleEdit={handleEdit}
      handleDeleteDestination={handleDeleteDestination}
      editData={editData}
      handleEditChange={handleEditChange}
      handleUpdate={handleUpdate}
      handleCancelEdit={handleCancelEdit}
    />
  );
};

export default MyProfile;
