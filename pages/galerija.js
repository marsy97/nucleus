


function Galerija (){

    return(
<body>



<div class="bjelo"></div>



<div class="container">

    <h2 class="h2gal">Galerija</h2>

    <div class="red33">
        <img class="pop myImages" id="myImg" src="css/img/gal1.jpg" />
        <img class="pop myImages" id="myImg" src="css/img/gal2.jpg" />
        <img class="pop myImages" id="myImg" src="css/img/gal3.jpg" />



        <img class="pop myImages" id="myImg" src="css/img/gal4.jpg" />
        <img class="pop myImages" id="myImg" src="css/img/gal5.jpg" />
        <img class="pop myImages" id="myImg" src="css/img/gal6.jpg" />



        <img class="pop myImages" id="myImg" src="css/img/gal7.jpg" />
        <img class="pop myImages" id="myImg" src="css/img/gal8.jpg" />
        <img class="pop myImages" id="myImg" src="css/img/gal9.jpg" />
    </div>

    <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01"/>

    </div>


</div>

<div class="bjelo"></div>

<footer>

    <div class="container">
        <div class="footer">
            <a href="#top"><img src="img/c4y.png" />Strength & Conditioning</a>
        </div>
    </div>

</footer>



</body>
    );

}

export default Galerija;