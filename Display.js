class Display {
    constructor(displayValue2,displayValue1) {
        this.displayValue1 = displayValue1
        this.displayValue2 = displayValue2
        this.Calulator = new Calculator()
        this.value1 = ""
        this.value2 = ""
        this.operatorType=undefined
        this.signos = {
            sum: '+',
            div: '%',
            mult: 'x',
            subs: '-', 
        }
    }

    delete(){
        this.value1 = this.value1.toString().slice(0,-1)
        this.printValues()
    }

    deleteAll(){

        this.value1=""
        this.value2=""
        this.operatorType = undefined
        this.printValues()

    }

    computar(tipo){
        this.operatorType !== "equal" && this.calc()
        this.operatorType = tipo
        this.value2 = this.value1 || this.value2
        this.value1 = ""
        this.printValues()
    }

    addNumber(number) {
        if(number === "." && this.value1.includes(".")) return
        this.value1 = this.value1.toString() + number.toString()
        this.printValues() 
    }

    printValues(){ 
        this.displayValue1.textContent = this.value1
        this.displayValue2.textContent = `${this.value2} ${this.signos[this.operatorType] || ''}`
    }

    calc(){
        const value1 = parseFloat(this.value1)
        const value2 = parseFloat(this.value2)

        if(isNaN(value1) || isNaN(value2)) return
        this.value1 = this.Calulator[this.operatorType](value2,value1)
    }
}