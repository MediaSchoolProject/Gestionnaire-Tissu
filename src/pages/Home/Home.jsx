import React from "react";
import image from '../../pictures/logo.jpg';
import './Home.css';
import { Link, Outlet } from "react-router-dom";


export default function Home() {
  return (
    <div className='container'>
      <form className="row g-3">
      <img src={image} alt='Logo' style={{width:'30%',height:'30%',margin:'-2% 35% 5% 35%'}}/>
      <Link to = "/Login"><button type="button" className="btn btn-primary" style={{width:'20%',margin:'-15% 40% -15% 40%'}}>START</button></Link>
      </form>
    </div>
  );
}
