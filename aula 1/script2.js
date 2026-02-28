
class Cachorro{
    constructor(raça,nome) {
    this.raça = raça
    this.nome = nome
    }
    Latir(){
        return console.log(`o cachorro chamado ${this.nome}, latiu!`)
    }
}

const cachorro = new Cachorro("Vira-Lata", "Henrique")
console.dir(cachorro)
cachorro.Latir()