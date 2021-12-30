
import logo from '../../images/1.jpg'
import '../../styles/main.css'
import '../../styles/navs.css'
import '../../styles/footer.css'
import '../../styles/carrusel.css'
import '../../styles/login.css'
import '../../styles/formulario.css'


import '@fortawesome/fontawesome-free/css/all.min.css';
import '../../styles/mediaquerys.css'

import Login from '../fragments/login'
import Navs from '../fragments/navs/navs'
import Footer from '../fragments/footer';

const formulario = () =>{
 
  return (
    <>
    
    <Navs />
    <Login />
    
    
    <div className="container" id="cajaPrincipal">
        <div className="container-form">
            <h2>Formulario de contacto</h2>
            <p>Por favor, complete sus datos antes de enviar la información.</p>
            
            <form action="#">
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="nombre">Nombre</label>
                    </div>
                    <div className="col-36">
                        <input type="text" id="nombre" name="nombre" placeholder="Nombre"/>
                    </div>
                    <div className="col-36 right">
                        <input type="text" id="apellidos" name="apellidos" placeholder="Apellidos"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="email" name="email" placeholder="Email"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="telefono">Teléfono</label>
                    </div>
                    <div className="col-75">
                        <input type="text" id="telefono" name="telefono" placeholder="Teléfono"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="asunto">Asunto del mensaje</label>
                    </div>
                    <div className="col-75">
                        <select id="asunto">Asunto del mensaje
                            <option>Quejas y reclamaciones</option>
                            <option>Sugerencia</option>
                            <option>Otro</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-25">
                        <label htmlFor="mensaje">Mensaje</label>
                    </div>
                    <div className="col-75">
                        <textarea id="mensaje" name="mensaje" placeholder="Escriba su mensaje..."
                            style={{height:"200px"}}></textarea>
                    </div>
                </div>
                <br/>
                <div className="row bottom">
                    <input type="submit" value="Enviar"/>
                </div>
            </form>
        </div>
    </div>
    


    <Footer />
    </>





  )



}

export default formulario



    


    

  

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

   