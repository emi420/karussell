Karussell, another jQuery carousel

Karussell is licensed under the terms of either the MIT License or the GNU General Public License (GPL) Version 3.

(c) 2012 Emilio Mariscal

Usage:

<div id="carousel-wrapper" class="carousel-wrapper">    
  <a id="carousel-prev" class="carousel-prev" href="#prev">Prev</a>
  <a id="carousel-next" class="carousel-next" href="#next">Next</a> 
  <ul id="carousel" class="carousel">
      <li><img src="img/photo1.jpg" /></li>
      <li><img src="img/photo2.jpg" /></li>
      <li><img src="img/photo3.jpg" /></li> 
  </ul>
</div>

$(document).ready(function () {
    $.karussell({
        id: "carousel",
        wrapper: "carousel-wrapper",
        prev: "carousel-prev",
        next: "carousel-next"
    });
})

