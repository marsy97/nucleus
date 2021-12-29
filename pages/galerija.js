import Image from "next/image"


function Galerija (){

    return(
<body>



<div className="bjelo"></div>



<div className="container">

    <h2 className="h2gal">Galerija</h2>

    <div className="red33">
        <Image className="pop myImages" alt="" id="myImg" width={300} height={300}src="css/img/gal1.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300} src="css/img/gal2.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="css/img/gal3.jpg" />



        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="css/img/gal4.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="css/img/gal5.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="css/img/gal6.jpg" />



        <Image className="pop myImages" alt=""id="myImg" width={300} height={300} src="css/img/gal7.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="css/img/gal8.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="css/img/gal9.jpg" />
    </div>

    <div id="myModal" className="modal">
        <span className="close">&times;</span>
        <Image className="modal-content" alt=""width={300} height={300} id="img01"/>

    </div>


</div>

<div className="bjelo"></div>





</body>
    );

}

export default Galerija;