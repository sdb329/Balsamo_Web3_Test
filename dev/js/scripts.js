


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
import { menuAnimation, searchJumpTL} from "./mobileMenu"
import { scrollPage } from "./pageScroll"
import { menuListners } from "./menu"




var burgerButton = document.querySelector("#burger-container");

let canISeeMenu = false;

let menuScrollable = true;

// let menuAnimationResize = false;



// if(menuAnimationResize === false){
//     openCloseMenu();
// }else{
//     burgerJumpTL.pause()

//     burgerTL.pause();
//     menuAnimation.pause();
// }


// if(document.documentElement.clientWidth <= 1024){
//     menuAnimationResize === false}
// else{
//     menuAnimationResize === true
// }



// window.addEventListener('load', menuAnimationResize);
// window.addEventListener('resize', menuAnimationResize);



// if(document.documentElement.clientWidth <= 1024){

//  canISeeMenu = false;}
//  else{
//     burgerJumpTL.pause()
//     burgerTL.pause();
//     menuAnimation.pause();
//  }


function openCloseMenu(){
    
    if(canISeeMenu === false){
        burgerTL.play();
        burgerJumpTL.play();

        menuAnimation.play();
        canISeeMenu = true;
        screenLocker();
    }else{
        burgerJumpTL.pause()

        burgerTL.reverse();
        menuAnimation.reverse();
        canISeeMenu = false;
        screenLocker();
    }
    

}

function screenLocker(){

    if(menuScrollable === true){

        window.onscroll = function(){window.scrollTo(0,0);};
        menuScrollable = false
    }
    else{
        window.onscroll = function(){};
        menuScrollable = true;
    }
       
    
}

burgerButton.addEventListener("click", openCloseMenu);

let navButtons = document.querySelectorAll(".nav-btns");
// console.log(navButtons);


let searchJumpTest = document.querySelectorAll(".search-msg")



for(const glass of searchJumpTest){
    glass.addEventListener("mouseenter", iconJump);
    glass.addEventListener("mouseleave", iconJumpOut);
}




// let iconJumpingSearch = false;


// function iconJump(){
//     if(iconJumpingSearch === false){
//         console.log("this is working mouse enter")
//         searchJumpTL.play();
//         iconJumpingSearch = true;
//     }else{
//         console.log("this is working mouse leave")
//         // searchStopJumpTL.play();
//         searchJumpTL.reverse();
//         iconJumpingSearch = false;
//     }

// }


function iconJump(){
        // console.log("this is working mouse enter")
        searchJumpTL.play();
 

}
function iconJumpOut(){
    // console.log("this is working mouse enter")
    searchJumpTL.reverse();
 

}


window.addEventListener("resize", function(){
    if(canISeeMenu === true){
        // console.log("fire");
        openCloseMenu();

    }
});



// function menuAnimationStop(){

//         for(let i = 0; i < navButtons.length; i++){
//             navButtons[i].addEventListener("click", checkScrolling);
//             navButtons[i].addEventListener("click", openCloseMenu);
        
//         }
   

// }



// if(document.documentElement.clientWidth <="1024px"){
//     menuAnimationStop();
// }else{
    
// }





// for(let i = 0; i < navButtons.length; i++){
//     navButtons[i].addEventListener("click", checkScrolling);
//     navButtons[i].addEventListener("click", openCloseMenu);

// }


for(const button of navButtons){
    button.addEventListener("click", checkScrolling);
    button.addEventListener("click", openCloseMenu);
}



function checkScrolling(e) {


    // console.log("working")
    const indexValue = [].indexOf.call(navButtons, e.target)
    if (indexValue != -1) {
        scrollPage(indexValue - 1);
    }
}




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

// const mediaQuery = window.matchMedia('(min-width: 1048px)')

function checkMediaQuery(){
    if (window.innerWidth > 1048) {
        // Then log this message to the console
        console.log('Media Query Matched!');
        openCloseMenu.pause();
        // menuListners.pause();
      }

}

// if (mediaQuery.matches) {
//     console.log("media query working")
//   }

  window.addEventListener('resize', checkMediaQuery);

window.addEventListener('load', menuAnimation);
window.addEventListener('resize', menuAnimation);

window.addEventListener('load', menuListners);