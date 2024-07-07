import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/main-page/Header.jsx";
import Nav from "./components/main-page/Nav.jsx";
import Catalog from "./components/main-page/Catalog.jsx";
import Core from "./components/main-page/Core.jsx";
import Footer from "./components/main-page/Footer.jsx";
import Europa from "./components/views/Europa.jsx";
import USA from "./components/views/USA.jsx";
import Arabia from "./components/views/Arabia.jsx";
import LoginForm from "../src/components/auth-pages/login.jsx";
import RegisterForm from "../src/components/auth-pages/register.jsx";
import Logout from "./components/auth-pages/logout.jsx";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
    {isHomePage && <Nav />}
    {isHomePage && <Header />}
    <Routes>
      <Route path="/" element={<Core />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/Catalog" element={<Catalog />} />
      <Route path="/Europa" element={<Europa />} />
      <Route path="/USA" element={<USA />} />
      <Route path="/Arabia" element={<Arabia />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
    {isHomePage && <Footer />}
  </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
