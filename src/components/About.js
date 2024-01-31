import React from "react";
import { useEffect, useState } from "react";
import "./css/About.css"
import Nav from "./Nav"
import Footer from "./Footer";

import { Helmet } from 'react-helmet';


function About(){


  useEffect(() => {

    
    window.scrollTo(0, 0);

  }, [])
 
    return(
      <>

        <Helmet>
          <meta
            name="description"
            content="MEDIPAN je firma koja prati savremene trendove i isporučuje namještaj vrhunske izrade."
          />
          <title>O Nama | MEDIPAN</title>

          <meta name="robots" content="noindex" />

        </Helmet>

        <Nav></Nav>

        <section className="background">
          <img loading="eager" width={900} height={'auto'} title="MEDIPAN logo" src={require("./img/medipan-home.webp")} alt="Dio MEDIPAN logo-a u obliku kuće koja predstavlja uređenje doma."></img>
        </section>

        <div className="aboutHeader">
          {/* <img src={require("./img/enterijer.jpg")}></img> */}
          <h1>O nama</h1>
          {/* <img src={require("./img/decor.png")}></img> */}
          {/* <div className="decor"></div> */}
          
        </div>

        <div className="main-content">

        

          <p>
          Dobrodošli u MEDIPAN, mladu i dinamičnu firmu iz Crne Gore koja se bavi proizvodnjom vrhunskog pločastog namještaja po mjeri od iverice i medijapana. Iako smo tek započeli svoje poslovanje, brzo se razvijamo i težimo postati vodeći proizvođač modernog namještaja.

<br/><br/>Naša strast za dizajnom i kvalitetom odražava se u svakom komadu namještaja koji stvaramo. Posvećeni smo pružanju elegantnih i funkcionalnih rješenja koja će uljepšati vaš prostor.
</p>
            
          <img loading="eager" width={300} height={'auto'} title="MEDIPAN logo" src={require("./img/objekat.webp")} alt="Naša radionica spolja"></img>

          <p>
          Cilj nam je postati neosporni lider u industriji pločastog namještaja, uvodeći inovacije, prateći savremene trendove i isporučujući proizvode vrhunske izrade. S ponosom gradimo most između tradicije i modernog dizajna, stvarajući namještaj koji će zadovoljiti najzahtjevnije ukuse.

<br/><br/>Pratite nas u našem putovanju rasta i razvoja, jer MEDIPAN teži postati prva destinacija za kvalitetan i sofisticiran namještaj. 
<br/><br/>Hvala vam što ste dio naše priče!
          </p>
        </div>

        <Footer></Footer>
      </>
      
  )

}

export default About;