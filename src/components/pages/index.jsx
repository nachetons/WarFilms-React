
import logo from '../../images/1.jpg'
import '../../styles/main.css'
import '../../styles/navs.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../styles/mediaquerys.css'


import Navs from '../fragments/navs.jsx'
export default function IndexPage(){
 
  return (
    <>
    
    
    <Navs />
    
    
    <div className="container">
      <div className="background">
        <h1>Welcome</h1>
        <h2>Este va a ser mi carrusel principal</h2>

      </div>
    </div>

    <div id="contenedor">
      <div id="pelis_header">
      <div className="mySlides fade">
        <img id="foto" src={logo} />
        <div className="text_title">Batman</div>
        <div className="text">1</div>
      </div>
    </div>
    </div>
    
    
    
    </>





  )



}



    


    

  

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

   