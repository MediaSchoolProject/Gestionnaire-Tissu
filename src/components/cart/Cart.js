import React from 'react'
import image01 from '../../pictures/logo.jpg'

export default function Cart(props) {
  return (
    <>
    <div className="card" style={{width: '18rem'}}>
  <img src={image01} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </>
  )
}
