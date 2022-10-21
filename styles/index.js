
import Link from 'next/link';
import {Zoom, Fade} from 'react-reveal';
import Testimonials from "../components/testimonials";
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';





export default function Home() {


    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_96eh3us', 'template_ol3zfmr', form.current, 'user_i2loudRSXhAnmh36cSkNG')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
    
  return (
      <>
      
    <body className="home">

            <header id="top">
                

                <div>

                    <div className="text">
                    <Fade left >
                        
                       <h1>O nama</h1>
                        <p>Nucleus Sport Performance centar, novotvoreni je fitness centar za razvoj funkcionalnih i motoričkih sposobnosti u Zagrebu za sportaše i rekreativce. Naš rad se bazira na individualnim i poluindividualnim treninzima kako bismo se maksimalno mogli posvetiti našim klijentima. Kliknite na „pošalji upit“, javite se s povjerenjem te rezervirajte termin za online ili sastanak uživo. </p>

                        <Link href="/kontakt"><a className="rounded-pill">Pošalji upit!</a></Link>
                        </Fade>
                    </div>

                </div>
            </header>


<Fade left>
    <h2 className="bjelo">
        Zašto početi trenirati?
    </h2>

<div className="container">
    <article className="zasto">

        <div className="row">
          
            <div className="col boxshadow">
                <h3>ONLINE TRENING SPORTASA I REKREATIVACA</h3>
                <p>Online individualizirani treninzi, programirani su isključivo personalizirano, ovisno o mogućnostima, ciljevima i razini spremnosti naših klijenata. U svakom treningu dobit ćete kompletno objašnjenje svih vježbi, video vježbi te sve sto vam je potrebno. Isto tako vaš trener će vam biti maksimalno na raspolaganju za bilo kakva pitanja koja cete imati. </p>
            </div>
           
            <div className="col boxshadow">
                <h3>INDIVIDUALNI I POLUINDIVIDUALNI TRENINZI REKREATIVACA
</h3>
                <p>Nas primarni cilj u treningu rekreativaca je poboljšanje funkcionalnih sposobnosti zajedno sa vašim ciljevima koje želite postići u određenom periodu. Planiranje i programiranje trenažnih procesa kako biste sve svoje aktivnosti u svom svakodnevnom životu odradili lakse i bez bolova. Današnja svakodnevnica je nažalost sjedilački nacin života, koji za sobom nosi dosta posljedica, kratkoročnih i dugoročnih. Ako želite to promjeniti, mi smo pravi izbor za vas. </p>
            </div>

            <div className="col boxshadow">
                <h3>INDIVIDUALNI I POLUINDIVIDUALNI TRENINZI SPORTAŠA
</h3>
                <p>U današnje doba gdje se granice zahtjeva sporta probijaju iz sezone u sezonu, gotovo je nemoguće uspjeti bez kvalitetnog kondicijskog individualnog rada. Mi vam nudimo kompletan kondicijski trening, testiranje, praćenje napretka, programiranje I planiranje treninga koji će vam pomoći da poboljšate svoj cjelokupni sportski performans I smanjite rizik od ozljeda.</p>
            </div>
            
        </div>

    </article>
    </div>
    </Fade>
   


    <div className="zastoimg"></div>

    <Fade left>
     <h2 className="bjelo">Neki od naših zadovoljnih korisnika</h2>

    <article className="container users">

        <Testimonials/>
    </article>
    </Fade>


    <div className="formimg"></div>
 <Zoom>
    <div className="formwrapper">
        <div className="title">Prijavi se</div>

        <form ref={form} onSubmit={sendEmail} className="form">

            <div className="input_field">
                <label>Ime i Prezime</label>
                <input className="input" name="user_name"/>
                              
                
            </div>

            <div className="input_field">
                <label>Telefon</label>
                <input type="tel"  className="input" />
                
            </div>

            <div className="input_field">
                <label>Email</label>
                <input type="email" name="user_email" className="input" />
                </div>
            

            <div className="input_field">
                <label>Poruka</label>
                <textarea name="message" className="textarea"></textarea>
            </div>

            <div className="input_field">

                <input type="submit" className="btn rounded-pill" value="Prijava" />
            </div>

        </form>
    </div>
    </Zoom>
   

   
  
    
</body>
</>
  )
}
