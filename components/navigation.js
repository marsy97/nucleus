import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Link from 'next/link';
import Image from "next/image";
import styles from "./nav.module.scss";
import {useState} from "react";


function Navigation() {

  const[sidebar,setSidebar]=useState(false);

  const showSidebar=()=>setSidebar(!sidebar);

  
  async function hide(){
    if(sidebar){
      document.getElementById("toggler").classList.remove("collapsed");
      document.getElementById("responsive-navbar-nav").classList.add("show");
      
    }else{
      document.getElementById("toggler").classList.add("collapsed");
      document.getElementById("responsive-navbar-nav").classList.remove("show");
    }

    
  }

  

    return(
        <Navbar  collapseOnSelect fixed="top" expand="lg" className={styles.navMain} variant="dark" >
          <Container >
            <Navbar.Brand>
              <Link href="/" className={styles.logo}>
                <a><Image src="/nucleus.svg" width={50} height={50} /></a>
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle id="toggler" bsPrefix="toggler" className={styles.togglerWrap}/>
            <Navbar.Collapse className={styles.fgrow} id="responsive-navbar-nav">
              
              <Nav>

               
                  <Link href="/" onClick={showSidebar,hide()}>
                    <a className={styles.link}>POČETNA</a>
                  </Link>
                
                    <Link href="/kontakt">
                      <a className={styles.link}>KONTAKT</a>
                    </Link>
                  

                  <Link eventKey={2} href="/cjenik">
                    <a className={styles.link}>CJENIK</a>
                  </Link>
                

                  <Link href="/Blog">
                    <a className={styles.link}>BLOG</a>
                    </Link>
               

                  <Link href="/onama">
                    <a className={styles.link}>O NAMA</a>
                  </Link>
                

                  <Link href="/galerija">
                    <a className={styles.link}>GALERIJA</a>
                  </Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    );
}

export default Navigation;