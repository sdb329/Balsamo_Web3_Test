
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


console.log("hello");

export function usingScroll(){
    console.log("this is working test123");

    const tl = new gsap.timeline();
    tl.from("#hero-image",{
        duration: 6,
        // x: "+=150",
        alpha: 0,
        // stagger: 0.4,
        ease: "back",
        scrollTrigger: {
            trigger: "#hero",
            toggleActions: "restart none resume none",
            markers: true,
            scrub: true
        }
    });


}

// ScrollTrigger.create();