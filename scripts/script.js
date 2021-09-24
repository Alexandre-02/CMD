// JavaScript Document

var hamburgerMenu = document.querySelector("header nav ul li div ul");

var menuButton = document.querySelector(".hamburger-icon");

var closeButton = document.querySelector(".icon-close");


// Click on menu Button

menuButton.addEventListener("click", addHamburgerMenu);

function addHamburgerMenu(){

    hamburgerMenu.classList.add("visible");

}

// Click on close button

closeButton.addEventListener("click", closeHamburgerMenu);

function closeHamburgerMenu(){
    hamburgerMenu.classList.remove("visible");
}