import React from "react";
import "./css/Nav.css";
import { useEffect, useState } from 'react';
import { FaPhoneAlt, FaBars, FaTimes} from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';
import Medipan from './img/medipan.svg'

import { isMobile } from 'react-device-detect';


function Nav(){


    const [position, setPosition] = useState('-100%');
    const [pom, setPom] = useState(false)

    const location = useLocation();


    const [isSticky, setIsSticky] = useState(false);

    const handleHomeClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    const changePosition = () => {

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

    //   let headerClassName = isSticky ? "sticky" : "";

      let headerClassName = (isSticky || location.pathname !== '/') ? "sticky" : "";

    //   if (location.pathname !== '/') {
        // headerClassName = "sticky";
    //   }

      

    return(
            <nav id="header" className={headerClassName} itemscope itemtype="http://schema.org/SiteNavigationElement">


                <Link to="/" onClick={handleHomeClick} className="logo" itemprop="url"><img loading="eager" title="MEDIPAN" width={300} height={70} src={Medipan} alt="MEDIPAN Logo"></img></Link>


                <ul style={{ left: position }}>
                    <li><Link to="/" onClick={handleHomeClick} itemprop="url">Naslovna</Link></li>
                    <li><Link to="/kuhinje" itemprop="url">Kuhinje</Link></li>
                    <li><Link to="/o-nama"> itemprop="url"O Nama</Link></li>
                    <li><Link to="/kontakt" itemprop="url">Kontakt</Link></li>
                    <li><Link to="tel:+38268248640" className="number" aria-label="Poziv na broj +382 68 248 640" itemprop="telephone"><FaPhoneAlt /> 068 248 640</Link></li>

                    <li onClick={changePosition} className="xButton"><FaTimes /></li>

                </ul>
                
                <div className="navScreen">
                    <a href="tel:+38268248640" className="phoneButton" aria-label="Poziv na broj +382 68 248 640" itemprop="telephone"><FaPhoneAlt/></a>
                    <span onClick={changePosition} className="hamButton"><FaBars/></span>
                </div>
                
            </nav>
    )

}

export default Nav;