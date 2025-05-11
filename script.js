let getDropNav = document.querySelector(".drop-nav");
let getDropNavUl = document.querySelector(".drop-nav ul");
let getDropNavLinks = document.querySelector(".drop-nav a");

const dropNavOpen = function () {
        
        getDropNav.style.boxShadow = "5px 5px 15px grey";
        getDropNav.style.borderRadius = "10px";
        getDropNavUl.style.display = "flex";
        getDropNavLinks.style.display = "none";
   
}

const dropNavClose = function() {
    
        getDropNav.style.boxShadow = "none";
        getDropNav.style.borderRadius = "none";
        getDropNavUl.style.display = "none";
        getDropNavLinks.style.display = "flex";
}