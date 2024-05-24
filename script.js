let modeBtn = document.querySelector("#mode-btn");
let main = document.querySelector("#main");
const root = document.documentElement;

let isDark = false;

modeBtn.addEventListener("click", () => {
    if (!(isDark)) {
        modeBtn.style.color = "white";
        modeBtn.style.backgroundColor = "black";
        main.style.backgroundColor = "black";
        root.style.setProperty('--main-color', "white");
        isDark = true;
    }
    else {
        modeBtn.style.color = "black";
        modeBtn.style.backgroundColor = "white";
        main.style.backgroundColor = "rgb(227, 228, 212)";
        root.style.setProperty('--main-color', "black");
        isDark = false;
    }
})

