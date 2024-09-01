const hora = document.getElementById("_horas")
const min = document.getElementById("_minutos")
const seg = document.getElementById("_segundos")

function relogio () {
    let dateToday = new Date()
    let hr = dateToday.getHours()
    let minutos = dateToday.getMinutes()
    let segundos = dateToday.getSeconds()

    if(hr < 10) hr = "0" + hr

    if(minutos < 10) minutos = "0" + minutos

    if(segundos < 10) segundos = "0" + segundos
    hora.textContent = hr
    min.textContent = minutos
    seg.textContent = segundos

    
}

setInterval(relogio)