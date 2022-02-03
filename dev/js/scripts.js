


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

import { burgerTL, burgerJumpTL } from "./burgerAnimation"
import { displayWindowSize } from "./mobileResizing"
import { menuAnimation} from "./mobileMenu"
import { scrollPage } from "./pageScroll"




var burgerButton = document.querySelector("#burger-container");

let canISeeMenu = false;



function openCloseMenu(){
    
    if(canISeeMenu === false){
        burgerTL.play();
        burgerJumpTL.play();
        menuAnimation.play();
        canISeeMenu = true;
    }else{
        burgerJumpTL.pause()
        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
    }
    

}

burgerButton.addEventListener("click", openCloseMenu);

let navButtons = document.querySelectorAll(".nav-btns");
console.log(navButtons);



for(let i = 0; i < navButtons.length; i++){
    navButtons[i].addEventListener("click", checkScrolling);
    navButtons[i].addEventListener("click", openCloseMenu);

}


function checkScrolling(e) {


    console.log("working")
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue - 1);
    }
}






// document.querySelector('#search-icon').addEventListener('mouseenter', entering);
// document.querySelector('#search-icon').addEventListener('mouseleave', leaving);
// const searchJumpTL = new gsap.timeline();


// function entering(ev){
    
//     searchJumpTL.to("#search-icon", {y:"-12", yoyo:true});
// }

// function leaving(ev){

//     searchJumpTL.to("#search-icon", {y:"0", yoyo:false});
// }


// document.queryselector('#search-icon').addEventListener('mouseenter', function(ev){

//     searchJumpTL.to("#search-icon", {y:"-12", yoyo:true});
// });

// document.queryselector('#search-icon').addEventListener('mouseleave', function(ev){

//     searchJumpTL.to("#search-icon", {y:"0", yoyo:false});
// });



// burgerButton.addEventListener("click", function(){
//     console.log("burger clicked");

   

//     if(canISeeMenu === false){
//         burgerTL.play();
//         menuAnimation.play();
//         canISeeMenu = true;
//     }else{
//         burgerTL.reverse();
//         menuAnimation.reverse();
//         canISeeMenu = false;
//     }
// });

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



window.addEventListener('load', displayWindowSize);
window.addEventListener('resize', displayWindowSize);