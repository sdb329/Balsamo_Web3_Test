import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);



export function scrollAnimation(){
    console.log("this is working test123");

    const tl = new gsap.timeline();

    tl.from(".beach",{
        duration: 6,
        // x: "+=150",
        alpha: 0,
        stagger: 0.4,
        ease: "back",
        scrollTrigger: {
            trigger: "#region-1",
            toggleActions: "restart none resume none",
            markers: true,
            scrub: true
        }
    });

}

