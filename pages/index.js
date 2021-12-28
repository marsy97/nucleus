
import Link from 'next/link';
import {Zoom, Fade} from 'react-reveal';



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
     <h2 className="bjelo">Usluge koje nudimo</h2>

    <article className="container zastoja">


        <div className="row ">
            <div style={{backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/strengthandconditioning.appspot.com/o/Darac%2Fbox1.jpg?alt=media&token=643f2e96-97d1-45ed-bf3f-902c5cc45b13)"}} className="col box">

                <h3>Duge godine treniranja</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

                <a href="omeni.html" className="rounded-pill">O meni</a>

            </div>

            <div style={{
                backgroundImage: "url(https://firebasestorage.googleapis.com/v0/b/strengthandconditioning.appspot.com/o/Darac%2Fbox2.jpg?alt=media&token=88ae236e-10fa-4f02-9cfa-c419dec66a27)",
                backgroundImage: "linearGradient(rgba(0,0,0,0.5),rgba(0,0,0,0.2))"}} 
                className="col box">

                <h3>Iskustvo s brojnim klijentima</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

                <a href="klijenti.html" className="rounded-pill">Klijenti</a>
            </div>

            <div style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/strengthandconditioning.appspot.com/o/Darac%2Fbox3.jpg?alt=media&token=aeeee29b-7572-4a46-8798-2c53fca66295")` }} className="col box">

                <h3>Povoljni treninzi</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed doLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>

                <a href="cjenik.html" className="rounded-pill">Cjenik</a>
            </div>

        </div>

    </article>
    </Fade>

    <div className="bgcolor">

        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner" style={{width:"100%",height:"10rem"}}>
                <div className="carousel-item active">
                    <img src="./img/zastoja1.jpg" className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={"./img/zastoja2.jpg"} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>

                <div className="carousel-item"  style={{width:"30%"}}>
                    <img src="/zastoja3.jpg" style={{width:"100%",height:"100%",objectFit:"fit"}} className="d-block w-100" alt="..."/>
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>

        </div>


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
