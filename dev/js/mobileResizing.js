import { gsap } from "gsap";

// import gsap from "gsap/all";

gsap.set(".ocean-clip", {

    // scale: 2,
    transformOrigin: "50%, 50%"
})

gsap.set("#search-bar-open", {
            
    alpha:0

})

gsap.set(".ocean-clip", {alpha: 1})


export function displayWindowSize(){

    let menu = document.querySelector("#nav-container");
    let menuHeight = menu.offsetHeight; 

    // console.log(menuHeight);
    // gsap.set("#nav-container", {y:"-=300"})

    if(document.documentElement.clientWidth <= 1024){
        gsap.set(".nav-btns-li", {x:menuHeight,
            
            alpha:0
        
        })
        gsap.set(".stagger-in-nav", {
            
            alpha:0
        
        })
        gsap.set(".nav-svg-full", {
            
            alpha:1
        
        })

    
    }else{
        // console.log("un-hide");
        gsap.set(".nav-btns-li",{x:0,
        alpha:1})

        gsap.set(".stagger-in-nav", {
            alpha:1
        })
        gsap.set(".nav-svg-full", {
            
            alpha:1
        
        })
    }
}

