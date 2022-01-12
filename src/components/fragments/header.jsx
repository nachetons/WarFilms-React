import logo from '../../images/1.jpg'
import {useState,useEffect} from 'react';

export default function Header(){
    return (
  <>



<div className="container">
      <div className="background">

      </div>
    </div>

    <div id="contenedor">
      <div id="pelis_header">
      <div className="mySlides fade">
        <img id="foto" src={logo}/>
        <div className="text_title">Batman</div>
        <div className="text">1</div>
      </div>
    </div>
    </div>

</>
);
}