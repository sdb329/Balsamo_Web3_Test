import gsap from "gsap/all";


let navButtonsAnimate = document.querySelectorAll(".nav-grow");
console.log(navButtonsAnimate.length);





export function menuListners (){

    
    console.log("working");
    if(window.innerWidth <= 1048){

            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    console.log("working123");
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1.15, color: '#15344F', transformOrigin: '50% 50%', ease: "elastic", background: "#B3ECFF"})
                })
        
                link.addEventListener("mouseleave", ()=>{
                    console.log("working123 leave");
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "#15344F", color: '#B3ECFF'})
                })
            });
        }else{
            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    console.log("working123");
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, color: '#C8F8D6', transformOrigin: '50% 50%', ease: "elastic", background: "#15344F"})
                })
        
                link.addEventListener("mouseleave", ()=>{
                    console.log("working123 leave");
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "#15344F", color: '#B3ECFF'})
                })
            });
        }
    

    }