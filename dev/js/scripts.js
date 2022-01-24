


// import $ from "jquery";

// let $nav = $('nav[data-nav]');
// let isVisible = false;

// $(".nav-btns").on("click", function(){
//     // console.log("click");
//     if(isVisible === false){
//         $nav.show();
//         isVisible = true;
//     }
//     else{
//         $nav.hide();
//         isVisible = false;
//     }
// })

// import { gsap } from "gsap";
// import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
// gsap.registerPlugin(DrawSVGPlugin);



import { scrollAnimation, scrollAnimation2, scrollAnimationButton1 } from "./scrollAnimation"

import { burgerTL } from "./burgerAnimation"
import { displayWindowSize } from "./mobileResizing"
import { menuAnimation } from "./mobileMenu"



var burgerButton = document.querySelector("#burger-container");

let canISeeMenu = false;



burgerButton.addEventListener("click", function(){
    console.log("burger clicked");

   

    if(canISeeMenu === false){
        burgerTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
});

window.addEventListener('load', function(){
    // let regionElements = ["#region-1, #region-2, #region-3, #region-4, #region-5, #region-6,"];










    scrollAnimation("#region-1", "#region-1");

    scrollAnimation("#region-2", "#region-2");

    scrollAnimation("#region-3", "#region-3");

    scrollAnimation("#region-4", "#region-4");

    scrollAnimation("#region-5", "#region-5");

    scrollAnimation("#region-6", "#region-6");



    scrollAnimation2("#visit-1", "#visit-1");
    scrollAnimation2("#visit-2", "#visit-2");
    scrollAnimation2("#visit-3", "#visit-3");

    scrollAnimationButton1("#ds-button1", "#ds-button1");
    scrollAnimationButton1("#ds-button2", "#ds-button2");
    scrollAnimationButton1("#ds-button3", "#ds-button3");
    scrollAnimationButton1("#ds-button4", "#ds-button4");
    scrollAnimationButton1("#ds-button5", "#ds-button5");

});


window.addEventListener("resize", displayWindowSize);
window.addEventListener('load', displayWindowSize);