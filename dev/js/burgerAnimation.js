import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);

gsap.set(".burger-lines",{transformOrigin:"center"});
gsap.set("#top",{drawSVG: "0% 37%"});
gsap.set("#bottom",{drawSVG: "0% 37%"});
gsap.set("#outline",{drawSVG: "0%"});

const topTL = new gsap.timeline();
topTL

.to(".burger-lines:nth-child(1)",{duration:0.25, drawSVG: "80% 100%"})
.to(".burger-lines:nth-child(1)",{duration:0.25});

const bottomTL = new gsap.timeline();
bottomTL.to(".burger-lines:nth-child(2)",{duration:0.25, drawSVG: "80% 100%"})
.to(".burger-lines:nth-child(2)",{duration:0.25});

// const shuffleTL = new gsap.timeline({repeat: 5});
// shuffleTL
// .fromTo(".burger-lines", {

//     duration: .5,
//     x: "-=25",
//     ease: "power4"
// }, {
//     duration: .5,
//       x: "+=25",
//   ease: "power1"

// });

// const middleTL = new gsap.timeline();
// middleTL.to(".burger-lines:nth-child(2)",{duration:0.25, scale:0})
// .to("#outline",{duration:0.25, drawSVG:"100%", stroke:"#B3ECFF"});

export const burgerTL = new gsap.timeline({paused:true});

burgerTL.add(topTL,"burger")
    .add(bottomTL,"burger");
    // .add(shuffleTL,"burger")

    
    export const burgerTL2 = new gsap.timeline({paused:true});

    // burgerTL2
    //     .add(shuffleTL,"burger");


    // tl.fromTo("#drawsvg-snowflake", {

    //     duration: 2,
    //     drawSVG: "0% 8.5%"
    // }, {
    //     duration: 2,
    //     ease: "slowMiddle",
    //     drawSVG: "90% 100%"
    // });

    

    // tl.fromTo(".burger-lines", {

    //     duration: .5,
    //     x: "-=25",
    //     ease: "power4"
    // }, {
    //     duration: .5,
    //       x: "+=25",
    //   ease: "power1"

    // });
