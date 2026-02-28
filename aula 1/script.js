// powershell -ep bypass 


class Pessoa {
    constructor(nome, idade, altura){
        this.nome = nome,
        this.idade = idade,
        this.altura = altura
    }
}

const pessoa = new Pessoa("pedro", 34, 2)
console.log(pessoa)