// arrays Methods essenciais

const produtos = [
    {id: 1, nome: "Notebook", preco: 3500},
    {id: 2, nome: "mouse", preco: 150},
    {id: 3, nome: "teclado", preco: 350}
]

// map -> transforma cada item
const nomes = produtos.map(p => p.nome)
console.log(nomes, "\n")

// filter
const caros = produtos.filter(p => p.preco > 200)
console.log(caros, "\n")

// find
const notebooks = produtos.find(p => p.nome === "Notebook")
console.log(notebooks, "\n")

// reduce
const total = produtos.reduce((acc, p) => acc + p.preco, 0)

console.log(total)

