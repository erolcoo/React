import { Navigate } from "react-router-dom";
import { useAuth } from "../auth-pages/AuthProvider";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { isAuthenticated } = useAuth();

  console.log("PrivateRoute - isAuthenticated:", isAuthenticated);

  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/NotFound" />;
};

export default PrivateRoute;
