"use strict";

var imageCounter = 1; 
showDiv(imageCounter);
function changeImage(m) {
    showDiv (imageCounter = imageCounter + m);
}
function showDiv(n) {
    var i;
    var imageArray = document.getElementsByClassName("mySlides");
    if (n > imageArray.lenght) {
        imageCounter = 1;
    }
    if (n < 1) {
        imageCounter = imageArray.lenght;
    }
    for (i = 0; i < imageArray.length; i++) {
        imageArray[i].style.display = "none";
    }
    imageArray[imageCounter - 1].style.display = "block";
}
