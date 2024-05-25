import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/main-page/Header.jsx";
import Nav from "./components/main-page/Nav.jsx";
import Core from "./components/main-page/Core.jsx";
import Footer from "./components/main-page/Footer.jsx";
import Europa from "./components/views/Europa.jsx";
import USA from "./components/views/USA.jsx";
import Arabia from "./components/views/Arabia.jsx";
// import Register from './components/Register.jsx';
// import Login from './components/Login.jsx';

function Layout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div>
      {isHomePage && <Nav />}
      {isHomePage && <Header />}
      <Routes>
        <Route path="/" element={<Core />} />
        <Route path="/europa" element={<Europa />} />
        <Route path="/USA" element={<USA />} />
        <Route path="/Arabia" element={<Arabia />} />
      </Routes>
      {isHomePage && <Footer />}
    </div>
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
