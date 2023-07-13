function black() {
    document.querySelector(".blackDiv").style.display = "block";
    document.querySelector(".whiteDiv").style.display = "none";
    document.querySelector(".purpleDiv").style.display = "none";
    document.querySelector(".redDiv").style.display = "none";
    document.querySelector(".mixDiv").style.display = "none";
}
function white() {
    document.querySelector(".whiteDiv").style.display = "block";
    document.querySelector(".blackDiv").style.display = "none";
    document.querySelector(".purpleDiv").style.display = "none";
    document.querySelector(".redDiv").style.display = "none";
    document.querySelector(".mixDiv").style.display = "none";
}
function purple() {
    document.querySelector(".purpleDiv").style.display = "block";
    document.querySelector(".whiteDiv").style.display = "none";
    document.querySelector(".blackDiv").style.display = "none";
    document.querySelector(".redDiv").style.display = "none";
    document.querySelector(".mixDiv").style.display = "none";
}
function red() {
    document.querySelector(".redDiv").style.display = "block";
    document.querySelector(".whiteDiv").style.display = "none";
    document.querySelector(".blackDiv").style.display = "none";
    document.querySelector(".purpleDiv").style.display = "none";
    document.querySelector(".mixDiv").style.display = "none";
}
function mix() {
    document.querySelector(".mixDiv").style.display = "block";
    document.querySelector(".whiteDiv").style.display = "none";
    document.querySelector(".blackDiv").style.display = "none";
    document.querySelector(".purpleDiv").style.display = "none";
    document.querySelector(".redDiv").style.display = "none";
}


   //PRICE PART
   function boxOne() {
    document.getElementById("priceOne").style.display = "block";
    document.getElementById("priceTwo").style.display = "none";
    document.getElementById("priceThree").style.display = "none";
   }


   function boxTwo() {
    document.getElementById("priceTwo").style.display = "block";
    document.getElementById("priceOne").style.display = "none";
    document.getElementById("priceThree").style.display = "none";


   }


   function boxThree() {
    document.getElementById("priceThree").style.display = "block";
    document.getElementById("priceOne").style.display = "none";
    document.getElementById("priceTwo").style.display = "none";

   }