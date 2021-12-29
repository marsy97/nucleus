import Image from "next/image"



function Omeni(){

    

    return(
        <body>

    

    <div className="container">

        <div className="profilepic">
            <Image src="img/coach.jpg" width={300} height={300} alt=""/>
        </div>

        <div className="omeni">

            <div className="profil">




                <h1>O meni</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan tincidunt mauris sit amet molestie. Mauris congue orci eget velit tincidunt, at scelerisque lectus volutpat. Aliquam aliquam tortor urna, sit amet rhoncus nunc faucibus sit amet. Donec pharetra dignissim arcu, sed malesuada orci auctor nec. Morbi accumsan justo ipsum, quis iaculis nunc laoreet in. Curabitur viverra elementum ullamcorper. Pellentesque malesuada sit amet dolor sed sodales. Phasellus volutpat, ante nec pharetra lobortis, urna arcu suscipit purus, non dictum orci arcu ut dolor. Vestibulum et turpis et nisl pretium commodo. Quisque accumsan eros in aliquam vehicula. Mauris scelerisque, turpis et rutrum elementum, mi lacus commodo ante, et tempor sapien nisi a mauris. Maecenas sollicitudin leo nunc, eget congue purus tincidunt ac. Duis facilisis tellus odio, a imperdiet nibh rutrum nec. Cras dui nulla, porta id rutrum vitae, sollicitudin a nunc. Proin a euismod tortor, in fringilla ante.</p>

            </div>

            <div className="karijera">
                <h1>Karijera</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur accumsan tincidunt mauris sit amet molestie. Mauris congue orci eget velit tincidunt, at scelerisque lectus volutpat. Aliquam aliquam tortor urna, sit amet rhoncus nunc faucibus sit amet. Donec pharetra dignissim arcu, sed malesuada orci auctor nec. Morbi accumsan justo ipsum, quis iaculis nunc laoreet in. Curabitur viverra elementum ullamcorper.</p>

            </div>

        </div>

        <h2>Moje aktivnosti</h2>

        <div className="slikeomeni">
            <div className="slika">
                <Image src="img/zastoja1.jpg" width={300} height={300} alt="" />
                <p>Trening s klijentom</p>
            </div>


            <div className="slika">
                <Image src="img/zastoja2.jpg"width={300} height={300} alt="" />
                <p>Trening na nogometnom terenu</p>
            </div>



            <div className="slika">
                <Image src="img/zastoja3.jpg" width={300} height={300} alt=""/>
                <p>Podučavanje djece preškolske dobi</p>
            </div>

        </div>

        <h2>Moji certifikati</h2>

        <div className="certifikati">

            <Image src="img/certifikat1.jpg" width={300} height={300} alt="" />
            <Image src="img/certifikat2.jpg" width={300} height={300} alt=""/>
        </div>

        </div>

        
        
</body>
    );
}

export default Omeni;