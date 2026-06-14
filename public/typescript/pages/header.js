import gsap from "gsap";
export const header = () => {
    const navIcon = document.querySelector("#navIcon");
    const headerPhone = document.querySelector("#headerPhone");
    const exitHeader = document.querySelector("#exitHeader");
    const headerBody = document.querySelector("#headerBody");
    headerPhone.remove();
    let animationHeader;
    navIcon.addEventListener("click", () => {
        document.body.prepend(headerPhone);
        gsap.fromTo(headerPhone, {
            xPercent: 400,
            opacity: 0,
            ease: "power2.inOut",
        }, {
            xPercent: 0,
            opacity: 1,
            ease: "power2.inOut"
        });
        console.log("helo");
    });
    exitHeader.addEventListener("click", () => {
        gsap.to(headerPhone, {
            xPercent: 400,
            opacity: 0,
            ease: "power2.inOut"
        });
        setTimeout(() => {
            headerPhone.remove();
        }, 1000);
    });
};
//# sourceMappingURL=header.js.map