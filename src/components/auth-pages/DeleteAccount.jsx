import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-pages/AuthProvider';

export default function DeleteAccount() {
  const { deleteAccount } = useAuth();
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteAccount(); 
    navigate('/');  
  };

  return (
    <div className="delete-account">
      <h1>Delete Account</h1>
      <p>Are you sure you want to delete your account? This action cannot be undone.</p>
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>
        Delete Account
      </button>
      <button onClick={() => navigate('/')} style={{ marginLeft: '10px' }}>
        Cancel
      </button>
    </div>
  );
}
