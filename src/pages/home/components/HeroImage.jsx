import React from "react";
import Hero from "../../../assets/HeroIMG.png";
import {Button} from 'react-bootstrap'

export default function HeroImage() {
  return (
    // <main className="">
    //   <div className="row px-5 mb-2 d-flex justify-content-between align-items-center">
    //     <div className="col-lg-7 col-sm-6">
    //       <h1 className="mb-3 animate__animated animate__fadeInDown">Plataforma Solidaria Comunitaria</h1>
    //       <div className="row">
    //         <div className="col-lg-6 col-md-6 col-sm-6 mb-2">
    //           <h5 className="animate__animated animate__fadeIn">Voluntarios</h5>
    //           <p>Puedes unirte a nustro grupo de voluntarios y participar en las distintos programas establecidos por nuestras organizaciones asociadas</p>
              
    //           <Button variant="outline-primary">Incribirse</Button>
    //         </div>
    //         <div className="col-lg-6 col-md-6 col-sm-12 mb-2">
    //           <h5 className="animate__animated animate__fadeIn">Organizaciones</h5>
    //           <p>¿Quieres unirte a las organizaciones asociadas? Pues ven y unete para poder abrir los espacios para tus voluntariados y actividades para los voluntarios.
                
    //           </p>
    //           <Button variant="outline-primary">Incribirse</Button>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-lg-5 col-sm-12">
    //       <img src={Hero} alt="" className="w-75 animate__animated animate__fadeIn" />
    //     </div>
    //   </div>
    // </main>
    <section id="hero">
    <div className="hero-container" data-aos="zoom-in" data-aos-delay="100">
      <h1 className="mb-4 pb-0">Solidaridad<br/><span></span> Comunitaria</h1>
      <p className="mb-4 pb-0">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="glightbox play-btn mb-4"></a>
      <a href="#about" className="about-btn scrollto">About Us</a>
    </div>
  </section>
  );
}
