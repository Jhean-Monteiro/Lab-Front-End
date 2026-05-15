// spread 

const numeros = [1,2,3]
const maisNumeros = [...numeros, 4, 5]

console.log(numeros)



// spread com objetos

const config = {tema: "dark", idioma: "pt-br"}
const novaConfig = {...config, idioma: "en-US"}
console.log(config)
console.log(novaConfig)


// rest em funções
const somar = (...numeros) => numeros.reduce((acc, n) => acc + n, 0);
console.log(somar(1,2,3,4,5))



const mostrarAnimais = (...lista) => {
    console.log(lista)
}

mostrarAnimais("cachorro", "gato", "macaco", "coelho", "tigre")

