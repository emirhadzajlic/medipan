import React from "react";
import "./css/Nav.css";
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import Medipan from './img/medipan08.svg'

import { isMobile } from 'react-device-detect';


function Nav(){


    const [position, setPosition] = useState('-100%');
    const [pom, setPom] = useState(false)

    const location = useLocation();


    const [isSticky, setIsSticky] = useState(false);

    function handleHomeClick(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    function changePosition(){

        // setClicked(clicked++)
   
        setPom(!pom)
        if(pom==false){
            setPosition('0%')
        } else {
            setPosition('-100%')
        }
    
    }

    useEffect(() => {

        if(!isMobile){
            setPosition('0%')
        } else {
            setPosition('-100%')
        }

        // setPosition('0%')

        const handleScroll = () => {
            const header = document.querySelector("header");
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []); 

      let headerClassName = isSticky ? "sticky" : "";

      if (location.pathname !== '/' && location.pathname !== '/naslovna') {
        headerClassName = "sticky";
      }

      

    return(
            <header id="header" className={headerClassName}>


                <Link to="/" onClick={handleHomeClick} className="logo"><img loading="eager" title="MEDIPAN" width={300} height={70} src={Medipan} alt="MEDIPAN Logo"></img></Link>


                <ul style={{ left: position }}>
                    <li><Link to="/" onClick={handleHomeClick}>Naslovna</Link></li>
                    <li><Link to="/kuhinje">Kuhinje</Link></li>
                    <li><Link to="/o-nama">O Nama</Link></li>
                    <li><Link to="/kontakt">Kontakt</Link></li>
                    <li><Link to="tel:+38268248640" className="number" aria-label="Poziv na broj +382 68 248 640"><FaPhoneAlt /> 068 248 640</Link></li>

                    <li onClick={changePosition} className="xButton"><FaTimes /></li>

                </ul>
                
                <div className="navScreen">
                    <a href="tel:+38268248640" className="phoneButton" aria-label="Poziv na broj +382 68 248 640"><FaPhoneAlt/></a>
                    <span onClick={changePosition} className="hamButton"><FaBars/></span>
                </div>
                
            </header>
    )

}

export default Nav;