// tentei implementar algumas melhorias que infelizmente não deram certo.
// mas o minimo que foi pedido está entregue. 

const tag = '<button id="btn">Clique no botão para ver um gato 🐱</button> <br><br></br>'
const div = document.querySelector('div')
div.innerHTML = tag

const button = document.getElementById('btn')

const img = document.getElementById('catimage')

button.addEventListener('click', ()=>{
    fetch("https://api.thecatapi.com/v1/images/search?limit=10")
    .then(response => response.json())
    .then(data=> {
        if (img.src = data[0].url) {
            setTimeout(()=>{
                document.getElementById('btn').remove()
            }, 1000)

            setTimeout(()=> {
                const tag = "<button id='btn2'>Limpar Imagem</button>"
                div.innerHTML = tag
            }, 1000)
            
        }
        div.addEventListener('click', ()=> {
            img.src = ''
            div.innerHTML = '<button id="btn">Clique no botão para ver um gato 🐱</button> <br><br></br>'
        })
    })
    .catch(err => {
        console.error(err)
    })
})


