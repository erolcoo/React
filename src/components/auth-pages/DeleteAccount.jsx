import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth-pages/AuthProvider';

export default function DeleteAccount() {
  const { setIsAuthenticated, setUser } = useAuth(); 
  const navigate = useNavigate(); 

  const handleDelete = () => {
    
    localStorage.removeItem('user');
    localStorage.removeItem('userPersisted');

  
    setIsAuthenticated(false);
    setUser(null);
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
