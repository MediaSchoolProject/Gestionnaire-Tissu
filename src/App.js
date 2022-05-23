import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Cart from "./components/cart/Cart";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Menu from "./pages/Menu/Menu";
import { Routes, Route,} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
          <Route exact path="/" element={<Home/>} />      
          <Route exact path="Login" element={<Login/>} />          
          <Route exact path="Menu" element={<Menu/>} />           
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
