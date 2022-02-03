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

        gsap.set(".search-msg", {
            
            alpha:0,
            x:"+=150"
        
        })
        gsap.set("#search-icon", {
            
            x:"+=150"
        
        })

    
    }else{
        console.log("un-hide");
        gsap.set("#nav-container",{x:0,
        alpha:1})

        gsap.set(".stagger-in-nav", {
            alpha:1
        })
        gsap.set(".search-msg", {
            
            alpha:1
        
        })
        gsap.set("#search-icon", {
            
            alpha:1,
            x:"+=0"
        
        })
    }
}