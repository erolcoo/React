import { Provider } from "react-redux";
import store from "./components/store";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/main-page/Header.jsx";
import NavBar from "./components/main-page/Nav.jsx";
import Catalog from "./components/main-page/Catalog.jsx";
import Core from "./components/main-page/Core.jsx";
import Footer from "./components/main-page/Footer.jsx";
import Europa from "./components/views/Europa.jsx";
import USA from "./components/views/USA.jsx";
import Arabia from "./components/views/Arabia.jsx";
import LoginForm from "./components/auth-pages/Login.jsx";
import RegisterForm from "./components/auth-pages/Register.jsx";
import Logout from "./components/auth-pages/Logout.jsx";
import { AuthProvider } from "./components/auth-pages/AuthProvider";
import CreateDestination from "./components/CreateDestination/Createdestination.jsx";
import MyProfile from "./components/MyProfile/MyProfile.jsx";
import NotFound from "./components/views/NotFound.jsx";
import ReminderMSG from "./components/views/ReminderMSG.jsx";
import PrivateRoute from "./components/Guards/PrivateRoute.jsx";
import PublicRoute from "./components/Guards/PublicRoute.jsx";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <NavBar />}
      {isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<Core />} />
        <Route
          path="/register"
          element={<PublicRoute element={RegisterForm} />}
        />
        <Route path="/login" element={<PublicRoute element={LoginForm} />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route
          path="/CreateDestination"
          element={<PrivateRoute element={CreateDestination} />}
        />
        <Route path="/Europa" element={<Europa />} />
        <Route path="/USA" element={<USA />} />
        <Route path="/Arabia" element={<Arabia />} />
        <Route
          path="/MyProfile"
          element={<PrivateRoute element={MyProfile} />}
        />
        <Route path="/ReminderMSG" element={<ReminderMSG />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isHomePage && <Footer />}
    </>
  );
}

function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>
          <Layout />
        </Router>
      </AuthProvider>
    </Provider>
  );
}

export default App;
