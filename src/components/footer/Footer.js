import React from 'react'
import './Footer.css'

export default function Footer() {

  let newDate = new Date();

  return (
      <div className="Footer" >
        ALL RIGHTS RESERVED @ {newDate.getFullYear()}
      </div>
  );
}
