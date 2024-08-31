const turnOnOff = document.getElementById("turnOn")
const lamp = document.getElementById("lamp")

function isBroken() {
    return lamp.src.indexOf("quebrada") > -1
}

function lampOn() {
    if(!isBroken()){
        lamp.src = "imagens/ligada.jpg"
        turnOnOff.textContent = "Desligar"
    } 
}

function lampOff() {
    if(!isBroken()){
        lamp.src = "imagens/desligada.jpg"
        turnOnOff.textContent = "Ligar"
    }  
}

function lampOnOver(){
    if(turnOnOff.textContent == "Ligar"){
        lampOn()
    } else {
        lampOff()
    }
}

function lampBroken() {
    lamp.src = "imagens/quebrada.jpg"
}

function lampOnOff () {
    if(turnOnOff.textContent == "Ligar"){
        lampOn()      
    } else {
        lampOff()
    }
}

turnOnOff.addEventListener("click", lampOnOff)
lamp.addEventListener("mouseover", lampOnOver)
lamp.addEventListener("dblclick", lampBroken)