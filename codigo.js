let peso = 0
let altura = 0
let imc = 0
let estado = ""
let clase = ""

function calcularIMC() {
    peso = document.getElementById("peso").value
    altura = document.getElementById("altura").value

    imc = peso / (altura * altura)
    imc = imc.toFixed(2)

    calcularEstado()
    renderizarResultado()
}

function calcularEstado() {
    if (imc < 18.5) {
        estado = "Bajo peso"
        clase = "bajo"
    } else if (imc < 25) {
        estado = "Normal"
        clase = "normal"
    } else if (imc < 30) {
        estado = "Sobrepeso"
        clase = "sobrepeso"
    } else {
        estado = "Obesidad"
        clase = "obesidad"
    }
}

function renderizarResultado() {
    let resultado = document.getElementById("resultado")
    resultado.className = clase

    document.getElementById("imcValor").innerText = "IMC: " + imc
    document.getElementById("imcEstado").innerText = "Estado: " + estado
}
