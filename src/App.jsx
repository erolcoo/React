import Header from "./components/Header.jsx";
import Nav from "./components/Nav.jsx";
import Core from "./components/Core.jsx";
import Footer from "./components/Footer.jsx";

import "./components/header.css";
import "./components/navbar.css";
import "./components/core.css";
import "./components/footer.css";

function App() {
  return (
    <div>
    <Nav />
      <Header />
      <Core />
      <Footer />
    </div>
  );
}

export default App;
