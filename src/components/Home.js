import React from "react";
import "./css/Home.css";
import { useEffect } from "react";
import Nav from "./Nav"
import Footer from "./Footer"
import { useNavigate } from "react-router-dom";

import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { Helmet } from 'react-helmet';

import KronospanSvg from './img/kronospan.svg';
import Kaindl from './img/kaindl.svg'
import Blum from './img/blum.svg'



function Home(){

  const navigate = useNavigate();

  useEffect(() => {

    
    window.scrollTo(0, 0);

  }, [])

 
    return(
      <>

        <Helmet>

        {/* <link rel="canonical" href="https://medipan.me/" /> */}

        <meta
          name="description"
          content="Otkrijte vrhunsku izradu kuhinja po mjeri prilagođenih vašem ukusu i prostoru. Nudimo vam besplatne 3D nacrte kako biste zaronili u budućnost vašeg doma.✅"
        />

        <meta property="og:title" content="Kuhinje po mjeri - MEDIPAN" />
        <meta property="og:url" content="https://medipan.me/" />
        <meta property="og:image" content="./img/medipan08.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Otkrijte vrhunsku izradu kuhinja po mjeri prilagođenih vašem ukusu i prostoru. Nudimo vam besplatne 3D nacrte kako biste zaronili u budućnost vašeg doma.✅" />
        <meta property="og:locale" content="sh_SH" />

          <title>Kuhinje po mjeri - MEDIPAN</title>



        </Helmet>



        <Nav/>

        <section className="background">
          <img loading="eager" width={880} height={875} title="MEDIPAN logo" src={require("./img/medipan-home.webp")} alt="Dio MEDIPAN logo-a u obliku kuće koja predstavlja uređenje doma."></img>
        </section>

        <section className="banner">
          <img loading="eager" width={100} height={100} title="MEDIPAN pozadina" src={require("./img/kuhinja_pozadina.webp")} alt="Kuhinja po mjeri koju smo mi radili postavljena kao pozadina."></img>
        </section>

        <section className="dark"></section>

        <section className="home">
          <div className="home-content">
            <h1>Kuhinje po mjeri</h1>
            <p>Izrađujemo cjelokupan namještaj od iverice i medijapana</p>  
          </div>

          <div className="socials">
            <a href="https://www.instagram.com/medipan.me/" aria-label="Profil na Instagram @medipan.me"><AiFillInstagram /></a>
            <a href="https://www.facebook.com/medipan.me" aria-label="Profil na Facebook @medipan.me"><FaFacebook /></a>
            <a href="https://www.tiktok.com/@medipan.me" aria-label="Profil na TikTok @medipan.me"><FaTiktok /></a>
          </div>
          
        </section>

        <section className="home-main">

          <div className="about">
              <h2>O Nama</h2>
              <div className="about-content">
                <img loading="lazy" title="Enterijer radionice MEDIPAN" width={300} height={300} src={require("./img/enterijer.webp")} alt="Enterijer naše radionice MEDIPAN gdje proizvodimo kuhinje po mjeri i ostali namještaj."></img>
                <div className="about-text">
                  <p>Dobrodošli u MEDIPAN, mladu i dinamičnu firmu koja se bavi proizvodnjom vrhunskog pločastog namještaja po mjeri.
                    Iako smo tek započeli svoje poslovanje, brzo se razvijamo i težimo postati vodeći proizvođač modernog namještaja...</p>

                  <button onClick={()=>{navigate('/o-nama')}} aria-label="Pročitaj više">Pročitaj Više</button>
                </div>
                
              </div>
          </div>

          <div className="collaborations">
            <div className="row1">
              <img loading="lazy" title="Egger" width={300} height={300} src={require("./img/egger.png")} alt="Egger - proizvođač pločastih materijala"></img>
              <img loading="lazy" title="Kronospan" width={300} height={300} src={KronospanSvg} alt="Kronospan - proizvođač pločastih materijala"></img>
            </div>
            <div className="row2">
            <img loading="lazy" title="Corpus" width={300} height={300} src={require("./img/corpus.png")} alt="Corpus - Softver za dizajniranje kuhinja i ostalog namještaja"></img>
            <img loading="lazy" title="Blum" width={300} height={300} src={Blum} alt="Blum - proizvođač okova za namještaj"></img>
            <img loading="lazy" title="Kaindl" width={300} height={300} src={Kaindl} alt="Kaindl - proizvođač pločastih materijala"></img>
            </div>
          </div>

          <div className="about">
              <h2>Kuhinje</h2>
              <div className="about-content">
                <img loading="lazy" title="Kuhinja po mjeri" width={300} height={300} src={require("./img/kuhinja_po_mjeri.webp")} alt="Jedna od naših kuhinja po mjeri odradjena od plocastih materijala, medijapana i univera, koja se savršeno uklapa u ovaj prostor."></img>
                <div className="about-text">
                  <p>Bez obzira da li birate klasičan minimalizam, elegantan savremeni dizajn ili nešto sasvim drugačije, naše kuhinje po mjeri su tu da zadovolje vaše jedinstvene ukuse i potrebe.
Pružamo vam priliku da stvorite kulinarsko okruženje u kojem će se savremena estetika susresti s praktičnošću, stvarajući kuhinju koja će postati epicentar vašeg doma.</p>

                  <button onClick={()=>{navigate('/kuhinje')}} aria-label="Ostale kuhinje po mjeri">Kuhinje</button>
                </div>
                
              </div>
          </div>

          
        </section>

        <Footer/>
      </>
      
  )

}

export default Home;