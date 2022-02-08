import gsap from "gsap/all";


let navButtonsAnimate = document.querySelectorAll(".nav-grow");

let navSvgOcean = document.querySelectorAll("#wave-width");

console.log(navButtonsAnimate.length);

console.log(navSvgOcean.width + " is the width of the svg");


export const oceanWavesMove = new gsap.timeline({paused:true});


const movingWaves = new gsap.timeline();

if(window.innerWidth <= 1048){
movingWaves.to(".ocean-clip",{duration:.7, x:"-=23", ease: "none", repeat:-1}, "start")}
else{
    movingWaves.set(".ocean-clip", {scale:0})
}


oceanWavesMove.add(movingWaves,"waves")




export function menuListners (){

    
    console.log("working");
    if(window.innerWidth <= 1048){

            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    // console.log("working123");
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1.01, color: '#15344F', transformOrigin: '50% 50%', ease: "elastic", background: "#B3ECFF"})
                })
                gsap.set(".ocean-clip", {alpha: 1})

        
                link.addEventListener("mouseleave", ()=>{
                    // console.log("working123 leave");
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "#15344F", color: '#B3ECFF'})
                    gsap.set(".ocean-clip", {alpha: 1})
                })
       

               
            });

        }else{
            navButtonsAnimate.forEach((link, i) =>{

                link.addEventListener("mouseenter", ()=>{
                    // console.log("working123");
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, color: '#C8F8D6', transformOrigin: '50% 50%', ease: "elastic", background: "#15344F"})
                    gsap.set(".ocean-clip", {alpha: 1})
                })
        
                link.addEventListener("mouseleave", ()=>{
                    // console.log("working123 leave");
                    gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "#15344F", color: '#B3ECFF'})

                    gsap.set(".ocean-clip", {alpha: 1})
                })
            });
        }

        // if(window.innerWidth <= 1048){

           

        //     navSvgOcean.forEach((link2, i) =>{

        //         link2.addEventListener("mouseenter", ()=>{
        //             console.log("working1234567");
        //             gsap.to(navSvgOcean[i],{duration:.5, x:"-=20", ease: "none", repeat:-1}, "start")
        //         })
        
        //         // link.addEventListener("mouseleave", ()=>{
        //         //     console.log("working123 leave");
        //         //     gsap.to(navButtonsAnimate[i],{duration:.03, scale: 1, stagger:.3, background: "#15344F", color: '#B3ECFF'})
        //         // })
        //     });
        // }

        
   

    }