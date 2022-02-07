

let navButtonsAnimate = document.querySelectorAll(".nav-btns");
console.log(navButtonsAnimate.length);

export function menuListners (){
    console.log("working");

    navButtonsAnimate.forEach((link, i) =>{

        link.addEventListener("mouseenter", ()=>{
            console.log("working123");
        })
    });
}