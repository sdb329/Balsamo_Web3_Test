
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export function scrollAnimation(){
    console.log("this is working test123");

    const tl = new gsap.timeline();

    tl.from("#region-1",{
        
        duration: 6,
        // x: "+=150",
        alpha: 0,
        stagger: 0.4,
        ease: "back"
    });

}

