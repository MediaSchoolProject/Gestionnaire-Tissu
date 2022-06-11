import React from "react";
import { Link} from "react-router-dom";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import '../../../components/navbar/Navbar.css'
import '../../../components/footer/Footer.css'
import './Home.css';
import image from '../../../pictures/logo.jpg'



export default function Home() {
  return (
    <>
    <Navbar/>
    <img src={image} alt='Logo' id="imageLogo"/>
    <Link to = "/Login"><button id="startButton">START</button></Link>
    <Footer/>
    </>
  );
}
