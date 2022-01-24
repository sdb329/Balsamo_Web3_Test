import { gsap } from "gsap";

// import gsap from "gsap/all";

export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menuHeight = menu.offsetHeight; 

    console.log(menuHeight);
    // gsap.set("#nav-container", {y:"-=300"})

    if(document.documentElement.clientWidth <= 1024){
        gsap.set("#nav-container", {y:-menuHeight 
            
            // alpha:0
        
        })
    }else{
        console.log("un-hide");
        gsap.set("#nav-container",{y:0})
    }
}