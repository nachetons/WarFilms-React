
import '../../styles/main.css'
import '../../styles/navs.css'

import '../../styles/footer.css'
import '../../styles/carrusel.css'
import '../../styles/login.css'


import useOutsideClick from '../../tools/useOutSideClick';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from '../fragments/login.jsx'
import Navs from '../fragments/navs/navs.jsx'
import Header from '../fragments/header.jsx'
import Carrusel from '../fragments/carruseles/carruseles.jsx'
import Footer from '../fragments/footer';
import Trailer from '../fragments/trailer';

import { useState, useRef } from 'react'



const IndexPage = ({setIsAuth, isAuth}) =>{
  const [show,setShow] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => {
    if (show) setShow(false);
  });
  return (
    <>
      <div className="all_carrusel"  ref={ref} style={{position: 'relative'}}>

  {show ?
  <>
    <div className="iframe_index" onClick={()=>setShow(!show)} style={{position: 'absolute'}}  >
    <div className="video" style={{backgroundColor: 'red', height: '50%', width: '50%'}}></div>


    </div>
    



    </>

    :

  null

}


<Navs setIsAuth={setIsAuth} isAuth={isAuth}/>
    

    <Header />
    
 
    <Carrusel handleClick={setShow}/>

 
    <Footer />


</div>
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

   