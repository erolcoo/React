// import { Router, Route } from "react-router-dom";

import Header from "./components/main-page/Header.jsx";
import Nav from "./components/main-page/Nav.jsx";
import Core from "./components/main-page/Core.jsx";
import Footer from "./components/main-page/Footer.jsx";


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
