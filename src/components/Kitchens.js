import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/Kitchens.css"
import Nav from "./Nav"
import Footer from "./Footer";
import { Helmet } from 'react-helmet';


function Kitchens(){

  const navigate = useNavigate();

  useEffect(() => {

    
    window.scrollTo(0, 0);

  }, [])

 
    return(
      <>

        <Helmet>
          <meta
            name="description"
            content="Pogledajte našu galeriju kuhinja po mjeri i pronađite inspiraciju za svoju savršenu kuhinju."
          />
          <title>Kuhinje | MEDIPAN</title>

          <meta name="robots" content="noindex" />


        </Helmet>

        <Nav></Nav>

        <section className="background">
          <img loading="eager" width={900} height={'auto'} title="MEDIPAN logo" src={require("./img/medipan-home.webp")} alt="Dio MEDIPAN logo-a u obliku kuće koja predstavlja uređenje doma."></img>
        </section>

        <div className="aboutHeader">
          {/* <img src={require("./img/enterijer.jpg")}></img> */}
          <h1>Kuhinje</h1>
          {/* <img src={require("./img/decor.png")}></img> */}
          {/* <div className="decor"></div> */}
          
        </div>

        <div className="gallery">

          <div className="row">
            <img loading="eager" title="Kuhinja po mjeri" width={300} height={300} src={require("./img/kuhinja_po_mjeri.webp")} alt="Moderna kuhinja po mjeri u kombinacija bijelog medijapana i tamnog hunton hrasta"></img>
            <img loading="eager" title="Kuhinja po mjeri" width={300} height={'auto'} src={require("./img/kuhinja02.webp")} alt="Bijela Kuhinja po mjeri sa antracit detaljima"></img>
            <img loading="eager" title="Kuhinja po mjeri" width={300} height={'auto'} src={require("./img/kuhinja03.webp")} alt="Neobična antracit kuhinja po mjeri"></img>
            <img loading="eager" title="Kuhinja po mjeri" width={300} height={'auto'} src={require("./img/kuhinja10.webp")} alt="Ova kuhinja po mjeri pored funkcionalnosti odiše i estetikom"></img>
          </div>

          <div className="row">
            <img loading="eager" title="Kuhinja po mjeri" width={300} height={'auto'} src={require("./img/kuhinja04.webp")} alt="Bijela kuhinja po mjeri sa šankom"></img>
            <img loading="eager" title="Kuhinja po mjeri" width={300} height={'auto'} src={require("./img/kuhinja06.webp")} alt="Crna kuhinja po mjeri sa policama"></img>
            <img loading="eager" title="Kuhinja po mjeri" width={300} height={'auto'} src={require("./img/kuhinja07.webp")} alt="Manja kuhinja po mjeri sa maksimalno iskorišćenim prostorom"></img>
            <img loading="eager" title="Kuhinja po mjeri" width={300} height={'auto'} src={require("./img/kuhinja08.webp")} alt="Antracit kuhinja po mjeri bez gornjih elemenata"></img>
          </div>
          {/* <div className="row">
            <img src={require("./img/kuhinja04.jpg")}></img>
            <img src={require("./img/kuhinja09.jpg")}></img>
            <div></div>
            <div></div>
          </div> */}

          {/* <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div> */}

        </div>


        <Footer></Footer>
      </>
      
  )

}

export default Kitchens;