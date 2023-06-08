var slideIndex = 1;
 showSlides(slideIndex);

 function plusSlides(n) {
 showSlides(slideIndex += n);
 }

 function currentSlide(n) {
 showSlides(slideIndex = n); /*posicion*/
 }

 function showSlides(n) {/*carrusel*/
 var i;
 var slides = document.getElementsByClassName("mySlides"); /*clase del div*/
 var dots = document.getElementsByClassName("dot"); /*sacar el elemento*/
 if (n > slides.length) {slideIndex = 1}    
 if (n < 1) {slideIndex = slides.length}
 for (i = 0; i < slides.length; i++) { 
     slides[i].style.display = "none";  
 }
 for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex-1].style.display = "block";  
 dots[slideIndex-1].className += " active";
 }
function buscador() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("buscar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("listaBuscador");
    li = ul.getElementsByTagName("li");
    document.querySelector(".content-Buscador").style.visibility = "visible";
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function llenarBuscar(e) {
switch( e.id ){
     case "1":
                      // entra aqui si click en boton  cursos........  
      console.log(e.name);
      document.querySelector("#buscar").value=e.name;               
                      break;
     case "2":
      document.querySelector("#buscar").value=e.name; // entra aqui si talleres........    
                      break;
     case "3":
      document.querySelector("#buscar").value=e.name;  // entra aqui asi sucesivamente........    
                      break;
     case "4":
      document.querySelector("#buscar").value=e.name;              
                      break;
     case "5":
      document.querySelector("#buscar").value=e.name;               
                      break;
     case "6":
                      // entra aqui si tijeras........    
      document.querySelector("#buscar").value=e.name;             break;                 
    }
  document.querySelector(".content-Buscador").style.visibility = "hidden";
}

$(document).on("click",function(e) {
                    
         var container = $("#buscador");
                            
            if (!container.is(e.target) && container.has(e.target).length === 0) {     
               document.querySelector(".content-Buscador").style.visibility = "hidden";          
            }
});
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
