import { gsap } from "gsap";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.registerPlugin(MorphSVGPlugin);

MorphSVGPlugin.convertToPath("circle");


let menu = document.querySelector("#nav-container");
let menuWidth = menu.offsetWidth; 
// console.log(menuWidth)


export const menuAnimation = new gsap.timeline({paused:true});
menuAnimation.to("#nav-container",{duration:0.5, x:0, alpha:1, stagger: 2})
.to(".stagger-in-nav",{duration:0.01, x:0, y:"+=15", alpha:1, ease: "elastic", stagger: .05}, "-=.2")
.to(".move-nav",{duration:0.5, x:-menuWidth, alpha:1}, "-=.5");

window.addEventListener('load', menuAnimation);
window.addEventListener('resize', menuAnimation);




// function buildConditionalTween(mediaQuery) {

// if(mediaQuery.matches) {
// menuAnimation.to("#nav-container",{duration:0.5, x:0, alpha:1, stagger: 2})
// .to(".stagger-in-nav",{duration:0.01, x:0, y:"+=15", alpha:1, ease: "elastic", stagger: .05}, "-=.2")
// .to(".move-nav",{duration:0.5, x:-menuWidth, alpha:1}, "-=.5");
// }
// else{
//     menuAnimation.to("#nav-container",{duration:0.5, x:0, alpha:1})
// .to(".stagger-in-nav",{duration:0.01, x:0, y:0, alpha:1}, "-=.2")
// .to(".move-nav",{duration:0.5, x:0, alpha:1}, "-=.5");
// }


// }


// var mediaQuery = window.matchMedia("resize","(max-width: 1024px)");

// // Initialise
// buildConditionalTween(mediaQuery);

// // Listen to changes
// mediaQuery.addEventListener(buildConditionalTween);


gsap.set("#search-bar-svg",{scale:2, x:"-=85"})


export const searchJumpTL = new gsap.timeline({paused:true});
searchJumpTL
.to("#search-bar-svg", {duration: .2, x:"+=85"})
.to("#search-bar-line", {duration: .2, drawSVG: "0%"}, "-=.2")
.to("#search-bar-closed", {duration: .7, morphSVG: "#search-bar-open", ease: "elastic"}, "-=.2");

// export const searchStopJumpTL = new gsap.timeline({paused:true});
// searchStopJumpTL.to("#search-icon", {y:"0", repeat:0, yoyo:false});

