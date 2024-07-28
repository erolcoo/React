import { Navigate } from "react-router-dom";
import { useAuth } from "../auth-pages/AuthProvider";

const PublicRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? <Component {...rest} /> : <Navigate to="/ReminderMSG" />;
};

export default PublicRoute;
