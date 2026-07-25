/* =====================================
        MOBILE MENU
===================================== */


const menuIcon = document.querySelector(".menu-icon");

const navLinks = document.querySelector(".nav-links");


menuIcon.addEventListener("click",()=>{


    navLinks.classList.toggle("active");


});







/* =====================================
        TYPING EFFECT
===================================== */


const textElement = document.getElementById("typing");


const texts = [

    "Computer Science & Engineering Student",

    "Aspiring Software Engineer",

    "Problem Solver",

    "Competitive Programmer",

    "Technology Enthusiast"

];


let textIndex = 0;

let charIndex = 0;

let deleting = false;



function typingEffect(){


    let currentText = texts[textIndex];


    if(!deleting){


        textElement.textContent =
        currentText.substring(0,charIndex++);



        if(charIndex > currentText.length){


            deleting = true;


            setTimeout(typingEffect,1500);


            return;

        }


    }


    else{


        textElement.textContent =
        currentText.substring(0,charIndex--);



        if(charIndex < 0){


            deleting=false;


            textIndex++;


            if(textIndex >= texts.length){

                textIndex=0;

            }


        }


    }



    setTimeout(typingEffect,100);



}



typingEffect();








/* =====================================
        NAVBAR MOBILE CONTROL
===================================== */


const links = document.querySelectorAll(".nav-links a");


links.forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


    });


});








/* =====================================
        SCROLL REVEAL ANIMATION
===================================== */


const sections = document.querySelectorAll("section");



window.addEventListener("scroll",()=>{


    sections.forEach(section=>{


        let position =
        section.getBoundingClientRect().top;



        let screenHeight =
        window.innerHeight;



        if(position < screenHeight - 100){


            section.style.opacity="1";

            section.style.transform="translateY(0)";


        }


    });


});








/* =====================================
        INITIAL SECTION STYLE
===================================== */


sections.forEach(section=>{


    section.style.opacity="0";

    section.style.transform="translateY(50px)";

    section.style.transition="0.8s";


});



window.addEventListener("load",()=>{


    document.querySelector("#home").style.opacity="1";

    document.querySelector("#home").style.transform="translateY(0)";


});
