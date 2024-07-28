import { Link } from 'react-router-dom';
import './NotFound.css';

const ReminderMSG= () => {
  return (
    <div className="not-found">
      <h1>You already have an account.!</h1>
      <p>If you want to create your own destination or visit your profile, PLEASE go to Home</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
};

export default ReminderMSG;