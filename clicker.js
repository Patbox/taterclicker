var num = Number(0);

function taterClick() {
    num = Number(localStorage.getItem("clicks"));
    num += Number(1);
    
    var numbers = document.getElementById("numbers");
    
    localStorage.setItem("clicks", Number(num));
    
    numbers.innerHTML = num;
    
    if (num >= 100) {
        document.getElementById("tater").src = "https://cdn.discordapp.com/emojis/559880832148439077.png";
    }
    
    if (num >= 200) {
        document.getElementById("tater").src = "https://cdn.discordapp.com/emojis/707018250961289276.png";
    }
    
    if (num >= 500) {
        document.getElementById("tater").src = "https://cdn.discordapp.com/emojis/749221602486517780.png";
    }
    
    if (num >= 1000) {
        document.getElementById("tater").src = "https://cdn.discordapp.com/emojis/757177176419467305.png";
    }
}