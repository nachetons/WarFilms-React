
import logo from '../../images/1.jpg'
import '../../styles/main.css'
import '../../styles/navs.css'
import '../../styles/footer.css'
import '../../styles/carrusel.css'
import '../../styles/login.css'



import '@fortawesome/fontawesome-free/css/all.min.css';

import Login from '../fragments/login.jsx'
import Navs from '../fragments/navs/navs.jsx'
import Carrusel from '../fragments/carruseles/carruseles.jsx'
import Footer from '../fragments/footer';

const IndexPage = () =>{
 
  return (
    <>
    
    
    <Navs />
    <Login />
    
    
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
    
    <Carrusel />
    <Footer />
    </>





  )



}

export default IndexPage;



    


    

  

  /*  <script>
      var slideIndex = 0;
      let tiempocambio = 3000;
      showSlides();
      function showSlides() {
        
       var i;

       var slides = document.getElementsByClassName("mySlides");

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

   