import { gsap } from "gsap";

export const menuAnimation = new gsap.timeline({paused:true});
menuAnimation.to("#nav-container",{duration:0.5, x:0, alpha:1, stagger: 2})
.to(".stagger-in-nav",{duration:0.001, x:0, alpha:1, stagger: .05});

if(document.documentElement.clientWidth <="1024px"){
    menuAnimation.to("#nav-container",{duration:0.5, x:0, alpha:1, stagger: 2})
    .to(".stagger-in-nav",{duration:0.001, x:0, alpha:1, stagger: .05});
}else{
    menuAnimation.to("#nav-container",{x:0, alpha:1})
    .to(".stagger-in-nav",{x:0, alpha:1});
}