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
      <button onClick={handleDelete} style={{ background: 'red', color: 'white' }}>
        Delete Account
      </button>
    </div>
  );
}
