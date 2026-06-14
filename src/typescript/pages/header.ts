import gsap from "gsap";

export const header = (): void => {
    const navIcon = document.querySelector("#navIcon") as HTMLDivElement;
    const headerPhone = document.querySelector("#headerPhone") as HTMLHeadingElement;
    const exitHeader = document.querySelector("#exitHeader") as HTMLDivElement;
    const headerBody = document.querySelector("#headerBody")!;

    headerPhone.remove()

    let animationHeader: boolean;

    navIcon.addEventListener("click", () => {
        document.body.prepend(headerPhone)
        gsap.fromTo(headerPhone, 
            {
                xPercent: 400,
                opacity: 0,
                ease: "power2.inOut",
            },
            {
                xPercent: 0,
                opacity: 1,
                ease: "power2.inOut"
            }
        )
        console.log("helo");
        
    })

    exitHeader.addEventListener("click", () => {
        gsap.to(headerPhone, 
            {
                xPercent: 400,
                opacity: 0,
                ease: "power2.inOut"
            }
        )
        setTimeout(() => {
            headerPhone.remove()
        }, 1000)
    })
}