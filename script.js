let start = document.querySelector(".start");
let stop = document.querySelector(".stop");
let colorDiv = document.querySelector(".color");
let h1 = document.querySelector("h1");

function randomColor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let rgb = `RGB(${red}, ${green}, ${blue})`;
    return rgb ;
}

function getColor() {
    let startColor = setInterval (() => {       
        let color = randomColor();
    
        colorDiv.style.backgroundColor = color;
        h1.innerHTML = color;
    }, 1000);
    
    document.querySelector(".stop").addEventListener("click", () => {
        clearInterval(startColor)
    });
    
    let reset = document.querySelector(".reset");
    reset.addEventListener("click", () => {
        colorDiv.style.backgroundColor = "#111";
        h1.innerHTML = "Color";
        clearInterval(startColor);
});
}


start.addEventListener("click", () => {
    getColor()
});