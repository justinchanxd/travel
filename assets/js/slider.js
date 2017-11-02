var slideIndex = 1;
var slideImage = document.getElementsByClassName("mySlides");
var btnImage = document.getElementsByClassName("sliderBtn");
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  
  if (n > slideImage.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slideImage.length}
  //document.getElementById("demo").innerHTML = "length: "+ slideImage.length+ " index: " + slideIndex;

  for (i = 0; i < slideImage.length; i++) {
     slideImage[i].style.display = "none"; 
     btnImage[i].style.background = "#CCC";
  }
  slideImage[slideIndex-1].style.display = "block";
  btnImage[slideIndex-1].style.background = "#FFF";
}

function showSpec(n){
var slideImage = document.getElementsByClassName("mySlides");
var btnImage = document.getElementsByClassName("sliderBtn");
slideImage[slideIndex-1].style.display = "none";  
btnImage[slideIndex-1].style.background="#CCC";
slideImage[n-1].style.display = "block";
btnImage[n-1].style.background="#FFF";
slideIndex = n;

}

