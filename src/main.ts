import { loopComment } from "./typescript/pages/teamsLove.js";
import { animation } from "./typescript/animation/animation.js";
import { header } from "./typescript/pages/header.js";
let isLoaded: boolean;

const displayData = () => {
  const MainStructure = document.querySelector(
    "#MainStructure",
  ) as HTMLDivElement;

  const htmlStructure = async () => {
    try {
      const mainSection = await fetch("./src/pages/mainSection.html");
      const displayMainSection = await mainSection.text();

      const Header = await fetch("./src/pages/header.html");
      const displayHeader = await Header.text();

      const differentBranch = await fetch("/src/pages/differentBranch.html");
      const displayDifferentBranch = await differentBranch.text();

      const featuredIn = await fetch("/.src/pages/featuredIn.html");
      const displayFeaturedIn = await featuredIn.text();

      const tables = await fetch("./src/pages/tables.html");
      const displayTables = await tables.text();

      const teamsLove = await fetch("./src/pages/teamsLove.html");
      const displayTeamsLove = await teamsLove.text();

      const elevateYourOffice = await fetch(
        "./src/pages/ElevateYourOffice.html",
      );
      const displayElevateYourOffice = await elevateYourOffice.text();

      const BranchExpert = await fetch("./src/pages/BranchExpert.html");
      const displayBranchExpert = await BranchExpert.text();

      const trustedTeams = await fetch("./src/pages/TrustedTeams.html");
      const displayTrustedTeams = await trustedTeams.text();

      const estion = await fetch("./src/pages/estion.html");
      const displayEstion = await estion.text();

      const footer = await fetch("./src/pages/footer.html");
      const displayFooter = await footer.text();

      if (MainStructure) {
        MainStructure.innerHTML +=
          displayHeader +
          displayMainSection +
          displayDifferentBranch +
          displayFeaturedIn +
          displayElevateYourOffice +
          displayTables +
          displayTeamsLove +
          displayBranchExpert +
          displayTrustedTeams +
          displayEstion +
          displayFooter;

        const callLoopElement = loopComment();
        const callAnimation = animation();
        const callHeader = header();
      }
    } catch (error) {
      console.error(error);
    }
  };
  htmlStructure();
};

const loadingScreen = document.querySelector("#loadingScreen") as HTMLDivElement;

const handleLoadData = () => {
  return new Promise((resolve, rejected) => {
    isLoaded = true;
    if (isLoaded) {
      setTimeout(() => {
        loadingScreen.remove()
        resolve(isLoaded);
        displayData();
      }, 3000)
    } else {
      throw new Error("Failed to load... Please try again.");
    }
  });
};

const handleError = async () => {
  const test = await handleLoadData().catch((error) => console.error(error));
};

const callHandleError = handleError();

