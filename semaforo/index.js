const img = document.getElementById("img");
const buttons = document.getElementById("btns")
const stop = document.getElementById("stop")
let colorIndex = 0
let intervalId = null

const trafficlight = (event) => {
    stopAutomatic()
    turnOn[event.target.id]()
}

const changeColor = () => {
    const colors = ["red", "yellow", "green"]
    const color = colors[colorIndex]
    turnOn[color]()
    nextIndex()
}

const stopAutomatic = () => {
    clearInterval(intervalId)
    img.src = "img/desligado.png"
}

const nextIndex = () => {
    colorIndex = colorIndex < 2 ? ++colorIndex : colorIndex = 0
}

const turnOn = {
    "red": () => img.src = "img/vermelho.png",
    "yellow": () => img.src = "img/amarelo.png",
    "green": () => img.src = "img/verde.png",
    "automatic": () => intervalId = setInterval(changeColor, 1000),
    "stop": stopAutomatic
}


buttons.addEventListener("click", trafficlight)
