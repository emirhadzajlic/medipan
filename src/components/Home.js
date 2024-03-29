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

        <link rel="canonical" href="https://www.medipan.me/" />

        <meta
          name="description"
          content="Vrhunska izrada kuhinja i ostalog namještaja po mjeri, u Crnoj Gori. Nudimo vam i besplatne 3D nacrte kuhinja po mjeri. Ono što vi zamislite mi ostvarujemo."
        />

        <meta property="og:title" content="Kuhinje po mjeri | Izrada pločastog namještaja" />
        <meta property="og:url" content="https://www.medipan.me/" />
        <meta property="og:image" content="./img/medipan.png" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Vrhunska izrada kuhinja i ostalog namještaja po mjeri, u Crnoj Gori. Nudimo vam i besplatne 3D nacrte kuhinja po mjeri. Ono što vi zamislite mi ostvarujemo." />
        <meta property="og:locale" content="sr-ME" />


        

          <title>Kuhinje po mjeri | Izrada pločastog namještaja</title>


        </Helmet>



        <Nav/>

        <div className="background">
          <img loading="eager" width={880} height={875} title="MEDIPAN logo" src={require("./img/medipan-home.webp")} alt="Dio MEDIPAN logo-a u obliku kuće koja predstavlja uređenje doma."></img>
        </div>

        <div className="banner">
          <img loading="eager" width={1600} height={896} title="MEDIPAN pozadina" src={require("./img/kuhinja_pozadina.webp")} alt="Kuhinja po mjeri koju smo mi radili postavljena kao pozadina."></img>
        </div>

        <div className="dark"></div>

        <header className="home">
          <div className="home-content">
            <h1>Kuhinje po mjeri</h1>
            <p>Izrađujemo cjelokupan namještaj od iverice i medijapana</p>  
          </div>

          <div className="socials">
            <a href="https://www.instagram.com/medipan.me/" aria-label="Profil na Instagram @medipan.me"><AiFillInstagram /></a>
            <a href="https://www.facebook.com/medipan.me" aria-label="Profil na Facebook @medipan.me"><FaFacebook /></a>
            <a href="https://www.tiktok.com/@medipan.me" aria-label="Profil na TikTok @medipan.me"><FaTiktok /></a>
          </div>
          
        </header>

        <main className="home-main">

          <section className="about" itemscope itemtype="https://schema.org/Organization">
              <h2>O Nama</h2>
              <div className="about-content">
                <img loading="lazy" title="Enterijer radionice MEDIPAN" width={500} height={375} src={require("./img/enterijer.webp")} alt="Enterijer naše radionice MEDIPAN gdje proizvodimo kuhinje po mjeri i ostali namještaj." itemprop="image"></img>
                <div className="about-text">
                  <p itemprop="description">Dobrodošli u MEDIPAN, mladu i dinamičnu firmu iz Crne Gore koja se bavi proizvodnjom vrhunskog pločastog namještaja po mjeri.
                    Iako smo tek započeli svoje poslovanje, brzo se razvijamo i težimo postati vodeći proizvođač modernog namještaja...</p>

                  <button onClick={()=>{navigate('/o-nama')}} aria-label="Pročitaj više">Pročitaj Više</button>
                </div>
                
              </div>
          </section>

          <section className="collaborations" itemscope itemtype="https://schema.org/Organization">
            <div className="row1">
              <img loading="lazy" title="Egger" width={700} height={394} src={require("./img/egger.png")} alt="Egger - proizvođač pločastih materijala" itemprop="logo"></img>
              <img loading="lazy" title="Kronospan" width={300} height={300} src={KronospanSvg} alt="Kronospan - proizvođač pločastih materijala" itemprop="logo"></img>
            </div>
            <div className="row2">
            <img loading="lazy" title="Corpus" width={349} height={420} src={require("./img/corpus.png")} alt="Corpus - Softver za dizajniranje kuhinja i ostalog namještaja" itemprop="logo"></img>
            <img loading="lazy" title="Blum" width={300} height={300} src={Blum} alt="Blum - proizvođač okova za namještaj" itemprop="logo"></img>
            <img loading="lazy" title="Kaindl" width={300} height={300} src={Kaindl} alt="Kaindl - proizvođač pločastih materijala" itemprop="logo"></img>
            </div>
          </section>

          <section className="about" itemscope itemtype="https://schema.org/Product">
              <h2>Kuhinje</h2>
              <div className="about-content">
                <img loading="lazy" title="Kuhinja po mjeri" width={768} height={760} src={require("./img/kuhinja_po_mjeri.webp")} alt="Jedna od naših kuhinja po mjeri odradjena od plocastih materijala, medijapana i univera, koja se savršeno uklapa u ovaj prostor." itemprop="image"></img>
                <div className="about-text">
                  <p itemprop="description">Bez obzira da li birate klasičan minimalizam, elegantan savremeni dizajn ili nešto sasvim drugačije, naše kuhinje po mjeri su tu da zadovolje vaše jedinstvene ukuse i potrebe.
Pružamo vam priliku da stvorite kulinarsko okruženje u kojem će se savremena estetika susresti s praktičnošću, stvarajući kuhinju koja će postati epicentar vašeg doma.</p>

                  <button onClick={()=>{navigate('/kuhinje')}} aria-label="Ostale kuhinje po mjeri">Kuhinje</button>
                </div>
                
              </div>
          </section>

          
        </main>

        <Footer/>
      </>
      
  )

}

export default Home;