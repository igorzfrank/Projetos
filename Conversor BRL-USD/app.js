const btnConversor = document.querySelector("#conversor")
const inputBRL = document.querySelector("#dinheiroBRL")
const dinheiroUSD = document.querySelector("#dinheiroUSD")

btnConversor.addEventListener("click",()=>{
    const valor = inputBRL.value * 5.49
    dinheiroUSD.innerHTML = valor
})