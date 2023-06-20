function changeMode(){
    let modeElement = document.querySelector('.mode');
    console.log(typeof modeElement.innerHTML);
    console.log(modeElement.innerHTML);
    if (modeElement.innerHTML.includes("lightmode")){
        console.log("Inside If function")
        modeElement.innerHTML = "<img src='images/dark_mode.png'></img>";
        changeToLightMode();
    }
    else{
        modeElement.innerHTML = "<img src='images/lightmode.png'>";
        changeToDarkMode();
    }
}

function changeToLightMode(){
    let bodyElement = document.body;
    let headerElement = document.querySelector(".header");
    let detailsBoxElement = document.querySelector(".details-box");
    bodyElement.classList.add("light-mode-body");
    headerElement.classList.add("light-mode-header");
    detailsBoxElement.classList.add("light-mode-details-box");

    let skillDetailsBoxElement = document.querySelectorAll(".skill-details-box-button");
    skillDetailsBoxElement.forEach((button) => {
        button.classList.add("light-mode-skill-details-box-button");
        });

    let horizontalLine = document.querySelectorAll(".horizontal-line");
    horizontalLine.forEach((button) => {
        button.classList.add("light-mode-horizontal-line");
        });
}

function changeToDarkMode(){
    let bodyElement = document.body;
    bodyElement.classList.remove("light-mode-body");

    let headerElement = document.querySelector(".light-mode-header");
    headerElement.classList.remove("light-mode-header");

    let detailsBoxElement = document.querySelector(".details-box");
    detailsBoxElement.classList.remove("light-mode-details-box");

    let skillDetailsBoxElement = document.querySelectorAll(".skill-details-box-button");
    skillDetailsBoxElement.forEach((button) => {
        button.classList.remove("light-mode-skill-details-box-button");
        });

    let horizontalLine = document.querySelectorAll(".horizontal-line");
    horizontalLine.forEach((button) => {
        button.classList.remove("light-mode-horizontal-line");
        });
}