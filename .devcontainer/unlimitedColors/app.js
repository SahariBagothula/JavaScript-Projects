
let generateRandomColors = () => {

    let hexValue = "0123456789ABCDEF";
    let generatedHexValue = '#';

    for(let i=0; i<6; i++){
        generatedHexValue += hexValue[Math.floor(Math.random() * 16)];
    }

    return generatedHexValue;

}

let intervalId;

let startGeneratingColors = () => {
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = generateRandomColors();
    }, 1000)
}

let stopGeneratingColors = () => {
    clearInterval(intervalId);
}

document.querySelector("#start").addEventListener('click', startGeneratingColors);
document.querySelector("#stop").addEventListener('click', stopGeneratingColors);