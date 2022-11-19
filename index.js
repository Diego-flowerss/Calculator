const displayValue1= document.getElementById("value1")
const displayValue2= document.getElementById("value2")
const numberButton = document.querySelectorAll(".number")
const operatorButton = document.querySelectorAll(".operator")

const display = new Display(displayValue1,displayValue2)

numberButton.forEach(button => { 
    button.addEventListener("click", () => display.addNumber(button.innerHTML))
})

operatorButton.forEach(button => {
    button.addEventListener("click", () => display.computar(button.value))
})