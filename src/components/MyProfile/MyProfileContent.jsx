import { Link } from 'react-router-dom';
import DestinationItem from '../CreateDestination/DestinationItem';
import EditDestinationForm from '../CreateDestination/EditDestinationForm';
import EditProfileForm from './EditProfileForm';

const MyProfileContent = ({
  isEditing,
  setIsEditing,
  editingId,
  handleDelete,
  isHomePage,
  navigate,
  destinations,
  handleEdit,
  handleDeleteDestination,
  editData,
  handleEditChange,
  handleUpdate,
  handleCancelEdit,
}) => {
  return (
    <>
      {isEditing ? (
        <EditProfileForm setIsEditing={setIsEditing} />
      ) : (
        <div className="MyProfile">
          <h2>My Profile</h2>
          <button
            onClick={() => setIsEditing(true)}
            className="edit-profile-button"
          >
            Edit Account
          </button>
          {!editingId && (
            <Link
              to="/"
              onClick={(event) => {
                handleDelete(); 
                if (!isHomePage) {
                  event.preventDefault();
                  navigate('/');
                }
              }}
              className="delete-account-link"
            >
              Delete Account
            </Link>
          )}
          <Link to="/" className="cancel-link">
            Back
          </Link>
          
          <div className="destinations-section">
            <h3>Your Destinations</h3>
            <div className="travel-box">
              {destinations.length === 0 ? (
                <p>No destinations found.</p>
              ) : (
                destinations.map((dest) => (
                  <DestinationItem
                    key={dest.id}
                    destination={dest}
                    onEdit={() => handleEdit(dest.id)}
                    onDelete={() => handleDeleteDestination(dest.id)}
                  />
                ))
              )}
            </div>
          </div>

          {editingId && (
            <EditDestinationForm
              editData={editData}
              handleEditChange={handleEditChange}
              handleUpdate={handleUpdate}
              handleCancel={handleCancelEdit}
            />
          )}
        </div>
      )}
    </>
  );
};

export default MyProfileContent;
