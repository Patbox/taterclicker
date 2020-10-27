let num: number = 0;

// @ts-ignore
const tater: HTMLImageElement = document.getElementById("tater")
// @ts-ignore
const numbers: HTMLDivElement = document.getElementById("numbers")


tater.onclick = function () {
    num = Number(localStorage.getItem("clicks"));
    num += Number(1);
    
    var numbers = document.getElementById("numbers");
    
    localStorage.setItem("clicks", num.toString());
    
    numbers.innerHTML = num.toString();
    
    if (num >= 100) {
		tater.src = "https://cdn.discordapp.com/emojis/559880832148439077.png";
    }
    
    if (num >= 200) {
        tater.src = "https://cdn.discordapp.com/emojis/707018250961289276.png";
    }
    
    if (num >= 500) {
        tater.src = "https://cdn.discordapp.com/emojis/749221602486517780.png";
    }
    
    if (num >= 1000) {
        tater.src = "https://cdn.discordapp.com/emojis/757177176419467305.png";
    }
}