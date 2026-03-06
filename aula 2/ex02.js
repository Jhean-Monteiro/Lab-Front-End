var nome = "Fabricio"
console.log(nome)
nome = true
console.log(typeof nome)

// com let
let nome2 = "Pedro"
console.log(nome)
nome = false
console.log(typeof nome)

// const 
const nome3 = "Jhean"
// nome3 = 2 // não pode reatribuir valor a constantes
console.log(nome3)

nome = () => {
    const nome3 = "Luiz"
    console.log(nome3)
}
nome()