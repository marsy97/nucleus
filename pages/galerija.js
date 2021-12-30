import Image from "next/image"


function Galerija (){

    return(
<body>



<div className="bjelo"></div>



<div className="container">

    <h2 className="h2gal">Galerija</h2>

    <div className="red33">
        <Image className="myImages" alt="" id="myImg" width={300} height={300}src="/gal1.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300} src="/gal2.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="/gal3.jpg" />



        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="/gal4.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="/gal5.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="/gal6.jpg" />



        <Image className="pop myImages" alt=""id="myImg" width={300} height={300} src="/gal7.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="/gal8.jpg" />
        <Image className="pop myImages" alt=""id="myImg" width={300} height={300}src="/gal9.jpg" />
    </div>



</div>

<div className="bjelo"></div>





</body>
    );

}

export default Galerija;