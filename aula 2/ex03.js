// função construtora

function Pessoa(nome, idade, genero) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
}

const pessoa1 = new Pessoa("Jhean", 21, "M")
console.log(pessoa1)