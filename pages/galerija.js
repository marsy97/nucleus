import Image from "next/image"


function Galerija (){

    return(
<body>



<div className="bjelo"></div>



<div className="container trening">
<div className="left">
    <h2 className="h2gal">Online trening</h2>

    <div className="red33">
        <p>Biti u formi danas je, nažalost, za veliki dio ljudske populacije veliki izazov I luksuz. Način života uvelike se mjenja iz godina u godine. Svjedoci smo učestalog sjedilačkog načina života, loših prehrambenih navika, konstantnih bolova, a sve to dovodi do dugoročnih posljedica na nas I na naše zdravlje. 
Ako želiš biti fit I zdrav, želiš dobiti detaljan plan I program treninga koji će biti programiran isključivo u skladu sa tvojim ciljevima I mogućnostima, ispuni prijavu I prijavi se za ONLINE TRENING</p></div>

<div className="lista">
<h3>Što dobivate online treningom?</h3>
<ul>
    <li>Analizu I definiranje vaših ciljeva</li>
    <li>Praćenje vašeg napretka</li>
    <li>Personalizirani program</li>
    <li>Video svake vježbe</li>
    <li>Program se nalazi unutar aplikacije sa kompletnim objašnjenjem</li>
    <li>Smjernice za prehranu I prehrambene navike </li>
    <li>Komunikacija sa trenerom</li>
    <li>Individualizirani pristup</li>
</ul>
        
    </div>
    </div>

    <div className="formwrapper">
        <div className="title">Prijavi se</div>

        <form className="form">

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

</div>

<div className="bjelo"></div>





</body>
    );

}

export default Galerija;