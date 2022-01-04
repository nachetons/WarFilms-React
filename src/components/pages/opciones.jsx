import logo from '../../images/1.jpg'
import '../../styles/main.css'
import '../../styles/navs.css'
import '../../styles/footer.css'
import '../../styles/login.css'



import '@fortawesome/fontawesome-free/css/all.min.css';

import Login from '../fragments/login.jsx'
import Navs from '../fragments/navs/navs.jsx'
import Carrusel from '../fragments/carruseles/carruseles.jsx'
import Footer from '../fragments/footer';

import { useState } from 'react'

const opciones = ({setIsAuth, isAuth}) =>{
  
  return (
    <>
    
    
    <Navs setIsAuth={setIsAuth} isAuth={isAuth}/>
    
    <div className="container">
    <p>OPCIONES</p>
    </div>
    
    <Footer />
    </>





  )



}

export default opciones;


   