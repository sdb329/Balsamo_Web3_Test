import { gsap } from "gsap";

// import gsap from "gsap/all";

export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menuHeight = menu.offsetHeight; 

    console.log(menuHeight);
    // gsap.set("#nav-container", {y:"-=300"})

    if(document.documentElement.clientWidth <= 1024){
        gsap.set("#nav-container", {x:menuHeight,
            
            alpha:0
        
        })
        gsap.set(".stagger-in-nav", {
            
            alpha:0
        
        })

    
    }else{
        console.log("un-hide");
        gsap.set("#nav-container",{x:0,
        alpha:1})

        gsap.set(".stagger-in-nav", {
            alpha:1
        })
    }
}