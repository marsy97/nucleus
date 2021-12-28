import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Link from 'next/link';
import Image from "next/image";
import styles from "./nav.module.scss";
import {useState} from "react";


function Navigation() {

  const[state,setState]=useState(true);

    return(
        <Navbar  collapseOnSelect fixed="top" expand="lg" className={styles.navMain} variant="dark" >
          <Container >
            <Navbar.Brand>
              <Link href="/" className={styles.logo}>
                <a><Image src="/nucleus.svg" width={50} height={50} /></a>
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle bsPrefix="toggler" className={styles.togglerWrap}/>
            <Navbar.Collapse className={styles.fgrow} id="responsive-navbar-nav">
              
              <Nav>

               
                  <Link href="/" onClick={() => setState(false)}>
                    <a className={styles.link}>POČETNA</a>
                  </Link>
                
                    <Link eventKey={2} href="/kontakt">
                      <a className={styles.link}>KONTAKT</a>
                    </Link>
                  

                  <Link eventKey={2} href="/cjenik">
                    <a className={styles.link}>CJENIK</a>
                  </Link>
                

                  <Link href="/klijenti">
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