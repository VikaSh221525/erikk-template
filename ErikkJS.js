let cursr = document.querySelector(".cursor")
// document.addEventListener("mousemove", function(e){
//     gsap.to(".cursor", {
//         left: e.clientX - 10,
//         top: e.clientY - 10,
//         duration: 0.08, // Faster, smoother response
//         ease: "back.out(1.7)" 
//     });
// })
gsap.from("#fashionwerk",{
    y: 50,        // start 100px below
    opacity: 0,    // start fully transparent
    duration: 2, // animation duration
    ease: "power4.out", // smooth easing
    delay: 0.2     // slight delay after page load
})

gsap.from("#ourservice",{
    y: 50,        // start 100px below
    opacity: 0,    // start fully transparent
    duration: 2, // animation duration
    ease: "power4.out", // smooth easing
    delay: 0.2,     // slight delay after page load
    scrollTrigger:{
        trigger:"#ourservice",
        scroller:"body",
        start: "top 80%",
        // markers:true
    }
})

gsap.from("#selectionwork",{
    y: 50,        // start 100px below
    opacity: 0,    // start fully transparent
    duration: 2, // animation duration
    ease: "power4.out", // smooth easing
    delay: 0.2,     // slight delay after page load
    scrollTrigger:{
        trigger:"#selectionwork",
        scroller:"body",
        start: "top 80%",
        // markers:true
    }
})
gsap.from("#clientimage",{
    y: 50,        // start 100px below
    opacity: 0,    // start fully transparent
    duration: 2, // animation duration
    ease: "power4.out", // smooth easing
    delay: 0.2,     // slight delay after page load
    scrollTrigger:{
        trigger:"#clientimage",
        scroller:"body",
        start: "top 80%",
        // markers:true
    }
})
gsap.from("#letscreate",{
    y: 50,        // start 100px below
    opacity: 0,    // start fully transparent
    duration: 2, // animation duration
    ease: "power4.out", // smooth easing
    delay: 0.2,     // slight delay after page load
    scrollTrigger:{
        trigger:"#letscreate",
        scroller:"body",
        start: "top 80%",
        // markers:true
    }
})
gsap.from("#team6",{
    y: 50,        // start 100px below
    opacity: 0,    // start fully transparent
    duration: 2, // animation duration
    ease: "power4.out", // smooth easing
    delay: 0.2,     // slight delay after page load
    scrollTrigger:{
        trigger:"#team6",
        scroller:"body",
        start: "top 80%",
        // markers:true
    }
})

let navEl = document.querySelector(".nav");
let hamburger = document.querySelector(".Hamburger");

hamburger.addEventListener("click", ()=>{
    navEl.classList.toggle("nav--open");
    hamburger.classList.toggle("hamburger--open");
    
})
