
import logo from '../../images/1.jpg'
import '../../styles/main.css'
import '../../styles/navs.css'
import '../../styles/footer.css'
import '../../styles/carrusel.css'
import '../../styles/login.css'
import '../../styles/categorias.css'


import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../styles/mediaquerys.css'

import Login from '../fragments/login.jsx'
import Navs from '../fragments/navs.jsx'
import Footer from '../fragments/footer';
import { useParams } from 'react-router-dom'



const categorias = () => {
 const {categoria} = useParams();

  return (
    <>
    

    <Navs />
    <Login />
    
    <h3 id="titulos" className="titulo">{categoria}</h3>

    <div className="row" id="contenedor_main">

      <div className="peliculas" id="list_pelis">

        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        <a href="#">
          <div className="poster">
            <img src={logo} alt="Imagen portada"/>
          </div>
        </a>
        </div>
    </div>
    <Footer />
    </>





  )



}


export default categorias



    


    

  

  /*  <script>
      var slideIndex = 0;
      let tiempocambio = 3000;
      showSlides();
      function showSlides() {
        
       var i;

       var slides = document.getElementsByclassNameName("mySlides");

       for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        
if (i==0) {
  
  tiempocambio=0;

}else{
  tiempocambio=3000;
}
        
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";

       setTimeout(showSlides,tiempocambio);
       }
    
    </script>*/

   