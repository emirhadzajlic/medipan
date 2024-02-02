import React from "react";
// import { useEffect, useState } from "react";
import "./css/Footer.css"
import { AiFillInstagram } from "react-icons/ai";



function Footer(){

 
    return(

        <footer>
            <p>©2024 MEDIPAN <a href="https://www.instagram.com/medipan.me/" aria-label="Profil na Instagram @medipan.me" className="insta"><AiFillInstagram /></a></p>
        </footer>
      
  )

}

export default Footer;