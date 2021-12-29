
import Link from 'next/link';
import {Zoom, Fade} from 'react-reveal';
import Testimonials from "../components/testimonials";



export default function Home() {
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
                <h3>ZDRAVLJE</h3>
                <p>Svaka fizička aktivnost je dobra za kardiovaskularni sustav,pospješuje lučenje dobrog kolesterola i smanjuje nezdrave trigliceride.</p>
            </div>
           
            <div className="col boxshadow">
                <h3>RASPOLOŽENJE</h3>
                <p>Brojne kemikalije u mozgu se stimuliraju vježbom,što dovodi do osjećaja sreće,opuštenosti i smanjene anksioznosti i stresa.</p>
            </div>

            <div className="col boxshadow">
                <h3>ENERGIJA</h3>
                <p>Redovita tjelesna aktivnost može poboljšati snagu i izdržljivost opskrbom tkiva kisikom i hranjivim tvarima što pomaže srcu da radi učinkovitije i daje nam više energije.</p>
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

        <form className="form">

            <div className="input_field">
                <label>Ime i Prezime</label>
                <input className="input" />
                              
                
            </div>

            <div className="input_field">
                <label>Telefon</label>
                <input type="tel"  className="input" />
                
            </div>

            <div className="input_field">
                <label>Email</label>
                <input type="email"   className="input" />
                
            </div>

            <div className="input_field">
                <label>Poruka</label>
                <textarea name="poruka"  className="textarea"></textarea>
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
