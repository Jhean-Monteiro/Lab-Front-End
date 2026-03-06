
function Pessoa(nome, idade, genero) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
    this.nacionalidade = "Brasileiro"
}

const pessoa1 = new Pessoa("Jhean", 21, "M")
console.log(pessoa1)
console.log(pessoa1.nacionalidade = undefined)