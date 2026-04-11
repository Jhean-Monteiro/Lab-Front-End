// console.log("A")

// setTimeout(()=> {
//     console.log("B")
// }, 3000)

// console.log("C")

const promise = new Promise((resolve, reject) => {
    let sucesso = false;
    if (sucesso) {
        resolve("Deu Certo")
    } else {
        reject("Deu Erro")
    }
})

promise
    .then((res) => {
        console.log(res)
    })
    .catch((error)=>{
        console.log(error)
    })

// ========= // ================== // ================== // ================== // ================== //

const button = document.getElementById('btn')
const img = document.getElementById('catimage')

button.addEventListener('click', ()=>{
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(response => response.json())
    .then(data=> {
        img.src = data[0].url
    })
    .catch(err => {
        console.error(err)
    })
})









async function Teste(){

}