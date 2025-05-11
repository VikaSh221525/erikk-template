let cursr = document.querySelector(".cursor")
document.addEventListener("mousemove", function(e){
    gsap.to(".cursor", {
        left: e.clientX - 10,
        top: e.clientY - 10,
        duration: 0.08, // Faster, smoother response
        ease: "power2.out" 
    });

})