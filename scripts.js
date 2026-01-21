
const form = document.getElementById("converterForm")
const amount = document.getElementById("amount")
const fromCurrency = document.getElementById("fromCurrency")
const toCurrency = document.getElementById("toCurrency")
const convertedAmount = document.getElementById("convertedAmount")

const API_URL = "https://api.exchangerate-api.com/v4/latest/"
const loading = document.querySelector(".loading")
const result = document.querySelector(".result")
const error = document.querySelector(".error")



 async function convertMoney(){

loading.style.display="block"
error.style.display="none"
result.style.display="none"

    

    try{
  const response = await fetch(API_URL + fromCurrency.value)
  const data = await response.json()
  const rate = data.rates[toCurrency.value]
  const convertedValue = (amount.value * rate).toFixed(2)

  convertedAmount.value = convertedValue
    result.style.display="block"
    
  result.innerHTML =`
<div> ${amount.value} ${fromCurrency.value} = ${convertedAmount} ${toCurrency.value} </div>
<div>
  Taxa : 1 ${fromCurrency.value} = ${rate.value} ${toCurrency.value}
</div>

   `   
    }
   catch(err){
  
     error.style.display="block"
      error.innerHTML= `falha ao converter moeda ! tente novamente mais tarde.`
  
  }

loading.style.display="none"
}

form.addEventListener("submit", (event) => {
    event.preventDefault()
   convertMoney()
})
