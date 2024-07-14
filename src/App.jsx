import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/main-page/Header.jsx";
import NavBar from "./components/main-page/Nav.jsx";
import Catalog from "./components/main-page/Catalog.jsx";
import Core from "./components/main-page/Core.jsx";
import Footer from "./components/main-page/Footer.jsx";
import Europa from "./components/views/Europa.jsx";
import USA from "./components/views/USA.jsx";
import Arabia from "./components/views/Arabia.jsx";
import LoginForm from "./components/auth-pages/login.jsx";
import RegisterForm from "./components/auth-pages/register.jsx";
import TakeOffer from "./components/views/TakeOffer.jsx";
import Logout from "./components/auth-pages/Logout.jsx";
import { AuthProvider } from "./components/auth-pages/AuthProvider";

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <>
      {isHomePage && <NavBar />}
      {isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<Core />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/Catalog" element={<Catalog />} />
        <Route path="/Europa" element={<Europa />} />
        <Route path="/USA" element={<USA />} />
        <Route path="/Arabia" element={<Arabia />} />
        <Route path="/TakeOffer" element={<TakeOffer />} />
      </Routes>
      {isHomePage && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout />
      </Router>
    </AuthProvider>
  );
}

export default App;
