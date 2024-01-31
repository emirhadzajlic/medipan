import React from "react";
import { useEffect, useState } from "react";
import "./css/Contact.css"
import Nav from "./Nav"
import Footer from "./Footer";

import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

import { Helmet } from 'react-helmet';
import { FaLocationArrow } from "react-icons/fa";





function Contact(){

  useEffect(() => {

    
    window.scrollTo(0, 0);

  }, [])

 
    return(
      <>

        <Helmet>
          <meta
            name="description"
            content="Kontakt informacije firme MEDIPAN koja se bavi proizvodnjom kuhinja i ostalog namještaja od iverice i medijapana. Bijelo Polje, Crna Gora"
          />
          <title>Kontakt | MEDIPAN</title>

          <meta name="robots" content="noindex" />

        </Helmet>

        <Nav></Nav>

        <section className="background">
          <img loading="eager" width={900} height={'auto'} title="MEDIPAN logo" src={require("./img/medipan-home.webp")} alt="Dio MEDIPAN logo-a u obliku kuće koja predstavlja uređenje doma."></img>
        </section>

        <div className="aboutHeader">
          {/* <img src={require("./img/enterijer.jpg")}></img> */}
          <h1>Kontakt</h1>
          {/* <img src={require("./img/decor.png")}></img> */}
          {/* <div className="decor"></div> */}
          
        </div>

        <div className="main-contact">

          <div className="contact-data">
            <div className="con">
              <h2><FaLocationDot /> Adresa</h2>
              <p>Ulica 5</p>
              <p>84 000 Bijelo Polje</p>
              <p>Crna Gora</p>
              <a href="https://www.google.com/maps/place/Kuhinje+po+mjeri+MEDIPAN/@43.0393297,19.7479246,17z/data=!3m1!4b1!4m6!3m5!1s0x1352a3e8636312fd:0x392c4a76d4137a2b!8m2!3d43.0393297!4d19.7504995!16s%2Fg%2F11q3tk5nn4?entry=ttu"><FaLocationArrow /> Pokaži put</a>
            </div>
            <div className="con">
              <h2><FaPhoneAlt /> Telefon</h2>
              <p>+382 68 248 640</p>
            </div>
            <div className="con">
              <h2><MdEmail /> Email</h2>
              <p>office@medipan.me</p>
            </div>
            {/* <div>
              <h3>Drustvene Mreze</h3>
            </div> */}
          </div>

          {/* <div> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186630.43304932176!2d19.445629119873026!3d43.03931657277893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1352a3e8636312fd%3A0x392c4a76d4137a2b!2sKuhinje%20po%20mjeri%20MEDIPAN!5e0!3m2!1sen!2s!4v1706036547598!5m2!1sen!2s" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className="map"></iframe>
          {/* </div> */}

        </div>

        <Footer></Footer>
      </>
      
  )

}

export default Contact;