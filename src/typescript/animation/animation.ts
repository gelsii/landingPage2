import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const animation = (): void => {
   
    function heroSection(): void {
        const homeIMG = document.querySelector("#img-home") as HTMLImageElement
        gsap.from(homeIMG, 
            {
                yPercent: -100,
                duration: 1,
                opacity: 0,
                ease: "expo.inOut",
                delay: .4
            }
        )

        gsap.from("#home-top", 
            {
                xPercent: -100,
                duration: .5,
                stagger: .5,
                opacity: 0,
                ease: "power3.out",
                delay: .6
            }
        )
    }

    function header(): void {
        const header = document.querySelector("#header") as HTMLImageElement
        gsap.from(header, 
            {
                yPercent: -100,
                duration: 1,
                opacity: 0,
                ease: "expo.inOut"
            }
        )
    }

    

    function gsapAnimation(properties: { elements?: string , trigger?: string, startTrigger?: string, yPercent?: number, xPercent?: number, 
                                            duration?: number, opacity?: number, stagger?: number, delay?: number}) {

        type needUndefinedString = {
            string: string,
            number: number,
        }

        const undefinedTypes: needUndefinedString = {
            string: "",
            number: 0
        }

        gsap.from(properties.elements || undefinedTypes.string, 
            {
                yPercent: properties.yPercent || undefinedTypes.number,
                xPercent: properties.xPercent || undefinedTypes.number,
                duration: properties.duration || 1,
                ease: "power2.inOut",
                opacity: properties.opacity || undefinedTypes.number,
                stagger: properties.stagger || undefinedTypes.number,
                scrollTrigger: {
                    trigger: properties.trigger || undefinedTypes.string,
                    start: properties.startTrigger || undefinedTypes.string,
                    end: "bottom, 100%",
                    scrub: true,
                    onEnter: (): void => {
                        gsap.from(properties.elements || undefinedTypes.string,
                            {
                                yPercent: properties.yPercent || undefinedTypes.number,
                                xPercent: properties.xPercent || undefinedTypes.number,
                                duration: properties.duration || 1,
                                ease: "power2.inOut",
                                opacity: 0,
                                stagger: .3,
                                delay: properties.delay || undefinedTypes.number
                            }
                        )
                    },
                }
            }
        )
    }  
    
    
    function diffBranch(): void {
        gsapAnimation(
            {
                elements: "#icons-bottom",
                trigger: "#icons-bottom",
                startTrigger: "bottom, 100%",
                yPercent: 500,
                opacity: 0,
                duration: 1,
                stagger: .3
            }
        )
    }

    function featuredBranch(): void {
        gsapAnimation(
            {
                elements: "#FEATURED-bottom",
                trigger: "#FEATURED-bottom",
                startTrigger: "bottom, 80%",
                xPercent: 400,
                opacity: 0,
                duration: 1,
                stagger: .3
            }
        )
    }

    function elevateYourOffice(): void {
        gsapAnimation(
            {
                elements: "#elevateTitle-bottom",
                trigger: "#elevateTitle-bottom",
                startTrigger: "bottom, 100%",
                yPercent: 500,
                opacity: 0,
                duration: 1,
                stagger: .3
            } 
        )

        const idTextElements: string[] = ["text-elevate", "text2-elevate", "text3-elevate", "title1-elevate", "title2-elevate", "title3-elevate"];
        const idImgElements: string[] = ["img1-elevate", "img2-elevate", "img3-elevate"];

        for (let numberOfLoop: number = 0; numberOfLoop < idTextElements.length && idImgElements.length; numberOfLoop++) {

            gsapAnimation(
                {
                    elements: `#${idTextElements[numberOfLoop]}`,
                    trigger: `#${idTextElements[numberOfLoop]}`,
                    startTrigger: "bottom, 60%",       
                    xPercent: ( numberOfLoop == 1 || numberOfLoop == 4 ? -200 : 200 ),
                    opacity: 0,
                    duration: 1,
                    stagger: .3
                }
            )

            if(numberOfLoop < idImgElements.length){
                gsapAnimation(
                    {
                        elements: `#${idImgElements[numberOfLoop]}`,
                        trigger: `#${idImgElements[numberOfLoop]}`,
                        startTrigger: "bottom, 60%",       
                        xPercent: ( numberOfLoop == 1 ? 200 : -200 ),
                        opacity: 0,
                        duration: 1,
                        stagger: .3
                    }
                )
            }
        }
    } 

    function tables(): void {
        gsapAnimation(
            {
                elements: "#title-table",
                trigger: "#title-table",
                startTrigger: "bottom, 100%",
                yPercent: 500,
                opacity: 0,
                duration: 1,
                stagger: .3
            }
        )
    }


    function teamsLove(): void {
        gsapAnimation(
            {
                elements: "#title-teamsLove",
                trigger: "#title-teamsLove",
                startTrigger: "bottom, 100%",
                yPercent: 500,
                opacity: 0,
                duration: 1,
                stagger: .3
            }
        )
    }

    function branchExpert(): void {
        gsapAnimation(
            {
                elements: "#text-branchExpert",
                trigger: "#mainText-branchExpert",
                startTrigger: "bottom, 70%",
                yPercent: 500,
                opacity: 0,
                duration: 1,
                stagger: .3
            }
        )

        gsapAnimation(
            {
                elements: "#img-branchExpert",
                trigger: "#img-branchExpert",
                startTrigger: "bottom, 70%",
                xPercent: -400,
                opacity: 0,
                duration: 1,
                stagger: .3
            }
        )
    }

    function trustedTeams(): void {
        gsapAnimation(
            {
                elements: "#title-trusted",
                trigger: "#title-trusted",
                startTrigger: "bottom, 90%",
                xPercent: 400,
                opacity: 0,
                duration: .5,
                stagger: .3
            }
        )
    }

    function estion(): void {

        const idElements: string[] = ["title0-estion", "title1-estion", "title2-estion", "title3-estion", "title4-estion", "title5-estion", "title6-estion"]
        const delayAnimation: number[] = [.1, .2, .3, .4, .5, .6, .7]

        for (let numberOfLopp: number = 0; numberOfLopp < idElements.length ; numberOfLopp++) {
            
            gsapAnimation(
                {
                    elements: `#${idElements[numberOfLopp]}`,
                    trigger: `#${idElements[numberOfLopp]}`,
                    startTrigger: "bottom, 100%",
                    yPercent: 300,
                    opacity: 0,
                    duration: .5,
                    stagger: .3,
                    delay: delayAnimation[numberOfLopp] || 0
                }
            ) 
        }

        /*
        gsapAnimation(
            {
                elements: "#title-estion",
                trigger: "#mainEstion",
                startTrigger: "bottom, 50%",
                yPercent: 300,
                opacity: 0,
                duration: .5,
                stagger: .3
            }
        ) 
            */
    }

    function footer(): void {
        gsapAnimation(
            {
                elements: "#title-footer",
                trigger: "#textCon-footer",
                startTrigger: "bottom, 100%",
                xPercent: 300,
                opacity: 0,
                duration: .5,
                stagger: .3
            }
        )

        gsapAnimation(
            {
                elements: "#img-footer",
                trigger: "#textCon-footer",
                startTrigger: "bottom, 100%",
                xPercent: -300,
                opacity: 0,
                duration: .5,
                stagger: .3
            }
        )

        gsapAnimation(
            {
                elements: "#button-footer",
                trigger: "#textCon-footer",
                startTrigger: "bottom, 100%",
                yPercent: 300,
                opacity: 0,
                duration: .5,
                stagger: .3
            }
        )
    }
    

    const callingAnimations = async () => {
        await header(); await heroSection();
        await diffBranch(); await featuredBranch();
        await elevateYourOffice(); await tables();
        await teamsLove(); await branchExpert();
        await trustedTeams(); await estion();
        await footer();
    }

    const callAsync = callingAnimations()
}