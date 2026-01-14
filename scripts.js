

const botao = document.querySelector(".botão")

const dolar = 5.2
const euro = 6.2

const moedaAconverter = document.querySelector(".moeda-a-converter")
const moedaConvertida = document.querySelector(".moeda-convertida")

const currencySelect = document.querySelector(".currency-select")


function converter() {

    const currencySelect = document.querySelector(".currency-select").value

    const valorAconverter = document.querySelector(".input").value


    if (currencySelect == 'dolar') {


        moedaConvertida.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valorAconverter / dolar)
    }


    if (currencySelect == 'euro') {


        moedaConvertida.innerHTML = new Intl.NumberFormat("de-de", {
            style: "currency",
            currency: "EUR"
        }).format(valorAconverter / euro)



    }

    moedaAconverter.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(valorAconverter)
}



function textoModificar() {

    const mudartexto = document.querySelector("#currency-change")
    const imgCurrency = document.querySelector(".img-currency")
    if (currencySelect.value == "dolar") {

        mudartexto.innerHTML = "Dólar Americano"
        imgCurrency.src = './assets/estados-unidos (1) 1.png'

        converter()

    }



    if (currencySelect.value == 'euro') {

        mudartexto.innerHTML = "Euro"
        imgCurrency.src = './assets/euro.png'
        converter()
    }


}

currencySelect.addEventListener("change", textoModificar)
botao.addEventListener('click', converter)





