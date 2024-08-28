(function () {
    const btn = document.getElementById("btn")

    function calcularImc(peso, altura) {
        return (peso / (altura * altura))
    }


    function classificaImc(imc) {
        if (imc < 18.5) {
            return "Você está abaixo do peso"
        } else if (imc < 24.9) {
            return "Você está em seu peso normal"
        } else if (imc < 29.9) {
            return "Você está com sobrepeso"
        } else if (imc < 34.9) {
            return "Cuidado você está com obesidade grau 1"
        } else if (imc < 39.9) {
            return "Cuidado você está com obesidade grau 2"
        } else {
            return "Cuidado, procure um médico, você está com obesidade mórbida"
        }

    }

    function init() {
        const nome = document.getElementById("nome")
        const peso = document.getElementById("peso")
        const altura = document.getElementById("altura")
        const resultado = document.getElementById("saidaJs")

        if (nome.value == "") {
            alert("O nome deve ser preenchido")
            nome.focus()
        } else if (peso.value == "") {
            alert("O peso deve ser preenchido")
            peso.focus()
        } else if (altura.value == "") {
            alert("A altura deve ser preenchido")
            altura.focus()
        }

        let _peso = parseFloat(peso.value)
        let _altura = parseFloat(altura.value)
        let _calcularImc = calcularImc(_peso, _altura).toFixed(2)
        let _classificaImc = classificaImc(_calcularImc)
        
        classificaImc(calcularImc)
        resultado.textContent = `Olá ${nome.value}, Seu IMC é ${_calcularImc}, ${_classificaImc} `
        
    }

    btn.addEventListener("click", init)


})()

