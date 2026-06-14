export const loopComment = () => {
    const paragraphText = (number) => {
        let text = "";
        switch (number) {
            case 0:
                text =
                    "“My brokers love being Branch so much we use it for our own office.”";
                break;
            case 1:
                text = "The team loves our ergonomic chairs. Genuine, so comfortable.";
                break;
            case 2:
                text =
                    "Furnishing a 17K square foot office is completed. Branch did it all";
                break;
            case 3:
                text =
                    "Branch crushed our installation in the Freedom Tower. Didn’t lift a finger.";
                break;
            case 4:
                text =
                    "Ordered Branch workstations twice for our NYC HQ and twice for LA office.";
                break;
            case 5:
                text =
                    "Amazed you can get quality and service like Branch for such a low price";
                break;
            default:
                break;
        }
        return text;
    };
    const UserTitleText = (number) => {
        let text = "";
        switch (number) {
            case 0:
                text = "Jonathan Wasserstrum";
                break;
            case 1:
                text = "Jason Rapaport";
                break;
            case 2:
                text = "Jeff Cirp";
                break;
            case 3:
                text = "Javane Felix";
                break;
            case 4:
                text = "Ali Nicols";
                break;
            case 5:
                text = "Jenny Hoyh";
                break;
            default:
                break;
        }
        return text;
    };
    const JobTitleText = (number) => {
        let text = "";
        switch (number) {
            case 0:
                text = "CEO, Squarefoot";
                break;
            case 1:
                text = "Chief of Staff, Universal Standard";
                break;
            case 2:
                text = "CEO, Cargo";
                break;
            case 3:
                text = "Operations, Hive";
                break;
            case 4:
                text = "COO, Overtime";
                break;
            case 5:
                text = "Director of Real Estate, Breather";
                break;
            default:
                break;
        }
        return text;
    };
    for (let numberOfLoop = 0; numberOfLoop < 6; numberOfLoop++) {
        const elements = {
            MainDiv: document.createElement("div"),
            ContainerStar: document.createElement("div"),
            ContainerText: document.createElement("div"),
            UserComment: document.createElement("p"),
            UserTitle: document.createElement("h1"),
            JobTitle: document.createElement("h2"),
        };
        const styleMainDiv = () => {
            elements.MainDiv.className = "w-fit px-5 xs:px-8 sm:px-20 lg:mb-10";
        };
        const styleContainerStar = () => {
            elements.ContainerStar.className = "h-8 flex justify-center items-center";
        };
        const styleContainerText = () => {
            elements.ContainerText.className =
                "flex flex-col justify-center items-center";
        };
        const styleParagraph = () => {
            elements.UserComment.className =
                "text-center text-lg text-[#31463b] sm:text-lg";
            elements.UserComment.innerText = paragraphText(numberOfLoop);
        };
        const styleUserTitle = () => {
            elements.UserTitle.className =
                "mt-2 text-xl font-semibold text-[#31463B] sm:text-base";
            elements.UserTitle.innerText = UserTitleText(numberOfLoop);
        };
        const styleJobTitle = () => {
            elements.JobTitle.className = "text-lg text-[#139839] sm:text-sm";
            elements.JobTitle.innerText = JobTitleText(numberOfLoop);
        };
        const handleCallStyle = async () => {
            await styleMainDiv();
            await styleContainerStar();
            await styleContainerText();
            await styleParagraph();
            await styleUserTitle();
            await styleJobTitle();
        };
        const callHandleStyle = handleCallStyle();
        const mainLayout = document.querySelector("#mainLayout");
        const addElementHTML = () => {
            mainLayout.append(elements.MainDiv);
            elements.MainDiv.append(elements.ContainerStar);
            elements.MainDiv.append(elements.ContainerText);
            elements.ContainerText.append(elements.UserComment);
            elements.ContainerText.append(elements.UserTitle);
            elements.ContainerText.append(elements.JobTitle);
        };
        const callAddElementHTML = addElementHTML();
        for (let i = 0; i < 5; i++) {
            const createStar = document.createElement("img");
            const styleStar = () => {
                createStar.className = "w-8 h-8";
                createStar.src = "/src/assets/image/star-solid.png";
            };
            const callStyleOfStar = styleStar();
            elements.ContainerStar.append(createStar);
        }
    }
};
//# sourceMappingURL=teamsLove.js.map